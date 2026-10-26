import { useEffect, useMemo, useRef, useState } from 'react';

const ADMIN_PASSWORD = 'dranayeli2026';
const storageKey = 'dralm-site-config';

const defaultConfig = {
  brandName: 'Dra. Nayeli Mellado',
  heroTitle: 'Cuidado profesional<br />para una <span class="accent">versión más segura</span> de ti.',
  heroSubtitle: 'En mi práctica integramos atención médica, estética y acompañamiento personalizado para ayudarte a mejorar tu bienestar, imagen y confianza con resultados naturales.',
  aboutTitle: 'Tu bienestar empieza con una atención humana, clara y segura.',
  aboutText1: 'Soy la Dra. Nayeli Mellado, especialista en medicina estética y bienestar integral. Mi objetivo es acompañarte con un enfoque individual, cuidando cada detalle para ayudarte a sentirte mejor contigo misma y con más confianza.',
  aboutText2: 'Cada plan se diseña según tus objetivos, necesidades y estilo de vida para lograr resultados naturales, elegantes y sostenibles a largo plazo.',
  contactText: 'Estamos listos para acompañarte en tu proceso. Escríbenos para agendar tu consulta inicial, resolver dudas o recibir orientación personalizada.',
  phone: '+52 (444) 222 3344',
  email: 'hello@dranayelimellado.com',
  address: 'Calle Principal 123, San Luis Potosí',
  whatsapp: '+52 444 222 3344',
  colors: { primary: '#d48d8d', secondary: '#f8eee7', accent: '#7a7d5d', ink: '#2d2a2a' },
  logo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
  heroImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  aboutImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
  services: [
    { title: 'Consulta inicial', price: '$1,200', description: 'Valoración personalizada para definir el mejor tratamiento según tus objetivos.', icon: '✦' },
    { title: 'Lifting facial', price: '$2,800', description: 'Tratamiento no invasivo para mejorar tono, firmeza y luminosidad.', icon: '✧' },
    { title: 'Hidratación y rejuvenecimiento', price: '$1,800', description: 'Sesiones de bienestar y luminosidad para una piel más fresca y cuidada.', icon: '❋' }
  ],
  pricing: [
    { name: 'Consulta de valoración', price: '$1,200', details: ['Revisión inicial', 'Diagnóstico personalizado', 'Plan recomendado'] },
    { name: 'Tratamiento facial', price: '$2,800', details: ['Sesión profesional', 'Resultados naturales', 'Cuidado posterior'] },
    { name: 'Paquete bienestar', price: '$4,500', details: ['3 sesiones', 'Seguimiento continuo', 'Precio preferente'] }
  ],
  gallery: [
    { name: 'Consulta joven', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' },
    { name: 'Resultado natural', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80' },
    { name: 'Estética facial', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
    { name: 'Cuidados integrales', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80' }
  ],
  testimonials: [
    { quote: 'La atención fue muy cercana y profesional. Me sentí acompañada en cada paso.', author: 'María L.', role: 'Paciente' },
    { quote: 'Los resultados fueron naturales y muy elegantes. Definitivamente lo recomiendo.', author: 'Alejandra G.', role: 'Cliente' },
    { quote: 'Me encantó la atención personalizada y que todo quedó explicado con claridad.', author: 'Fernanda S.', role: 'Pacienta' }
  ],
  metrics: { years: '12+', patients: '4.8K', rating: '4.9/5' },
  floatingTitle: 'Consulta personalizada',
  floatingText: 'Diagnóstico con enfoque humano y natural'
};

const toAdminForm = (data) => ({
  brandName: data.brandName,
  heroTitle: data.heroTitle,
  heroSubtitle: data.heroSubtitle,
  contactText: data.contactText,
  phone: data.phone,
  email: data.email,
  address: data.address,
  whatsapp: data.whatsapp,
  primary: data.colors.primary,
  secondary: data.colors.secondary,
  accent: data.colors.accent,
  ink: data.colors.ink,
  servicesText: (data.services || []).map((service) => `${service.title} | ${service.description} | ${service.price}`).join('\n'),
  pricingText: (data.pricing || []).map((plan) => `${plan.name} | ${plan.price} | ${(plan.details || []).join('; ')}`).join('\n')
});

const parseServices = (txt) => {
  if (!txt || !txt.trim()) return defaultConfig.services;
  return txt.split('\n').map((line) => {
    const [title, description, price] = line.split('|').map((v) => v.trim());
    return {
      title: title || 'Servicio',
      description: description || 'Descripción del servicio.',
      price: price || '$0',
      icon: '✦'
    };
  });
};

const parsePricing = (txt) => {
  if (!txt || !txt.trim()) return defaultConfig.pricing;
  return txt.split('\n').map((line) => {
    const [name, price, detailsText] = line.split('|').map((v) => v.trim());
    return {
      name: name || 'Paquete',
      price: price || '$0',
      details: detailsText ? detailsText.split(';').map((d) => d.trim()).filter(Boolean) : ['Detalle del paquete']
    };
  });
};

function App() {
  const [config, setConfig] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (!stored) return defaultConfig;
      const parsed = JSON.parse(stored);
      return { ...defaultConfig, ...parsed, colors: { ...defaultConfig.colors, ...(parsed.colors || {}) } };
    } catch {
      return defaultConfig;
    }
  });

  const [loginPassword, setLoginPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminForm, setAdminForm] = useState(() => toAdminForm(defaultConfig));
  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', config.colors.primary);
    root.style.setProperty('--secondary', config.colors.secondary);
    root.style.setProperty('--accent', config.colors.accent);
    root.style.setProperty('--ink', config.colors.ink);
  }, [config.colors]);

  useEffect(() => {
    if (showAdmin) {
      setAdminForm(toAdminForm(config));
    }
  }, [showAdmin, config]);

  const publicSite = useMemo(() => ({
    ...config,
    services: config.services || [],
    pricing: config.pricing || [],
    gallery: config.gallery || [],
    testimonials: config.testimonials || []
  }), [config]);

  const handleLogin = () => {
    if (loginPassword === ADMIN_PASSWORD) {
      setShowLogin(false);
      setShowAdmin(true);
      setLoginPassword('');
      setAdminForm(toAdminForm(config));
      return;
    }
    window.alert('Contraseña incorrecta');
  };

  const openAdmin = () => {
    setShowLogin(true);
    setShowAdmin(false);
  };

  const closeAdmin = () => {
    setShowAdmin(false);
    setShowLogin(false);
  };

  const updateAdminField = (field, value) => {
    setAdminForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setConfig((prev) => ({
      ...prev,
      brandName: adminForm.brandName || defaultConfig.brandName,
      heroTitle: adminForm.heroTitle || defaultConfig.heroTitle,
      heroSubtitle: adminForm.heroSubtitle || defaultConfig.heroSubtitle,
      contactText: adminForm.contactText || defaultConfig.contactText,
      phone: adminForm.phone || defaultConfig.phone,
      email: adminForm.email || defaultConfig.email,
      address: adminForm.address || defaultConfig.address,
      whatsapp: adminForm.whatsapp || defaultConfig.whatsapp,
      colors: {
        primary: adminForm.primary || defaultConfig.colors.primary,
        secondary: adminForm.secondary || defaultConfig.colors.secondary,
        accent: adminForm.accent || defaultConfig.colors.accent,
        ink: adminForm.ink || defaultConfig.colors.ink,
      },
      services: parseServices(adminForm.servicesText),
      pricing: parsePricing(adminForm.pricingText)
    }));
    setShowAdmin(false);
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    setAdminForm(toAdminForm(defaultConfig));
    setShowAdmin(false);
  };

  const handleFileUpload = (field) => (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      setConfig((prev) => ({ ...prev, [field]: result }));
    };
    reader.readAsDataURL(file);
  };

  const exportConfig = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dralm-config.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importConfig = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setConfig({ ...defaultConfig, ...parsed, colors: { ...defaultConfig.colors, ...(parsed.colors || {}) } });
        setShowAdmin(false);
        window.alert('Configuración importada correctamente');
      } catch {
        window.alert('El archivo JSON no es válido');
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="brand-mark">
              <img id="brandLogo" src={publicSite.logo} alt="Logo de la Dra. Nayeli Mellado" />
            </div>
            <div className="brand-name" id="brandName">{publicSite.brandName}</div>
          </div>
          <nav className="nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#servicios">Servicios</a>
            <a href="#precios">Precios</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button className="btn btn-primary" type="button" onClick={openAdmin}>Panel admin</button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <div className="eyebrow">Atención estética y personal</div>
              <h1 dangerouslySetInnerHTML={{ __html: publicSite.heroTitle }} />
              <p className="lead">{publicSite.heroSubtitle}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">Agendar cita</a>
                <a className="btn btn-secondary" href="#servicios">Ver servicios</a>
              </div>
              <div className="hero-metrics">
                <div className="metric"><strong>{publicSite.metrics?.years || '12+'}</strong><span>Años de experiencia</span></div>
                <div className="metric"><strong>{publicSite.metrics?.patients || '4.8K'}</strong><span>Pacientes atendidos</span></div>
                <div className="metric"><strong>{publicSite.metrics?.rating || '4.9/5'}</strong><span>Calificación</span></div>
              </div>
            </div>
            <div className="visual-wrap">
              <div className="visual-card">
                <img src={publicSite.heroImage} alt="Dra. Nayeli Mellado" />
              </div>
              <div className="floating-card">
                <strong>{publicSite.floatingTitle}</strong>
                <span>{publicSite.floatingText}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="sobre-mi">
          <div className="container about-inner">
            <div className="about-photo">
              <img src={publicSite.aboutImage} alt="Retrato de la Dra. Nayeli Mellado" />
            </div>
            <div>
              <div className="section-tag">Sobre mí</div>
              <h2>{publicSite.aboutTitle}</h2>
              <p>{publicSite.aboutText1}</p>
              <p>{publicSite.aboutText2}</p>
              <ul className="check-list">
                <li>Diagnóstico personalizado</li>
                <li>Tratamientos seguros</li>
                <li>Atención cercana y profesional</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="servicios">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-tag">Servicios</div>
                <h2>Soluciones pensadas para ti.</h2>
              </div>
            </div>
            <div className="services-grid">
              {publicSite.services.map((service, idx) => (
                <article key={`${service.title}-${idx}`} className="card service-card">
                  <div className="service-icon">{service.icon || '✦'}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <strong>{service.price}</strong>
                    <span>Más info</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="precios">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-tag">Precios</div>
                <h2>Opciones accesibles y transparentes.</h2>
              </div>
            </div>
            <div className="pricing-grid">
              {publicSite.pricing.map((plan, index) => (
                <article key={`${plan.name}-${index}`} className={`card pricing-card ${index === 1 ? 'featured' : ''}`}>
                  {index === 1 && <span className="badge">Popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price"><strong>{plan.price}</strong><span>MXN</span></div>
                  <ul className="pricing-list">
                    {(plan.details || []).map((detail, i) => (
                      <li key={`${detail}-${i}`}>{detail}</li>
                    ))}
                  </ul>
                  <a href="#contacto" className="btn btn-primary">Solicitar</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-tag">Galería</div>
                <h2>Resultados que inspiran confianza.</h2>
              </div>
            </div>
            <div className="gallery-grid">
              {publicSite.gallery.map((photo, idx) => (
                <figure key={`${photo.name}-${idx}`} className="gallery-card">
                  <img src={photo.image} alt={photo.name} />
                  <figcaption>{photo.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-tag">Testimonios</div>
                <h2>Lo que dicen mis pacientes.</h2>
              </div>
            </div>
            <div className="testimonial-grid">
              {publicSite.testimonials.map((item, idx) => (
                <article key={`${item.author}-${idx}`} className="card quote-card">
                  <div>★★★★★</div>
                  <p>“{item.quote}”</p>
                  <div className="quote-user">
                    <div className="quote-avatar" />
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-shell" id="contacto">
          <div className="container">
            <div className="contact-card">
              <div>
                <div className="section-tag">Contacto</div>
                <h2>Agenda tu cita</h2>
                <p>{publicSite.contactText}</p>
              </div>
              <div className="info-stack">
                <div className="info-item">
                  <div className="i">☎</div>
                  <div>
                    <strong>Teléfono</strong>
                    <a href={`tel:${publicSite.phone.replace(/[^\d+]/g, '')}`}>{publicSite.phone}</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="i">✉</div>
                  <div>
                    <strong>Correo</strong>
                    <a href={`mailto:${publicSite.email}`}>{publicSite.email}</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="i">⌂</div>
                  <div>
                    <strong>Ubicación</strong>
                    <span>{publicSite.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark"><img src={publicSite.logo} alt="Logo" /></div>
            <div className="brand-name">{publicSite.brandName}</div>
          </div>
          <div>© <span>{new Date().getFullYear()}</span> {publicSite.brandName}. Todos los derechos reservados.</div>
        </div>
      </footer>

      {showLogin && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="login-box">
            <h3>Acceso al panel</h3>
            <label htmlFor="adminPassword">Contraseña</label>
            <input id="adminPassword" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Escribe la contraseña" />
            <button className="btn btn-primary" type="button" onClick={handleLogin}>Entrar</button>
            <div className="hint">Contraseña de ejemplo: dranayeli2026</div>
          </div>
        </div>
      )}

      {showAdmin && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="dialog">
            <div className="modal-header">
              <h3>Panel de administración</h3>
              <button className="close-btn" type="button" onClick={closeAdmin}>×</button>
            </div>
            <div className="modal-body">
              <div className="panel-grid">
                <div className="panel-block">
                  <h4>Datos generales</h4>
                  <div className="field"><label>Nombre del profesional</label><input type="text" value={adminForm.brandName} onChange={(e) => updateAdminField('brandName', e.target.value)} /></div>
                  <div className="field"><label>Título de inicio</label><input type="text" value={adminForm.heroTitle} onChange={(e) => updateAdminField('heroTitle', e.target.value)} /></div>
                  <div className="field"><label>Texto de introducción</label><textarea value={adminForm.heroSubtitle} onChange={(e) => updateAdminField('heroSubtitle', e.target.value)} /></div>
                  <div className="field"><label>Texto de contacto</label><textarea value={adminForm.contactText} onChange={(e) => updateAdminField('contactText', e.target.value)} /></div>
                </div>

                <div className="panel-block">
                  <h4>Contacto y branding</h4>
                  <div className="field"><label>Teléfono</label><input type="text" value={adminForm.phone} onChange={(e) => updateAdminField('phone', e.target.value)} /></div>
                  <div className="field"><label>Correo</label><input type="email" value={adminForm.email} onChange={(e) => updateAdminField('email', e.target.value)} /></div>
                  <div className="field"><label>Dirección</label><input type="text" value={adminForm.address} onChange={(e) => updateAdminField('address', e.target.value)} /></div>
                  <div className="field"><label>WhatsApp</label><input type="text" value={adminForm.whatsapp} onChange={(e) => updateAdminField('whatsapp', e.target.value)} /></div>
                </div>

                <div className="panel-block" style={{ gridColumn: '1 / -1' }}>
                  <h4>Colores</h4>
                  <div className="inline-colors">
                    <div className="color-picker"><input type="color" value={adminForm.primary} onChange={(e) => updateAdminField('primary', e.target.value)} /><label>Primario</label></div>
                    <div className="color-picker"><input type="color" value={adminForm.secondary} onChange={(e) => updateAdminField('secondary', e.target.value)} /><label>Secundario</label></div>
                    <div className="color-picker"><input type="color" value={adminForm.accent} onChange={(e) => updateAdminField('accent', e.target.value)} /><label>Acento</label></div>
                    <div className="color-picker"><input type="color" value={adminForm.ink} onChange={(e) => updateAdminField('ink', e.target.value)} /><label>Texto</label></div>
                  </div>
                </div>

                <div className="panel-block">
                  <h4>Logo e imágenes</h4>
                  <div className="field"><label>Logo</label><input type="file" accept="image/*" onChange={handleFileUpload('logo')} /></div>
                  <div className="field"><label>Imagen principal</label><input type="file" accept="image/*" onChange={handleFileUpload('heroImage')} /></div>
                  <div className="field"><label>Imagen sobre mí</label><input type="file" accept="image/*" onChange={handleFileUpload('aboutImage')} /></div>
                </div>

                <div className="panel-block">
                  <h4>Servicios</h4>
                  <div className="field"><textarea value={adminForm.servicesText} onChange={(e) => updateAdminField('servicesText', e.target.value)} placeholder="Ejemplo: Consulta de valoración | Evaluación inicial | $1,200" /></div>
                </div>

                <div className="panel-block" style={{ gridColumn: '1 / -1' }}>
                  <h4>Precios</h4>
                  <div className="field"><textarea value={adminForm.pricingText} onChange={(e) => updateAdminField('pricingText', e.target.value)} placeholder="Ejemplo: Consulta inicial | $1,200 | Diagnóstico integral; valoración; plan personalizado" /></div>
                </div>
              </div>

              <div className="admin-actions">
                <button className="btn btn-secondary" type="button" onClick={exportConfig}>Exportar JSON</button>
                <button className="btn btn-secondary" type="button" onClick={() => fileInputRef.current?.click()}>Importar JSON</button>
                <button className="btn btn-secondary" type="button" onClick={handleReset}>Restablecer</button>
                <button className="btn btn-primary" type="button" onClick={handleSave}>Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <input ref={fileInputRef} type="file" accept="application/json" style={{ display: 'none' }} onChange={importConfig} />
    </>
  );
}

export default App;
