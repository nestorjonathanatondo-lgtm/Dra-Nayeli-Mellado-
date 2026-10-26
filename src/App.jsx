import React, { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'dralm-site-config-v1';
const AUTH_KEY = 'dralm-admin-auth-v1';
const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'dranayeli2026';

const defaultServices = [
  {
    title: 'Consulta inicial',
    price: '$1,200 MXN',
    description: 'Valoración integral con diagnóstico personalizado y recomendaciones prácticas para tu bienestar.'
  },
  {
    title: 'Medicina estética',
    price: '$2,800 MXN',
    description: 'Tratamientos dirigidos a mejorar la salud y apariencia con enfoque personalizado.'
  },
  {
    title: 'Limpieza facial y cuidado',
    price: '$1,600 MXN',
    description: 'Sesiones para revitalizar, equilibrar y cuidar la piel con protocolos seguros y efectivos.'
  }
];

const defaultGallery = [
  {
    title: 'Consulta personalizada',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    alt: 'Consulta personalizada'
  },
  {
    title: 'Tratamiento facial',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    alt: 'Tratamiento facial'
  },
  {
    title: 'Bienestar integral',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    alt: 'Bienestar integral'
  }
];

const defaultTestimonials = [
  {
    quote: 'La atención fue cálida, clara y muy profesional. Me sentí acompañada en cada paso.',
    author: 'María G.'
  },
  {
    quote: 'Me ayudó a mejorar mi confianza y a sentirme más segura con un plan personalizado.',
    author: 'Patricia R.'
  },
  {
    quote: 'Todo el proceso fue muy amable y los resultados han sido muy positivos.',
    author: 'Daniela S.'
  }
];

const defaultFaq = [
  {
    question: '¿Cuánto tiempo dura una consulta?',
    answer: 'La sesión inicial suele durar entre 30 y 45 minutos, dependiendo del caso y las necesidades.'
  },
  {
    question: '¿Necesito agendar una cita previa?',
    answer: 'Sí, es recomendable agendar con anticipación para garantizar disponibilidad y atención personalizada.'
  },
  {
    question: '¿Ofrecen atención personalizada?',
    answer: 'Sí. Cada plan está diseñado tomando en cuenta tus objetivos, historial y preferencias.'
  }
];

const defaultConfig = {
  brandName: 'Dra. Nayeli Mellado',
  heroTitle: 'Cuidado profesional para una vida más saludable',
  heroSubtitle: 'Atención personalizada para mejorar tu bienestar, confianza y calidad de vida con un enfoque humano y claro.',
  aboutTitle: 'Tu bienestar empieza con una atención atenta y humana',
  aboutText1: 'La Dra. Nayeli Mellado combina experiencia, empatía y criterio clínico para ofrecer una atención integral y segura. Cada consulta está enfocada en resolver necesidades reales y acompañar a cada paciente con claridad.',
  aboutText2: 'Nuestra prioridad es crear un espacio de confianza donde puedas entender tu proceso, recibir orientación profesional y sentirte respaldada en cada etapa.',
  contactPhone: '+52 (444) 222 3344',
  email: 'hello@dranayelimellado.com',
  address: 'Calle Principal 123, San Luis Potosí',
  whatsapp: '+52 444 222 3344',
  logo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
  heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
  colors: {
    primary: '#d48d8d',
    secondary: '#f8eee7',
    accent: '#7a7d5d',
    ink: '#2e2a2a',
    link: '#2d2a6a'
  },
  services: defaultServices,
  gallery: defaultGallery,
  testimonials: defaultTestimonials,
  faq: defaultFaq
};

const sanitizeConfig = (value) => ({
  ...defaultConfig,
  ...(value || {}),
  colors: {
    ...defaultConfig.colors,
    ...(value?.colors || {})
  },
  services: Array.isArray(value?.services) && value.services.length ? value.services : defaultServices,
  gallery: Array.isArray(value?.gallery) && value.gallery.length ? value.gallery : defaultGallery,
  testimonials: Array.isArray(value?.testimonials) && value.testimonials.length ? value.testimonials : defaultTestimonials,
  faq: Array.isArray(value?.faq) && value.faq.length ? value.faq : defaultFaq
});

function App() {
  const [config, setConfig] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultConfig;
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return sanitizeConfig(raw ? JSON.parse(raw) : defaultConfig);
    } catch (error) {
      return defaultConfig;
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    try {
      return window.localStorage.getItem(AUTH_KEY) === 'true';
    } catch (error) {
      return false;
    }
  });

  const [authForm, setAuthForm] = useState({ username: ADMIN_USER, password: '' });
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    }
  }, [config]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(AUTH_KEY, String(isLoggedIn));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setToast(''), 2500);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const themeStyle = useMemo(
    () => ({
      '--primary-color': config.colors.primary,
      '--secondary-color': config.colors.secondary,
      '--accent-color': config.colors.accent,
      '--ink-color': config.colors.ink,
      '--link-color': config.colors.link
    }),
    [config.colors]
  );

  const whatsappLink = `https://wa.me/${config.whatsapp.replace(/\D/g, '')}`;

  const updateField = (field, value) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  };

  const updateColor = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [field]: value
      }
    }));
  };

  const updateListItem = (key, index, field, value) => {
    setConfig((prev) => ({
      ...prev,
      [key]: prev[key].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addListItem = (key, template) => {
    setConfig((prev) => ({
      ...prev,
      [key]: [...prev[key], template]
    }));
  };

  const removeListItem = (key, index) => {
    setConfig((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, itemIndex) => itemIndex !== index)
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (authForm.username === ADMIN_USER && authForm.password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setAuthForm({ username: ADMIN_USER, password: '' });
      setToast('Acceso concedido');
      return;
    }

    setToast('Credenciales incorrectas');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToast('Sesión cerrada');
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dranayeli-config.json';
    link.click();
    URL.revokeObjectURL(url);
    setToast('Configuración exportada');
  };

  const handleImport = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        setConfig(sanitizeConfig(data));
        setToast('Configuración importada');
      } catch (error) {
        setToast('Archivo inválido');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    setToast('Se restauró la configuración inicial');
  };

  const adminPanel = (
    <section className="admin-panel">
      <div className="admin-header">
        <div>
          <p className="eyebrow">Panel admin</p>
          <h2>Personaliza tu sitio</h2>
        </div>

        <div className="admin-actions">
          <label className="action-upload">
            Importar
            <input type="file" accept="application/json" onChange={handleImport} />
          </label>
          <button className="secondary-btn" type="button" onClick={handleExport}>Exportar</button>
          <button className="secondary-btn" type="button" onClick={handleReset}>Restaurar</button>
          <button className="primary-btn" type="button" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>

      <div className="admin-grid">
        <label className="field">
          <span>Nombre de la marca</span>
          <input value={config.brandName} onChange={(event) => updateField('brandName', event.target.value)} />
        </label>

        <label className="field">
          <span>Logo URL</span>
          <input value={config.logo} onChange={(event) => updateField('logo', event.target.value)} />
        </label>

        <label className="field">
          <span>Título principal</span>
          <input value={config.heroTitle} onChange={(event) => updateField('heroTitle', event.target.value)} />
        </label>

        <label className="field field-wide">
          <span>Subtítulo</span>
          <textarea value={config.heroSubtitle} onChange={(event) => updateField('heroSubtitle', event.target.value)} />
        </label>

        <label className="field">
          <span>Teléfono</span>
          <input value={config.contactPhone} onChange={(event) => updateField('contactPhone', event.target.value)} />
        </label>

        <label className="field">
          <span>Correo</span>
          <input value={config.email} onChange={(event) => updateField('email', event.target.value)} />
        </label>

        <label className="field">
          <span>Dirección</span>
          <input value={config.address} onChange={(event) => updateField('address', event.target.value)} />
        </label>

        <label className="field">
          <span>WhatsApp</span>
          <input value={config.whatsapp} onChange={(event) => updateField('whatsapp', event.target.value)} />
        </label>

        <label className="field">
          <span>Imagen principal</span>
          <input value={config.heroImage} onChange={(event) => updateField('heroImage', event.target.value)} />
        </label>

        <label className="field">
          <span>Color primario</span>
          <input type="color" value={config.colors.primary} onChange={(event) => updateColor('primary', event.target.value)} />
        </label>

        <label className="field">
          <span>Color secundario</span>
          <input type="color" value={config.colors.secondary} onChange={(event) => updateColor('secondary', event.target.value)} />
        </label>

        <label className="field">
          <span>Color de acento</span>
          <input type="color" value={config.colors.accent} onChange={(event) => updateColor('accent', event.target.value)} />
        </label>

        <label className="field">
          <span>Color de texto</span>
          <input type="color" value={config.colors.ink} onChange={(event) => updateColor('ink', event.target.value)} />
        </label>
      </div>

      <div className="admin-block">
        <div className="block-header">
          <h3>Servicios</h3>
          <button className="secondary-btn" type="button" onClick={() => addListItem('services', { title: 'Nuevo servicio', price: '$0 MXN', description: 'Descripción del servicio' })}>Agregar</button>
        </div>

        {config.services.map((service, index) => (
          <div className="admin-list-item" key={`service-${index}`}>
            <input value={service.title} onChange={(event) => updateListItem('services', index, 'title', event.target.value)} />
            <input value={service.price} onChange={(event) => updateListItem('services', index, 'price', event.target.value)} />
            <button className="danger-btn" type="button" onClick={() => removeListItem('services', index)}>Eliminar</button>
            <textarea value={service.description} onChange={(event) => updateListItem('services', index, 'description', event.target.value)} />
          </div>
        ))}
      </div>

      <div className="admin-block">
        <div className="block-header">
          <h3>Galería</h3>
          <button className="secondary-btn" type="button" onClick={() => addListItem('gallery', { title: 'Nueva imagen', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80', alt: 'Nueva imagen' })}>Agregar</button>
        </div>

        {config.gallery.map((item, index) => (
          <div className="admin-list-item gallery-item" key={`gallery-${index}`}>
            <input value={item.title} onChange={(event) => updateListItem('gallery', index, 'title', event.target.value)} />
            <input value={item.image} onChange={(event) => updateListItem('gallery', index, 'image', event.target.value)} />
            <button className="danger-btn" type="button" onClick={() => removeListItem('gallery', index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div className="admin-block">
        <div className="block-header">
          <h3>Testimonios</h3>
          <button className="secondary-btn" type="button" onClick={() => addListItem('testimonials', { author: 'Nuevo paciente', quote: 'Tu experiencia aquí' })}>Agregar</button>
        </div>

        {config.testimonials.map((item, index) => (
          <div className="admin-list-item" key={`testimonial-${index}`}>
            <input value={item.author} onChange={(event) => updateListItem('testimonials', index, 'author', event.target.value)} />
            <textarea value={item.quote} onChange={(event) => updateListItem('testimonials', index, 'quote', event.target.value)} />
            <button className="danger-btn" type="button" onClick={() => removeListItem('testimonials', index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div className="admin-block">
        <div className="block-header">
          <h3>FAQ</h3>
          <button className="secondary-btn" type="button" onClick={() => addListItem('faq', { question: 'Nueva pregunta', answer: 'Respuesta breve.' })}>Agregar</button>
        </div>

        {config.faq.map((item, index) => (
          <div className="admin-list-item" key={`faq-${index}`}>
            <input value={item.question} onChange={(event) => updateListItem('faq', index, 'question', event.target.value)} />
            <textarea value={item.answer} onChange={(event) => updateListItem('faq', index, 'answer', event.target.value)} />
            <button className="danger-btn" type="button" onClick={() => removeListItem('faq', index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="page-shell" style={themeStyle}>
      <header className="topbar">
        <nav className="nav container">
          <div className="brand">
            <img src={config.logo} alt={config.brandName} className="brand-logo" />
            <div>
              <strong>{config.brandName}</strong>
            </div>
          </div>

          <div className="nav-links">
            <a href="#about">Sobre mí</a>
            <a href="#services">Servicios</a>
            <a href="#gallery">Galería</a>
            <a href="#testimonials">Testimonios</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Atención integral y personalizada</p>
            <h1>{config.heroTitle}</h1>
            <p className="lead">{config.heroSubtitle}</p>

            <div className="cta-row">
              <a href={whatsappLink} className="primary-btn" target="_blank" rel="noreferrer">Agendar cita</a>
              <a href="#services" className="secondary-btn">Ver servicios</a>
            </div>

            <ul className="highlights">
              <li>Consulta personalizada</li>
              <li>Tratamientos seguros</li>
              <li>Enfoque humano y profesional</li>
            </ul>
          </div>

          <div className="hero-visual">
            <img src={config.heroImage} alt={config.brandName} />
          </div>
        </section>

        <section id="about" className="about container">
          <div className="section-heading">
            <p className="eyebrow">Sobre mí</p>
            <h2>{config.aboutTitle}</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>{config.aboutText1}</p>
            </div>
            <div className="about-card">
              <p>{config.aboutText2}</p>
            </div>
          </div>
        </section>

        <section id="services" className="services container">
          <div className="section-heading">
            <p className="eyebrow">Servicios</p>
            <h2>Soluciones adaptadas a ti</h2>
          </div>

          <div className="service-grid">
            {config.services.map((service, index) => (
              <article className="service-card" key={`service-${index}`}>
                <span className="service-price">{service.price}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery container">
          <div className="section-heading">
            <p className="eyebrow">Galería</p>
            <h2>Resultados y ambiente</h2>
          </div>

          <div className="gallery-grid">
            {config.gallery.map((item, index) => (
              <figure className="gallery-item" key={`gallery-${index}`}>
                <img src={item.image} alt={item.alt || item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="testimonials" className="testimonials container">
          <div className="section-heading">
            <p className="eyebrow">Testimonios</p>
            <h2>Pacientes satisfechos</h2>
          </div>

          <div className="testimonial-grid">
            {config.testimonials.map((item, index) => (
              <blockquote className="testimonial-card" key={`testimonial-${index}`}>
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faq" className="faq container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Preguntas frecuentes</h2>
          </div>

          <div className="faq-list">
            {config.faq.map((item, index) => (
              <div className="faq-item" key={`faq-${index}`}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact container">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>Agenda tu consulta</h2>
              <p>Estamos para ayudarte a cuidar tu bienestar con un plan claro y personalizado.</p>
            </div>

            <div className="contact-list">
              <p><strong>Teléfono:</strong> {config.contactPhone}</p>
              <p><strong>Correo:</strong> {config.email}</p>
              <p><strong>Dirección:</strong> {config.address}</p>
            </div>

            <div className="cta-row">
              <a href={whatsappLink} className="primary-btn" target="_blank" rel="noreferrer">Escríbeme por WhatsApp</a>
              <a href={`mailto:${config.email}`} className="secondary-btn">Enviar correo</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} {config.brandName}. Todos los derechos reservados.</p>
      </footer>

      {!isLoggedIn && (
        <div className="login-overlay">
          <form className="login-card" onSubmit={handleLogin}>
            <p className="eyebrow">Acceso administrador</p>
            <h2>Iniciar sesión</h2>

            <label className="field">
              <span>Usuario</span>
              <input
                value={authForm.username}
                onChange={(event) => setAuthForm({ ...authForm, username: event.target.value })}
              />
            </label>

            <label className="field">
              <span>Contraseña</span>
              <input
                type="password"
                value={authForm.password}
                onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })}
              />
            </label>

            <button className="primary-btn" type="submit">Entrar</button>
          </form>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
