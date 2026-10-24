import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, Clock, MapPin, Phone, ChevronDown, ChevronUp, 
  Star, Shield, Activity, Users, Check, X, Search, Sparkles, 
  ArrowRight, Menu, Image as ImageIcon, HeartHandshake, UserCircle
} from 'lucide-react';

// --- CONFIGURACIÓN Y DATOS ---
const COLORS = {
  bgLight: '#FFFBF7',
  bgSecondary: '#F6F0E8',
  textMain: '#1E1E1E',
  accentGold: '#C8A87C',
  badgeSage: '#E8ECE1',
  badgeText: '#4A5D4E'
};

const WA_NUMBER = '528120799186';
const getWaLink = (msg = '') => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const TRATAMIENTOS = [
  { id: 'baby-botox', badge: 'Más solicitado', duracion: '30 min', categoria: 'Toxina Botulínica', titulo: 'Baby Botox', desc: 'Microdosis de toxina botulínica para prevenir arrugas con un resultado fresco y natural.' },
  { id: 'botox-full', badge: '', duracion: '45 min', categoria: 'Toxina Botulínica', titulo: 'Botox Full Face', desc: 'Rejuvenecimiento integral del rostro que reduce arrugas y combate la flacidez sin cirugía.' },
  { id: 'esclero', badge: 'Eliminación de várices', duracion: '45 min', categoria: 'Vascular', titulo: 'Escleroterapia', desc: 'Eliminación de várices y arañitas vasculares aplicando medicamento directamente en las venas a tratar.' },
  { id: 'rino', badge: 'Resultados inmediatos', duracion: '45 min', categoria: 'Ácido Hialurónico', titulo: 'Rinomodelación', desc: 'Perfilado de nariz sin cirugía con ácido hialurónico: corto, indoloro y reversible.' },
  { id: 'labios', badge: '', duracion: '45 min', categoria: 'Ácido Hialurónico', titulo: 'Aumento de Labios', desc: 'Volumen, definición e hidratación de labios con ácido hialurónico.' },
  { id: 'armonizacion', badge: 'Tratamiento insignia', duracion: '75 min', categoria: 'Ácido Hialurónico', titulo: 'Armonización Facial', desc: 'Plan integral para restaurar volumen y equilibrio en pómulos, labios, sienes y mentón.' }
];

const FAQS = [
  { q: '¿Qué incluye la consulta de valoración?', a: 'Incluye una evaluación médica completa de tu historial, análisis de tu piel y anatomía facial, discusión detallada de tus objetivos y el diseño de un plan de tratamiento personalizado.' },
  { q: '¿Los tratamientos duelen?', a: 'La mayoría de nuestros tratamientos son mínimamente invasivos. Utilizamos anestesia tópica de alta calidad y técnicas precisas para asegurar que tu experiencia sea lo más cómoda y sin dolor posible.' },
  { q: '¿Cuánto tiempo de recuperación necesito?', a: 'Depende del tratamiento, pero la gran mayoría son procedimientos "lunch-time" (de consultorio) que te permiten retomar tus actividades normales casi de inmediato, con mínimas restricciones.' },
  { q: '¿Los productos están certificados?', a: 'Absolutamente. Solo utilizamos marcas premium, insumos médicos con trazabilidad garantizada y aprobados por autoridades sanitarias (COFEPRIS, FDA) para garantizar tu seguridad.' },
  { q: '¿Cómo agendo, cambio o cancelo mi cita?', a: 'Puedes agendar directamente en esta página. Para cambios o cancelaciones, puedes usar la opción "Mi Cita" con tu folio, o contactarnos por WhatsApp con al menos 24 horas de anticipación.' },
  { q: '¿Qué formas de pago aceptan?', a: 'Aceptamos pagos en efectivo, transferencia bancaria y tarjetas de débito o crédito.' }
];

// --- COMPONENTES PRINCIPALES ---

export default function App() {
  const [view, setView] = useState('home'); // home, agenda, mi-cita, admin-login, admin-dashboard
  const [appointments, setAppointments] = useState([]); // Mock DB
  
  // Estilos globales inyectados para tipografía
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');
      .font-serif { font-family: 'Playfair Display', serif; }
      .font-sans { font-family: 'Inter', sans-serif; }
      html { scroll-behavior: smooth; }
      body { background-color: ${COLORS.bgLight}; color: ${COLORS.textMain}; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleBookAppointment = (newApt) => {
    setAppointments([...appointments, newApt]);
  };

  return (
    <div className="font-sans min-h-screen relative selection:bg-[#C8A87C] selection:text-white">
      {view === 'home' && <HomeView onNavigate={navigateTo} />}
      {view === 'agenda' && <AgendaView onNavigate={navigateTo} onBook={handleBookAppointment} />}
      {view === 'mi-cita' && <MiCitaView onNavigate={navigateTo} appointments={appointments} setAppointments={setAppointments} />}
      {view === 'admin-login' && <AdminLogin onNavigate={navigateTo} />}
      {view === 'admin-dashboard' && <AdminDashboard onNavigate={navigateTo} appointments={appointments} setAppointments={setAppointments} />}
    </div>
  );
}

// --- VISTA: HOME ---
function HomeView({ onNavigate }) {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <HeroSection onNavigate={onNavigate} />
        <PilaresSection />
        <TratamientosSection onNavigate={onNavigate} />
        <ResultadosSection />
        <EscleroterapiaHighlight />
        <ProcesoSection onNavigate={onNavigate} />
        <DoctoraSection />
        <TestimoniosSection />
        <FAQSection />
        <UbicacionSection />
      </main>
      <Footer />
    </>
  );
}

// --- COMPONENTES DE SECCIÓN (HOME) ---

function Header({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const pressTimer = useRef(null);
  const clickTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica del gesto secreto: 5 toques rápidos + 1 largo
  const handleLogoPointerDown = () => {
    pressTimer.current = setTimeout(() => {
      if (clickCount >= 5) {
        onNavigate('admin-login');
        setClickCount(0);
      }
    }, 1000); // 1 segundo para el toque largo
  };

  const handleLogoPointerUp = () => {
    clearTimeout(pressTimer.current);
    setClickCount(prev => prev + 1);
    
    // Resetear contador si pasa mucho tiempo entre toques
    clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      setClickCount(0);
    }, 500); // 500ms ventana entre toques
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="bg-[#1E1E1E] text-[#C8A87C] text-xs text-center py-1 absolute top-0 left-0 w-full tracking-widest font-medium uppercase">
        Medicina estética de alta precisión · Saltillo, Coahuila
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 flex justify-between items-center">
        {/* Logo con evento secreto */}
        <div 
          className="font-serif text-xl md:text-2xl font-semibold cursor-pointer select-none"
          onPointerDown={handleLogoPointerDown}
          onPointerUp={handleLogoPointerUp}
          onPointerLeave={() => clearTimeout(pressTimer.current)}
        >
          Dra. Nallely Mellado<span className="text-[#C8A87C]">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center text-sm font-medium">
          <a href="#tratamientos" className="hover:text-[#C8A87C] transition-colors">Tratamientos</a>
          <a href="#proceso" className="hover:text-[#C8A87C] transition-colors">Proceso</a>
          <a href="#doctora" className="hover:text-[#C8A87C] transition-colors">La Doctora</a>
          <a href="#faq" className="hover:text-[#C8A87C] transition-colors">FAQ</a>
          <button onClick={() => onNavigate('mi-cita')} className="text-gray-500 hover:text-gray-800 transition-colors">Mi Cita</button>
          <button onClick={() => onNavigate('agenda')} className="bg-[#C8A87C] text-white px-6 py-2.5 rounded-full hover:bg-[#b89565] transition-all shadow-[0_4px_14px_rgba(200,168,124,0.39)]">
            Agendar Valoración
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-[#1E1E1E]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t p-6 flex flex-col space-y-4">
          <a href="#tratamientos" onClick={() => setMobileMenuOpen(false)}>Tratamientos</a>
          <a href="#doctora" onClick={() => setMobileMenuOpen(false)}>La Doctora</a>
          <button onClick={() => { onNavigate('mi-cita'); setMobileMenuOpen(false); }} className="text-left text-gray-500">Mi Cita</button>
          <button onClick={() => { onNavigate('agenda'); setMobileMenuOpen(false); }} className="bg-[#C8A87C] text-white px-6 py-3 rounded-full text-center mt-4">
            Agendar en línea
          </button>
        </div>
      )}
    </header>
  );
}

function HeroSection({ onNavigate }) {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center min-h-[90vh]">
      <div className="lg:w-1/2 lg:pr-12 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1E1E1E] leading-tight mb-6">
          Tu belleza natural, <span className="font-serif italic text-[#C8A87C]">realzada</span> con ciencia y arte.
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
          Soy la Dra. Nallely Mellado. Diseño tratamientos faciales y corporales mínimamente invasivos para que te veas descansada, luminosa y siempre como tú.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button onClick={() => onNavigate('agenda')} className="bg-[#C8A87C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b89565] transition-all flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(200,168,124,0.3)]">
            Agendar en línea <ArrowRight size={18} />
          </button>
          <a href={getWaLink('Hola, me gustaría información sobre una valoración médica.')} target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-8 py-4 rounded-full font-medium hover:border-[#C8A87C] hover:text-[#C8A87C] transition-all flex items-center justify-center gap-2">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2"><Activity size={16} className="text-[#C8A87C]" /> 34+ Tratamientos</div>
          <div className="flex items-center gap-2"><UserCircle size={16} className="text-[#C8A87C]" /> 100% Personalizado</div>
          <div className="flex items-center gap-2"><Star size={16} className="text-[#C8A87C] fill-[#C8A87C]" /> 4.9 Satisfacción</div>
        </div>
      </div>

      <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
        {/* Placeholder for Hero Image */}
        <div className="w-full aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#F6F0E8] to-[#FFFBF7] flex items-center justify-center text-gray-400 flex-col">
              <ImageIcon size={64} className="mb-4 opacity-50" />
              <span className="text-sm">Imagen: Dra en consultorio (Luz natural)</span>
           </div>
        </div>
        
        {/* Floating Card */}
        <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-16 bg-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] max-w-xs border border-gray-50 hidden sm:block">
          <p className="text-sm font-medium mb-1">San Isidro, Saltillo</p>
          <p className="text-xs text-gray-500 mb-3">Un espacio privado para tu armonía facial</p>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A5D4E] bg-[#E8ECE1] px-3 py-1.5 rounded-full inline-flex">
            <Shield size={12} /> Médico certificado
          </div>
        </div>
      </div>
    </section>
  );
}

function PilaresSection() {
  const pilares = [
    { title: 'Atención personalizada', desc: 'Valoración individual y sin prisas. Cada rostro y cada objetivo recibe un plan diseñado a la medida.', icon: UserCircle },
    { title: 'Seguridad médica', desc: 'Criterio médico ético, protocolos rigurosos e insumos certificados con trazabilidad.', icon: Shield },
    { title: 'Vanguardia', desc: 'Bioestimuladores, exosomas, PDRN y tecnología láser para resultados naturales y duraderos.', icon: Sparkles },
    { title: 'Seguimiento continuo', desc: 'Te acompañamos antes, durante y después de cada sesión para cuidar tu evolución.', icon: HeartHandshake },
  ];

  return (
    <section id="filosofia" className="py-24 bg-[#F6F0E8] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Pilares de nuestra excelencia médica</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pilares.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/50">
              <div className="w-12 h-12 bg-[#F6F0E8] rounded-full flex items-center justify-center text-[#C8A87C] mb-6">
                <p.icon size={24} />
              </div>
              <h3 className="font-serif text-xl mb-3">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TratamientosSection({ onNavigate }) {
  return (
    <section id="tratamientos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#C8A87C] text-sm font-medium tracking-wider uppercase mb-3 block">Catálogo de Servicios</span>
        <h2 className="text-4xl md:text-5xl font-serif">Tratamientos Especializados</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRATAMIENTOS.map((t, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col">
            <div className="h-48 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#F6F0E8] flex items-center justify-center text-[#C8A87C]/30">
                  <ImageIcon size={48} />
               </div>
              {t.badge && (
                <div className="absolute top-4 right-4 bg-[#E8ECE1] text-[#4A5D4E] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t.badge}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 uppercase tracking-wide">
              <Clock size={14} className="text-[#C8A87C]" /> {t.duracion} <span className="mx-1">·</span> {t.categoria}
            </div>
            
            <h3 className="text-2xl font-serif mb-2">{t.titulo}</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">{t.desc}</p>
            
            <div className="flex gap-2 mt-auto">
              <button onClick={() => onNavigate('agenda')} className="flex-1 bg-[#F6F0E8] text-[#1E1E1E] py-3 rounded-xl text-sm font-medium hover:bg-[#e8decb] transition-colors">
                Agendar
              </button>
              <a href={getWaLink(`Hola, deseo más información sobre el tratamiento: ${t.titulo}`)} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-[#C8A87C] hover:border-[#C8A87C] transition-colors flex items-center justify-center">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultadosSection() {
  const casos = [
    { title: 'Rejuvenecimiento facial', desc: 'Bioestimulación y toxina botulínica para una mirada descansada y una piel más firme.' },
    { title: 'Rejuvenecimiento masculino', desc: 'Atenuación de líneas de expresión respetando los rasgos naturales.' },
    { title: 'Armonización facial', desc: 'Restauración de volumen y contorno con ácido hialurónico.' },
    { title: 'Rinomodelación', desc: 'Perfil nasal definido sin cirugía, con resultados inmediatos.' }
  ];

  return (
    <section id="resultados" className="py-24 bg-[#1E1E1E] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Antes y después</h2>
            <p className="text-gray-400 text-lg">Cambios sutiles y armónicos que respetan tu identidad. Pacientes reales de la Dra. Nallely Mellado.</p>
          </div>
          <button className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#1E1E1E] transition-colors">
            Ver galería completa
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {casos.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[16/9] bg-gray-800">
               <div className="absolute inset-0 flex">
                 <div className="w-1/2 bg-gray-700 flex items-center justify-center border-r border-gray-600">
                    <span className="text-gray-500 font-serif text-sm">Antes</span>
                 </div>
                 <div className="w-1/2 bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-400 font-serif text-sm">Después</span>
                 </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-300">{c.desc}</p>
               </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-8">Leyenda legal obligatoria: Imágenes publicadas con autorización. Los resultados pueden variar en cada paciente.</p>
      </div>
    </section>
  );
}

function EscleroterapiaHighlight() {
  return (
    <section className="py-20 px-6 bg-[#C8A87C] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Piernas ligeras, <span className="italic font-light">sin várices</span></h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Tratamiento mínimamente invasivo que elimina várices y arañitas vasculares. Mejora el aspecto de tus piernas y alivia pesadez, dolor, ardor y cansancio.
        </p>
      </div>
    </section>
  );
}

function ProcesoSection({ onNavigate }) {
  const steps = [
    { num: '01', title: 'Conoce', desc: 'Explora los tratamientos o escríbenos por WhatsApp para resolver tus dudas.' },
    { num: '02', title: 'Agenda', desc: 'Elige tratamiento, fecha y horario en línea. Recibes tu folio al instante.' },
    { num: '03', title: 'Valoración y tratamiento', desc: 'La Dra. Nallely evalúa tu caso y realiza el procedimiento con precisión.' },
    { num: '04', title: 'Seguimiento', desc: 'Revisión de resultados y cuidados posteriores para mantener tu mejor versión.' },
  ];

  return (
    <section id="proceso" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#C8A87C] text-sm font-medium tracking-wider uppercase mb-3 block">Tu bienestar paso a paso</span>
        <h2 className="text-4xl font-serif">Tu experiencia en 4 pasos</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Línea conectora solo visible en desktop */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gray-200 z-0"></div>
        
        {steps.map((s, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border-2 border-[#C8A87C] text-[#C8A87C] rounded-full flex items-center justify-center text-xl font-serif mb-6 shadow-sm">
              {s.num}
            </div>
            <h3 className="font-serif text-xl mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
         <button onClick={() => onNavigate('agenda')} className="bg-[#1E1E1E] text-white px-8 py-3 rounded-full hover:bg-black transition-colors">Comenzar ahora</button>
      </div>
    </section>
  );
}

function DoctoraSection() {
  return (
    <section id="doctora" className="py-24 bg-[#F6F0E8] px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="md:w-5/12">
          <div className="aspect-[3/4] bg-gray-300 rounded-[2rem] overflow-hidden relative shadow-lg">
             <div className="absolute inset-0 bg-[#FFFBF7] flex items-center justify-center text-gray-400 flex-col">
                <UserCircle size={80} className="mb-4 text-[#C8A87C]/50" />
                <span className="text-sm">Retrato: Dra. Nallely Mellado</span>
             </div>
          </div>
        </div>
        <div className="md:w-7/12">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Dedicación médica, enfoque natural y pasión por la armonía</h2>
          
          <blockquote className="border-l-4 border-[#C8A87C] pl-6 py-2 mb-8">
            <p className="text-xl font-serif italic text-gray-700">“Donde hay amor por la medicina, hay amor por la humanidad y la belleza.”</p>
          </blockquote>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            La Dra. Nallely Mellado es médico cirujano dedicada a la medicina estética y la longevidad. Su misión es ayudarte a encontrar el equilibrio entre lo estético y lo funcional, priorizando siempre tu salud.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 text-sm font-medium">
            <li className="flex items-center gap-2"><Check size={16} className="text-[#C8A87C]" /> Médico cirujano certificado</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-[#C8A87C]" /> Medicina estética y longevidad</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-[#C8A87C]" /> Protocolos de toxina y rellenos</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-[#C8A87C]" /> Medicina regenerativa y láser</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TestimoniosSection() {
  const reviews = [
    { text: 'Resultados súper naturales. La doctora te explica todo con paciencia y te sientes en confianza desde el primer momento.', author: 'Mariana G.', tag: 'Armonización facial' },
    { text: 'Me veo descansado, no diferente. Excelente trato, puntualidad y un consultorio impecable.', author: 'Carlos R.', tag: 'Botox full face' },
    { text: 'Tenía miedo y fue rapidísimo. El cambio en mi perfil es increíble y sin cirugía. ¡La recomiendo muchísimo!', author: 'Sofía M.', tag: 'Rinomodelación' }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">La voz de quienes confiaron en nosotros</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative border border-gray-50">
            <div className="text-[#C8A87C] mb-4 flex">
              {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-current" />)}
            </div>
            <p className="text-gray-600 mb-6 italic">"{r.text}"</p>
            <div>
              <p className="font-semibold text-sm">{r.author}</p>
              <p className="text-xs text-[#C8A87C]">{r.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#F6F0E8] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Resolvemos tus dudas</h2>
          <p className="text-gray-600 mb-6">¿No encuentras tu respuesta? Escríbenos y te atendemos personalmente.</p>
          <a href={getWaLink('Hola, tengo una duda sobre un tratamiento.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C8A87C] font-medium hover:text-[#b89565]">
            <MessageCircle size={18} /> Preguntar por WhatsApp
          </a>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center font-medium focus:outline-none"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                {openIdx === i ? <ChevronUp size={20} className="text-[#C8A87C]" /> : <ChevronDown size={20} className="text-gray-400" />}
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UbicacionSection() {
  return (
    <section id="ubicacion" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Visítanos en San Isidro, Saltillo</h2>
          
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <MapPin className="text-[#C8A87C] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-sm mb-1">Dirección</p>
                <p className="text-gray-600 text-sm">Blvrd. Rufino Tamayo 120-3, San Isidro<br/>C.P. 25254 · Saltillo, Coahuila</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-[#C8A87C] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-sm mb-1">Horario</p>
                <p className="text-gray-600 text-sm">Lunes a viernes 10:00–19:00<br/>Sábado 10:00–15:00<br/>Domingo cerrado</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#C8A87C] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-sm mb-1">Teléfono</p>
                <p className="text-gray-600 text-sm">+52 81 2079 9186</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <a href={getWaLink()} target="_blank" rel="noopener noreferrer" className="bg-[#1E1E1E] text-white px-6 py-3 rounded-xl text-center font-medium hover:bg-black transition-colors">
               Contactar WhatsApp
             </a>
             <a href="https://maps.google.com/?q=Blvrd.+Rufino+Tamayo+120-3,+San+Isidro,+Saltillo" target="_blank" rel="noopener noreferrer" className="bg-[#F6F0E8] text-[#1E1E1E] px-6 py-3 rounded-xl text-center font-medium hover:bg-[#e8decb] transition-colors">
               Cómo llegar
             </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 min-h-[400px] bg-gray-200 relative">
          {/* Placeholder para iframe de Google Maps */}
          <div className="absolute inset-0 bg-stone-300 flex items-center justify-center flex-col text-stone-500">
             <MapPin size={48} className="mb-4 opacity-50" />
             <p>Mapa Embebido (Google Maps)</p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
         <h2 className="text-3xl md:text-4xl font-serif mb-4">Da el siguiente paso hacia tu mejor versión</h2>
         <p className="text-gray-600 max-w-2xl mx-auto mb-8">Agenda tu consulta de valoración y diseñemos juntas un plan a la altura de tus expectativas.</p>
         <button className="bg-[#C8A87C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b89565] transition-shadow shadow-[0_8px_25px_rgba(200,168,124,0.3)]">
            Agendar en línea ahora
         </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-400 py-12 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-serif text-white text-lg">Dra. Nallely Mellado<span className="text-[#C8A87C]">.</span></div>
        <p>© {new Date().getFullYear()} Medicina Estética y Longevidad. Todos los derechos reservados.</p>
        <div className="hidden">
           {/* SEO Meta inject - usually in head, kept here for structural awareness based on prompt */}
           Title: Dra. Nallely Mellado | Medicina Estética y Longevidad en Saltillo 
           Description: Medicina estética de alta precisión en San Isidro, Saltillo.
        </div>
      </div>
    </footer>
  );
}

// --- VISTA: AGENDA (Booking Flow) ---
function AgendaView({ onNavigate, onBook }) {
  const [step, setStep] = useState(1); // 1: Tratamiento, 2: Fecha/Hora, 3: Datos, 4: Confirmación
  const [formData, setFormData] = useState({
    tratamiento: '',
    fecha: '',
    hora: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    email: ''
  });
  const [folio, setFolio] = useState('');

  // Generar fechas disponibles (mock)
  const today = new Date();
  const nextDays = Array.from({length: 14}, (_, i) => {
    const d = new Date(); d.setDate(today.getDate() + i + 1); return d;
  }).filter(d => d.getDay() !== 0); // Excluir domingos (0)

  // Horarios mock basados en reglas
  const getHorarios = (dateStr) => {
    if (!dateStr) return [];
    const d = new Date(dateStr);
    const isSat = d.getDay() === 6;
    const endHour = isSat ? 15 : 19;
    let hours = [];
    for(let h = 10; h < endHour; h++) {
      hours.push(`${h}:00`, `${h}:30`);
    }
    return hours;
  };

  const handleNext = () => {
    if (step === 3) {
      // Generar folio
      const newFolio = 'NM' + Math.random().toString(36).substring(2, 6).toUpperCase() + Date.now().toString().slice(-4);
      setFolio(newFolio);
      onBook({ ...formData, folio: newFolio, status: 'activa', id: Date.now() });
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F0E8] py-12 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
        
        {/* Header de Agenda */}
        <div className="bg-[#1E1E1E] text-white p-6 relative">
          <button onClick={() => onNavigate('home')} className="absolute top-6 left-6 text-gray-400 hover:text-white">
            <X size={24} />
          </button>
          <div className="text-center">
            <h2 className="font-serif text-2xl mb-2">Agendar Cita</h2>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
               <span className={step >= 1 ? 'text-[#C8A87C]' : ''}>1. Tratamiento</span> &rsaquo;
               <span className={step >= 2 ? 'text-[#C8A87C]' : ''}>2. Fecha</span> &rsaquo;
               <span className={step >= 3 ? 'text-[#C8A87C]' : ''}>3. Datos</span>
            </div>
          </div>
        </div>

        <div className="p-8 flex-grow">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-xl font-serif mb-6">Selecciona el tratamiento</h3>
              <div className="space-y-3">
                {TRATAMIENTOS.map(t => (
                  <label key={t.id} className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-all ${formData.tratamiento === t.titulo ? 'border-[#C8A87C] bg-[#FFFBF7]' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="tratamiento" className="mt-1 accent-[#C8A87C]" checked={formData.tratamiento === t.titulo} onChange={() => setFormData({...formData, tratamiento: t.titulo})} />
                    <div>
                      <p className="font-medium">{t.titulo}</p>
                      <p className="text-xs text-gray-500">{t.duracion} · {t.categoria}</p>
                    </div>
                  </label>
                ))}
              </div>
              <button disabled={!formData.tratamiento} onClick={handleNext} className="w-full mt-8 bg-[#C8A87C] text-white py-4 rounded-xl font-medium disabled:opacity-50">Continuar</button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-xl font-serif mb-6">Elige fecha y hora</h3>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Fecha (Lun-Sáb)</label>
                <select 
                  className="w-full p-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#C8A87C]"
                  value={formData.fecha}
                  onChange={(e) => setFormData({...formData, fecha: e.target.value, hora: ''})}
                >
                  <option value="">Selecciona un día...</option>
                  {nextDays.map(d => (
                    <option key={d.toISOString()} value={d.toISOString().split('T')[0]}>
                      {d.toLocaleDateString('es-MX', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </option>
                  ))}
                </select>
              </div>

              {formData.fecha && (
                <div>
                  <label className="block text-sm font-medium mb-2">Hora disponible</label>
                  <div className="grid grid-cols-4 gap-3">
                    {getHorarios(formData.fecha).map(h => (
                      <button 
                        key={h}
                        onClick={() => setFormData({...formData, hora: h})}
                        className={`py-3 rounded-lg text-sm border transition-all ${formData.hora === h ? 'bg-[#C8A87C] text-white border-[#C8A87C]' : 'border-gray-200 hover:border-[#C8A87C] text-gray-700'}`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(1)} className="w-1/3 py-4 rounded-xl border border-gray-200 font-medium">Volver</button>
                <button disabled={!formData.fecha || !formData.hora} onClick={handleNext} className="w-2/3 bg-[#C8A87C] text-white py-4 rounded-xl font-medium disabled:opacity-50">Continuar</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-xl font-serif mb-6">Tus datos</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#C8A87C] focus:outline-none" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Apellidos</label>
                    <input type="text" className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#C8A87C] focus:outline-none" value={formData.apellidos} onChange={e => setFormData({...formData, apellidos: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Teléfono (WhatsApp)</label>
                  <input type="tel" className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#C8A87C] focus:outline-none" placeholder="10 dígitos" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Correo electrónico</label>
                  <input type="email" className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#C8A87C] focus:outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(2)} className="w-1/3 py-4 rounded-xl border border-gray-200 font-medium">Volver</button>
                <button disabled={!formData.nombre || !formData.telefono || formData.telefono.length < 10} onClick={handleNext} className="w-2/3 bg-[#1E1E1E] text-white py-4 rounded-xl font-medium disabled:opacity-50">Confirmar Cita</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center animate-in fade-in zoom-in-95 py-8">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} />
              </div>
              <h3 className="text-2xl font-serif mb-2">¡Cita confirmada!</h3>
              <p className="text-gray-600 mb-8">Te esperamos en la clínica. Guarda tu folio para cualquier aclaración.</p>
              
              <div className="bg-[#F6F0E8] p-6 rounded-2xl mb-8 inline-block text-left w-full max-w-sm">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Folio de confirmación</p>
                <p className="text-3xl font-mono font-medium text-[#C8A87C] mb-4">{folio}</p>
                <div className="space-y-2 text-sm border-t border-gray-200 pt-4 mt-4">
                  <p><strong>Tratamiento:</strong> {formData.tratamiento}</p>
                  <p><strong>Fecha:</strong> {formData.fecha} a las {formData.hora}</p>
                  <p><strong>A nombre de:</strong> {formData.nombre} {formData.apellidos}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                 <a href={getWaLink(`Hola, acabo de agendar cita. Mi folio es ${folio} para ${formData.tratamiento} el ${formData.fecha}.`)} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white py-4 rounded-xl font-medium w-full flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> Enviar a WhatsApp
                 </a>
                 <button onClick={() => onNavigate('home')} className="py-4 font-medium text-gray-500 hover:text-black">Volver al inicio</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- VISTA: MI CITA (Lookup Flow) ---
function MiCitaView({ onNavigate, appointments, setAppointments }) {
  const [searchFolio, setSearchFolio] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [foundApt, setFoundApt] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const apt = appointments.find(a => a.folio.toUpperCase() === searchFolio.toUpperCase() && a.telefono === searchPhone);
    if (apt) {
      setFoundApt(apt);
      setError('');
    } else {
      setError('No encontramos una cita con esos datos. Verifica tu folio y teléfono.');
      setFoundApt(null);
    }
  };

  const handleCancel = () => {
    if (window.confirm('¿Estás segura/o de que deseas cancelar esta cita?')) {
      const updated = appointments.map(a => a.id === foundApt.id ? {...a, status: 'cancelada'} : a);
      setAppointments(updated);
      setFoundApt({...foundApt, status: 'cancelada'});
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] py-12 px-4 flex justify-center items-center">
       <div className="w-full max-w-md bg-white p-8 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative border border-gray-50">
          <button onClick={() => onNavigate('home')} className="absolute top-6 right-6 text-gray-400 hover:text-black">
            <X size={24} />
          </button>
          
          <h2 className="text-3xl font-serif mb-2">Mi Cita</h2>
          <p className="text-gray-500 text-sm mb-8">Ingresa tus datos para consultar o cancelar tu cita programada.</p>

          {!foundApt ? (
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Folio (Ej. NMXY1234)</label>
                <input required type="text" className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#C8A87C] focus:outline-none uppercase" value={searchFolio} onChange={e => setSearchFolio(e.target.value)} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Teléfono registrado</label>
                <input required type="tel" className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#C8A87C] focus:outline-none" value={searchPhone} onChange={e => setSearchPhone(e.target.value)} />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full bg-[#1E1E1E] text-white py-4 rounded-xl font-medium mt-4 flex items-center justify-center gap-2">
                <Search size={18} /> Consultar
              </button>
            </form>
          ) : (
            <div className="animate-in fade-in">
               <div className={`p-4 rounded-xl mb-6 ${foundApt.status === 'activa' ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                 <p className={`text-sm font-semibold mb-2 ${foundApt.status === 'activa' ? 'text-green-700' : 'text-red-700'}`}>
                    Estado: {foundApt.status === 'activa' ? 'Cita Confirmada' : 'Cita Cancelada'}
                 </p>
                 <h4 className="font-serif text-xl">{foundApt.tratamiento}</h4>
                 <p className="text-sm text-gray-600">{foundApt.fecha} - {foundApt.hora}</p>
                 <p className="text-sm text-gray-600 mt-2 font-mono">Folio: {foundApt.folio}</p>
               </div>
               
               {foundApt.status === 'activa' && (
                 <div className="flex flex-col gap-3 mt-8">
                   <button onClick={handleCancel} className="w-full py-4 border border-red-200 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-colors">Cancelar Cita</button>
                   <a href={getWaLink(`Hola, necesito ayuda para reagendar mi cita con folio ${foundApt.folio}.`)} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#F6F0E8] text-[#1E1E1E] rounded-xl font-medium text-center">Contactar soporte</a>
                 </div>
               )}
               
               <button onClick={() => setFoundApt(null)} className="mt-6 text-sm text-gray-500 underline w-full text-center">Consultar otro folio</button>
            </div>
          )}
       </div>
    </div>
  );
}

// --- VISTA: ADMIN LOGIN (Hidden) ---
function AdminLogin({ onNavigate }) {
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pwd === 'Nayeli 08') {
      onNavigate('admin-dashboard');
    } else {
      setError(true);
      setPwd('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-sm text-green-400 border border-zinc-800">
        <h2 className="mb-4 text-xl">SYS.ADMIN_ACCESS</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            autoFocus
            className="w-full bg-black border border-zinc-700 p-3 rounded text-green-400 outline-none focus:border-green-400 mb-4"
            placeholder="Password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-4">ACCESS DENIED</p>}
          <div className="flex justify-between">
             <button type="button" onClick={() => onNavigate('home')} className="text-zinc-500 hover:text-zinc-300">Abort</button>
             <button type="submit" className="bg-green-900/30 border border-green-800 px-4 py-2 rounded hover:bg-green-900/60">Enter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- VISTA: ADMIN DASHBOARD ---
function AdminDashboard({ onNavigate, appointments, setAppointments }) {
  const [tab, setTab] = useState('citas'); // citas, config

  const cancelApt = (id) => {
    setAppointments(appointments.map(a => a.id === id ? {...a, status: 'cancelada'} : a));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0">
        <div>
          <h1 className="font-serif text-xl">Panel de Administración</h1>
          <p className="text-xs text-gray-500">Dra. Nallely Mellado</p>
        </div>
        <button onClick={() => onNavigate('home')} className="text-sm bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">Cerrar Sesión</button>
      </header>

      <div className="flex-grow flex p-6 gap-6 max-w-7xl mx-auto w-full">
        {/* Sidebar Nav */}
        <div className="w-64 shrink-0 space-y-2">
          <button onClick={() => setTab('citas')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${tab === 'citas' ? 'bg-[#1E1E1E] text-white' : 'hover:bg-gray-200 text-gray-700'}`}>Gestión de Citas</button>
          <button onClick={() => setTab('config')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${tab === 'config' ? 'bg-[#1E1E1E] text-white' : 'hover:bg-gray-200 text-gray-700'}`}>Contenido y Horarios</button>
        </div>

        {/* Content Area */}
        <div className="flex-grow bg-white rounded-2xl shadow-sm border p-8">
          
          {tab === 'citas' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif">Citas Programadas</h2>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Total: {appointments.length}</span>
              </div>
              
              {appointments.length === 0 ? (
                <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-xl border border-dashed">
                  No hay citas registradas aún.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="p-4 rounded-tl-xl">Fecha/Hora</th>
                        <th className="p-4">Paciente</th>
                        <th className="p-4">Tratamiento</th>
                        <th className="p-4">Folio</th>
                        <th className="p-4">Estado</th>
                        <th className="p-4 rounded-tr-xl">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {appointments.map(a => (
                        <tr key={a.id} className="hover:bg-gray-50">
                          <td className="p-4 whitespace-nowrap">{a.fecha} <br/><span className="text-gray-500">{a.hora}</span></td>
                          <td className="p-4">{a.nombre} {a.apellidos}<br/><span className="text-xs text-gray-500">{a.telefono}</span></td>
                          <td className="p-4">{a.tratamiento}</td>
                          <td className="p-4 font-mono text-xs">{a.folio}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${a.status === 'activa' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {a.status}
                            </span>
                          </td>
                          <td className="p-4">
                            {a.status === 'activa' && (
                              <button onClick={() => cancelApt(a.id)} className="text-red-500 hover:text-red-700 text-xs font-medium">Cancelar</button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {tab === 'config' && (
            <div>
               <h2 className="text-2xl font-serif mb-6">Configuración del Sitio</h2>
               <p className="text-gray-500 mb-8 text-sm">Esta es una simulación del módulo de edición. En producción, estos campos modificarían la base de datos.</p>
               
               <div className="space-y-8">
                  <div className="border p-6 rounded-xl">
                    <h3 className="font-semibold mb-4 border-b pb-2">Datos de Contacto</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs mb-1 text-gray-500">Teléfono WhatsApp</label>
                        <input type="text" className="w-full p-2 border rounded bg-gray-50" defaultValue="+52 81 2079 9186" />
                      </div>
                      <div>
                        <label className="block text-xs mb-1 text-gray-500">Dirección</label>
                        <input type="text" className="w-full p-2 border rounded bg-gray-50" defaultValue="Blvrd. Rufino Tamayo 120-3, San Isidro..." />
                      </div>
                    </div>
                  </div>

                  <div className="border p-6 rounded-xl">
                    <h3 className="font-semibold mb-4 border-b pb-2">Horarios de Servicio (Agenda)</h3>
                    <div className="space-y-3">
                       <div className="flex justify-between items-center text-sm"><span>Lunes a Viernes</span> <input type="text" className="border p-1 rounded w-32 text-center" defaultValue="10:00 - 19:00"/></div>
                       <div className="flex justify-between items-center text-sm"><span>Sábado</span> <input type="text" className="border p-1 rounded w-32 text-center" defaultValue="10:00 - 15:00"/></div>
                       <div className="flex justify-between items-center text-sm"><span>Domingo</span> <select className="border p-1 rounded w-32"><option>Cerrado</option><option>Abierto</option></select></div>
                    </div>
                  </div>

                  <button className="bg-[#1E1E1E] text-white px-6 py-2 rounded-lg text-sm">Guardar Cambios</button>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}