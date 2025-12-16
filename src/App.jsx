import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Megaphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Clock, 
  TrendingUp, 
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Wallet,
  MessageCircle,
  Quote,
  Star,
  Users,
  Briefcase,
  Target,
  ArrowDown
} from 'lucide-react';

// --- DEFINICIÓN DE AGENTES ---
const AGENTS = [
    {
        id: 'vendedor',
        name: 'Vendedor Automático',
        icon: TrendingUp,
        color: 'indigo',
        tagline: 'Generación de leads y cierres 24/7.',
        description: 'Se encarga de la prospección, calificación de leads y agendamiento de reuniones en tiempo real, garantizando que el equipo humano solo se enfoque en la presentación final.'
    },
    {
        id: 'marketing',
        name: 'Experto en Marketing',
        icon: Megaphone,
        color: 'purple',
        tagline: 'Creación de contenido para atraer tráfico.',
        description: 'Analiza tendencias, genera textos persuasivos y programa publicaciones consistentes en redes sociales, manteniendo activa la presencia digital de la empresa.'
    },
    {
        id: 'finanzas',
        name: 'Administrador y Finanzas',
        icon: Wallet,
        color: 'emerald',
        tagline: 'Gestión de cobros y análisis de rentabilidad.',
        description: 'Automatiza el proceso de cobranza a clientes morosos, realiza reportes financieros básicos y asegura el flujo de caja, liberando la presión administrativa.'
    },
    {
        id: 'soporte',
        name: 'Soporte y Atención al Cliente',
        icon: MessageCircle,
        color: 'pink',
        tagline: 'Respuestas instantáneas y soporte sin errores.',
        description: 'Maneja el 90% de las consultas de soporte por WhatsApp y chat en menos de 5 segundos, escalando al equipo humano solo las peticiones complejas o sensibles.'
    },
];

// --- COMPONENTE: DETALLE DE AGENTES ---
const AgentsDetail = ({ navigateAndScroll }) => (
  <section className="bg-transparent min-h-screen">
    
    {/* HERO SECTION - Resumen General */}
    <div id="agents-hero" className="pt-40 pb-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            La <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-500">Arquitectura Inteligente.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Los agentes SCALAR no son chatbots. Son módulos de IA operativa, entrenados para dominar un rol de negocio completo, con la precisión y eficiencia que la dependencia humana nunca podría ofrecer.
            </p>
            <a href="#vendedor" onClick={(e) => { e.preventDefault(); navigateAndScroll('agents', 'vendedor'); }} className="text-indigo-400 font-medium inline-flex items-center hover:text-white transition-colors">
                Explorar Agentes
                <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </a>
        </div>
    </div>

    {/* SECCIONES DE DETALLE INDIVIDUAL */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {AGENTS.map((agent, index) => {
            const Icon = agent.icon;
            const bgColor = `bg-${agent.color}-500/20`;
            const textColor = `text-${agent.color}-400`;
            const borderColor = `border-${agent.color}-500/50`;
            
            return (
                // NOTA: El ID es crucial para la navegación con anclas
                // El margen superior (mt-20) agrega el offset necesario para el menú fijo
                <div 
                  key={agent.id} 
                  id={agent.id} 
                  className={`p-8 rounded-3xl border ${borderColor} bg-slate-900 shadow-2xl shadow-slate-950/50 mt-20`}
                >
                    <div className="flex items-center gap-6 mb-6 border-b border-slate-800 pb-4">
                        <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <Icon className={`w-8 h-8 ${textColor}`} />
                        </div>
                        <div>
                            <h3 className={`text-4xl font-extrabold ${textColor}`}>{agent.name}</h3>
                            <p className="text-lg font-medium text-slate-300">{agent.tagline}</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Descripción General (A ser expandida) */}
                        <div>
                            <h4 className="text-xl font-semibold mb-3 text-white">Misión Principal</h4>
                            <p className="text-slate-400 mb-6">{agent.description}</p>
                            
                            <h4 className="text-xl font-semibold mb-3 text-white">Funcionalidades Clave</h4>
                            {/* Marcador de contenido futuro */}
                            <ul className="list-disc list-inside text-slate-400 ml-4 space-y-2">
                                <li>[Funcionalidad 1 - TBD]</li>
                                <li>[Funcionalidad 2 - TBD]</li>
                                <li>[Funcionalidad 3 - TBD]</li>
                            </ul>
                        </div>

                        {/* Impacto y KPI (Contenido de relleno) */}
                        <div>
                            <h4 className="text-xl font-semibold mb-3 text-white">Impacto Estimado en su Negocio</h4>
                            <div className="space-y-4">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <p className="text-3xl font-bold text-green-400">+40%</p>
                                    <p className="text-sm text-slate-400">Aumento en leads calificados.</p>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <p className="text-3xl font-bold text-red-400">-95%</p>
                                    <p className="text-sm text-slate-400">Reducción de tareas administrativas manuales.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        })}

        {/* Botón de retorno al Home */}
        <div className="text-center pt-12">
            <button 
              onClick={() => navigateAndScroll('home')}
              className="group bg-white text-slate-950 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto hover:bg-indigo-50 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Volver a la Página Principal
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  </section>
);


// --- COMPONENTE: ACERCA DE NOSOTROS ---
const AboutUs = ({ navigateAndScroll }) => (
  // Mayor espaciado vertical
  <section className="pt-40 pb-32 bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center mb-20"> {/* Más espacio debajo del título */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Nuestra Experiencia, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-violet-400">Su Éxito.</span> {/* Degradado violeta/púrpura */}
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          SCALAR nació de la necesidad, no de la teoría.
        </p>
      </div>

      <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
        <h2 className="text-3xl font-bold mb-12 border-b border-slate-700/50 pb-4 text-violet-400">
          La Fusión de Dos Perspectivas Emprendedoras
        </h2>
        
        {/* NUEVA ESTRUCTURA DE LECTURA FLUIDA (Dos Columnas) */}
        <div className="space-y-16">

          {/* Tarjeta 1: Pablo - Operaciones y Automatización (Basado en CV) */}
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Foto de Pablo */}
            <div className="md:col-span-5 flex justify-center order-2 md:order-1">
              <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-fuchsia-700/40 shadow-2xl shadow-fuchsia-900/40 overflow-hidden">
                 {/* ZONA DE FOTO: Pablo Navarro */}
                <img 
                  src="/pablo-navarro.jpg" 
                  alt="Foto de Pablo Navarro"
                  className="w-full h-full object-cover"
                  // Fallback: Si la imagen no carga, muestra el ícono
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div style={{display: 'none'}} className="w-full h-full items-center justify-center">
                    <Users className="w-16 h-16 text-fuchsia-400" />
                </div>
              </div>
            </div>

            {/* Texto de Pablo */}
            <div className="md:col-span-7 order-1 md:order-2">
              <h3 className="text-3xl font-bold text-fuchsia-400 mb-4">Pablo Navarro: Operaciones, Finanzas y Automatización IA</h3>
              <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                Con una sólida trayectoria en **Operaciones Financieras de gran escala (Banco Santander)**, Pablo desarrolló una visión sistémica para identificar puntos de quiebre en flujos de trabajo. Esta experiencia, combinada con el lanzamiento exitoso de su propia empresa (PINTUREX), donde implementó agentes de IA y flujos n8n para automatizar atención y logística, le permite crear soluciones tecnológicas que garantizan eficiencia, no solo gestión.
              </p>
              <p className="text-slate-400 italic">
                "Mi enfoque no es solo administrar una operación, sino escalarla y automatizar los procesos críticos para reducir costos y riesgos financieros."
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Francisco - Experiencia de Cliente y Capital */}
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Texto de Francisco */}
            <div className="md:col-span-7">
              <h3 className="text-3xl font-bold text-violet-400 mb-4">Francisco Navarro: Escalamiento Digital y Gestión de Clientes</h3> {/* Tono Morado */}
              <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                La base de Francisco en la **gestión de inversiones** le otorgó una vasta experiencia lidiando con clientes altamente exigentes, entendiendo sus expectativas y la importancia de la precisión en las transacciones. Su paso por el emprendimiento PyME (frutas y verduras a domicilio) le dio la visión de los desafíos logísticos y la necesidad de sistemas que permitan a los pequeños empresarios competir con eficiencia de capital.
              </p>
              <p className="text-slate-400 italic">
                "La IA debe ser una herramienta de democratización. Permite a cualquier PyME operar con la precisión y eficiencia que antes solo podían permitirse las grandes instituciones."
              </p>
            </div>

            {/* Foto de Francisco */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-violet-700/40 shadow-2xl shadow-violet-900/40 overflow-hidden"> {/* Borde Morado */}
                {/* ZONA DE FOTO: Francisco Navarro */}
                <img 
                  src="/francisco-navarro.jpg" 
                  alt="Foto de Francisco Navarro"
                  className="w-full h-full object-cover"
                   // Fallback: Si la imagen no carga, muestra el ícono
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div style={{display: 'none'}} className="w-full h-full items-center justify-center">
                    <Briefcase className="w-16 h-16 text-violet-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrativa Profesional Expandida y Compromiso Final */}
        <div className="mt-24 pt-8 border-t border-slate-800/50">
          <h3 className="text-2xl font-bold mb-4 text-violet-400">El Compromiso SCALAR</h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Nuestra experiencia combinada, sumando la gestión operativa y la arquitectura de sistemas escalables, nos permitió identificar un patrón común: **el emprendedor es el cuello de botella de su propio crecimiento.** Por ello, SCALAR no es solo un conjunto de chatbots o automatizaciones; es una estructura de inteligencia artificial que replica, ejecuta y mejora los procesos internos críticos que quitan el tiempo del dueño.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed font-semibold">
            <span className="text-fuchsia-400">Nuestra misión:</span> Convertir la frustración del trabajo administrativo en tiempo libre y crecimiento exponencial, basándonos en nuestra propia experiencia superando esas barreras.
          </p>
        </div>

        {/* Botón de retorno al Home */}
        <div className="text-center mt-12">
            <button 
              onClick={() => navigateAndScroll('home')}
              className="group bg-white text-slate-950 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto hover:bg-indigo-50 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Volver a la Propuesta SCALAR
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  </section>
);


// --- COMPONENTE: CONTENIDO PRINCIPAL (HOME) ---
const HomeContent = ({ scrollToSection, navigateAndScroll }) => {
  // Estado y lógica para la interactividad del FAQ (Preguntas Frecuentes)
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Función para navegar directamente al detalle de un agente específico
  const navigateToAgentDetail = (agentId) => {
      navigateAndScroll('agents', agentId);
  }

  // --- Manejo del Formulario de Demo ---
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', 'submitting'

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // --- SIMULACIÓN DE ENVÍO DE DATOS ---
    console.log('Datos del formulario capturados (¡Serían enviados al webhook!):', formData);

    // Espera simulada para el feedback visual
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Validación simple
    if (formData.nombre && formData.correo && formData.telefono) {
      setFormStatus('success');
      // Limpia el formulario después del éxito
      setFormData({
        nombre: '',
        correo: '',
        telefono: ''
      });

      // Flujo de Automatización Simulada (Lo que sucedería)
      console.log('--- Flujo de Automatización Simulada ---');
      console.log('1. Notificación enviada a Pablo y Francisco: Nuevo Lead de Demo.');
      console.log('2. Correo automatizado enviado al cliente con enlace a Calendly para agendar: ¡Hola, [Nombre]! Agenda tu demo aquí: [Enlace Calendly].');
      console.log('----------------------------------------');

    } else {
      setFormStatus('error');
    }
  };


  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden md:h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/agente-bg.png" 
              alt="Agente IA SCALAR"
              className="w-full h-full object-cover opacity-75" 
              style={{ objectPosition: 'center top' }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
              Inteligencia Artificial Operativa
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">
              Haz crecer tu empresa,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-200 to-cyan-200 animate-gradient">sin contratar más personal.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-100 mb-10 leading-relaxed drop-shadow-lg font-medium">
              Integra una <span className="text-white font-bold text-shadow-glow">fuerza laboral digital completa</span> que gestiona la totalidad de tu negocio. 
              Desde la atracción de clientes hasta el balance financiero.
              Toma el control total de tu operación y escala sin límites.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToSection('demo')}
                className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] border border-indigo-400/20"
              >
                Solicitar Demostración
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('solucion')}
                className="px-8 py-4 rounded-xl font-medium text-white hover:text-cyan-200 border border-white/20 hover:border-cyan-400/50 transition-all bg-white/5 backdrop-blur-md"
              >
                Conocer al Equipo
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-white/90 backdrop-blur-md inline-flex px-10 py-4 rounded-3xl bg-slate-900/40 border border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Trabajan 24/7 sin descanso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Sin contratos laborales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Instalación en 5 días</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROBLEM SECTION --- */}
        <section id="problema" className="py-24 bg-slate-900/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Sientes que eres <span className="text-red-400">esclavo de tu propio negocio</span>?
                </h2>
                <p className="text-slate-400 text-lg mb-6">
                  La mayoría de los dueños pasan el día atrapados en tareas repetitivas en lugar de hacer crecer su empresa.
                </p>
                <ul className="space-y-4">
                  {[
                    "Pierdes ventas por no responder WhatsApp a tiempo.",
                    "Te estresas cobrando facturas atrasadas.",
                    "Nadie publica en redes sociales por falta de tiempo.",
                    "Los sueldos se comen casi todas tus ganancias."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-red-500/10 p-1 rounded mt-1 mr-3">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl -z-10 rounded-full"></div>
                <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-slate-700 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Clock className="w-32 h-32" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tu Realidad Hoy</h3>
                  <p className="text-slate-400 mb-6">Apagando incendios todo el día.</p>
                  <div className="h-2 bg-slate-800 rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-red-500 w-[90%]"></div>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Nivel de estrés: Crítico</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SOLUTION (BENTO GRID) --- */}
        <section id="solucion" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Tu Nuevo Equipo Digital</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Contrata 4 roles expertos por una fracción del costo de un empleado junior. Sin quejas, sin horarios, resultados puros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              
              {/* Role 1: Vendedor (Large) */}
              <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
                <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all"></div>
                <div>
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vendedor Automático</h3>
                  <p className="text-slate-400 max-w-md">
                    Busca clientes, les escribe y agenda reuniones en tu calendario mientras duermes. Nunca se olvida de hacer seguimiento y trabaja con la misma energía el lunes a las 9 AM que el domingo a las 10 PM.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm font-medium text-indigo-400">
                    <span className="flex items-center mb-2 sm:mb-0">
                        Trae dinero a la empresa <span className="text-emerald-400 ml-2 flex items-center"><Zap className="w-3 h-3 mr-1"/> Activo 24/7</span>
                    </span>
                    <button 
                        onClick={() => navigateToAgentDetail('vendedor')} // Navegación individual
                        className="text-white bg-indigo-600 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-indigo-500"
                    >
                        Ver más
                    </button>
                </div>
              </div>

              {/* Role 2: Marketing */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Experto en Marketing</h3>
                  <p className="text-slate-400 text-sm">
                    Redacta y publica contenido en tus redes para atraer clientes, sin que tú tengas que escribir una sola palabra.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm font-medium text-purple-400">
                    <span className="flex items-center mb-2 sm:mb-0">
                        Crea contenido
                    </span>
                    <button 
                        onClick={() => navigateToAgentDetail('marketing')} // Navegación individual
                        className="text-white bg-purple-600 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-purple-500"
                    >
                        Ver más
                    </button>
                </div>
              </div>

              {/* Role 3: Finance */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Administrador y Finanzas</h3>
                  <p className="text-slate-400 text-sm">
                    Ordena tus números, cobra a clientes morosos y te dice exactamente cuánto ganaste a fin de mes.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm font-medium text-emerald-400">
                    <span className="flex items-center mb-2 sm:mb-0">
                        Controla el flujo de caja
                    </span>
                    <button 
                        onClick={() => navigateToAgentDetail('finanzas')} // Navegación individual
                        className="text-white bg-emerald-600 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-emerald-500"
                    >
                        Ver más
                    </button>
                </div>
              </div>

              {/* Role 4: CX (Large) */}
              <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-pink-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[120px] -mr-16 -mb-16 group-hover:bg-pink-500/20 transition-all"></div>
                <div>
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Soporte y Atención al Cliente</h3>
                  <p className="text-slate-400 max-w-md">
                    Responde dudas al instante (menos de 5 segundos) y mantiene a tus clientes felices. Permite que atiendas al doble de personas sin contratar a más secretarias o recepcionistas.
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm font-medium text-pink-400">
                    <span className="flex items-center mb-2 sm:mb-0">
                        Cuida a tus clientes
                    </span>
                    {/* FIX APLICADO: Cursor y hover visual para confirmar interactividad */}
                    <button 
                        onClick={() => navigateToAgentDetail('soporte')} 
                        className="text-white bg-pink-600 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-pink-500"
                    >
                        Ver más
                    </button>
                </div>
              </div>

            </div>

            {/* Nuevo: Botón Ver en Detalle (General) */}
            <div className="text-center mt-12">
                <button 
                onClick={() => navigateAndScroll('agents', 'agents-hero')} // Llama a la hero section de la página de agentes
                className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                >
                Ver en detalle cómo trabaja cada agente
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section id="testimonios" className="py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Empresarios que recuperaron su vida</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Ellos dejaron de apagar incendios y empezaron a escalar con SCALAR.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Testimonio 1 - MOGA */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  {/* LOGO MOGA */}
                  <div className="w-14 h-14 rounded-full bg-white overflow-hidden border-2 border-slate-700 flex items-center justify-center p-1">
                    <img src="/moga.png" alt="Moga Veterinaria" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Cristián</h4>
                    <p className="text-sm text-indigo-400">Veterinaria MOGA</p>
                  </div>
                </div>
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "Antes perdíamos citas por no contestar el teléfono a tiempo. Ahora la agenda se llena sola y yo me dedico 100% a los animales. Es como tener una recepcionista estrella por una fracción del costo."
                </p>
              </div>

              {/* Testimonio 2 - REVIT */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                   {/* LOGO REVIT */}
                   <div className="w-14 h-14 rounded-full bg-white overflow-hidden border-2 border-slate-700 flex items-center justify-center p-1">
                     <img src="/revit.png" alt="Clinica Revit" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Patricio</h4>
                    <p className="text-sm text-indigo-400">Kinesiología REVIT</p>
                  </div>
                </div>
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "La gestión de cobros y facturas me quitaba horas de sueño. SCALAR ordenó todo el flujo administrativo en una semana. Mi clínica funciona como un reloj suizo sin contratar personal extra."
                </p>
              </div>

              {/* Testimonio 3 - ROCA */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  {/* LOGO ROCA */}
                  <div className="w-14 h-14 rounded-full bg-white overflow-hidden border-2 border-slate-700 flex items-center justify-center p-1">
                     <img src="/roca.png" alt="Roca Propiedades" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Oscar</h4>
                    <p className="text-sm text-indigo-400">Corredora ROCA</p>
                  </div>
                </div>
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "En el rubro inmobiliario la velocidad es todo. Mis agentes responden a interesados en segundos, 24/7, y me dejan la reunión lista. Hemos duplicado las captaciones sin contratar más personal."
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section id="precios" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Planes Simples</h2>
              <p className="text-slate-400">
                Más barato que un sueldo mínimo. Más efectivo que un equipo entero.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all">
                <h3 className="text-xl font-medium text-slate-300 mb-2">Emprendedor</h3>
                <div className="text-3xl font-bold mb-6">Starter</div>
                <p className="text-slate-400 text-sm mb-8 h-12">Para negocios que quieren empezar a ordenarse y automatizar respuestas.</p>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="w-full py-3 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-medium transition-all mb-8"
                >
                  Consultar Precio
                </button>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Agente de Ventas Básico</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Chatbot de Respuestas 24/7</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Panel de Control Simple</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-slate-900 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  El más elegido
                </div>
                <h3 className="text-xl font-medium text-indigo-400 mb-2">Crecimiento</h3>
                <div className="text-3xl font-bold mb-6">Growth</div>
                <p className="text-slate-400 text-sm mb-8 h-12">El equipo completo. Ventas agresivas, marketing y finanzas en un solo lugar.</p>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all mb-8 shadow-lg shadow-indigo-500/25"
                >
                  Solicitar Demo
                </button>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <strong>Todo lo de Emprendedor</strong></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Ventas Proactivas (Busca clientes)</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Creación de Contenido Automático</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> Gestión de Cobranzas y Pagos</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all">
                <h3 className="text-xl font-medium text-slate-300 mb-2">Corporativo</h3>
                <div className="text-3xl font-bold mb-6">Enterprise</div>
                <p className="text-slate-400 text-sm mb-8 h-12">Para empresas grandes con varias sucursales y necesidades a medida.</p>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="w-full py-3 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-medium transition-all mb-8"
                >
                  Contactar Ventas
                </button>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> Integraciones a medida (API)</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> Gerente de Cuenta Personal</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> Entrenamiento de IA Privado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Tengo que despedir a mis empleados?", a: "No necesariamente. SCALAR hace el trabajo repetitivo y aburrido (agendar, cobrar, responder lo mismo 100 veces). Esto libera a tu equipo humano para que hagan lo importante: cerrar tratos grandes y atender mejor a la gente en persona." },
                { q: "¿Es difícil de usar?", a: "Para nada. Nosotros te lo entregamos configurado y listo. Si sabes usar WhatsApp y el correo, ya sabes usar SCALAR. Además, la instalación tarda solo 5 días." },
                { q: "¿Qué pasa si mi negocio crece mucho?", a: "Esa es la magia. Si mañana te llegan 1.000 clientes, SCALAR los atiende a todos sin cansarse y sin cobrarte horas extras. Su capacidad de atención se vuelve infinita." },
                { q: "¿Es seguro para mis datos financieros?", a: "Totalmente. Usamos seguridad de nivel bancario. El agente de finanzas solo ve lo que tú le permites y te ayuda a tener orden, pero pero tú siempre tienes el control final del dinero." }
              ].map((item, index) => (
                <div key={index} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="font-medium text-slate-200">{item.q}</span>
                    {activeFaq === index ? <ChevronUp className="w-5 h-5 text-indigo-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 pt-4 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA / CONTACT --- */}
        <section id="demo" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/20 -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para recuperar tu tiempo?</h2>
            <p className="text-xl text-slate-300 mb-10">
              Agenda una demostración de 15 minutos. Te mostraremos exactamente cuánto dinero y horas te ahorrará SCALAR desde el primer mes.
            </p>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-400 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" 
                    placeholder="Tu nombre" 
                  />
                </div>
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-slate-400 mb-1">Correo Corporativo</label>
                  <input 
                    type="email" 
                    id="correo" 
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" 
                    placeholder="nombre@empresa.com" 
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-slate-400 mb-1">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" 
                    placeholder="+56 9..." 
                  />
                </div>

                {/* Mensajes de Estado del Formulario */}
                {formStatus === 'submitting' && (
                  <p className="text-indigo-400 flex items-center justify-center text-sm">
                    <Zap className="w-4 h-4 mr-2 animate-pulse" /> Enviando solicitud...
                  </p>
                )}
                {formStatus === 'success' && (
                  <p className="text-green-400 flex items-center justify-center text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> ¡Solicitud enviada! Revisa tu correo para agendar la demo.
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-400 flex items-center justify-center text-sm">
                    <X className="w-4 h-4 mr-2" /> Por favor, completa todos los campos.
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Agendando...' : 'Agendar Demo Gratis'}
                </button>
                
                <p className="text-xs text-center text-slate-500 mt-4">
                  Sin compromiso. Auditoría de IA incluida.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-slate-950 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center">
                {/* LOGO FOOTER */}
                <img 
                  src="/logo.png" 
                  alt="Logo SCALAR" 
                  className="h-8 w-auto mr-3 object-contain"
                />
                
                <span className="font-bold text-lg tracking-tight text-slate-200">SCALAR</span>
              </div>
              <div className="text-slate-500 text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} Taskly IA SpA. Todos los derechos reservados.</p>
                <p className="mt-1">Santiago, Chile.</p>
              </div>
            </div>
          </footer>
    </>
  );
};


// --- COMPONENTE PRINCIPAL (ROUTER) ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  // State for internal scrolling when changing pages
  const [scrollTarget, setScrollTarget] = useState(null);

  // Function to navigate to a new page and/or set a scroll target
  const navigateAndScroll = (page, sectionId = null) => {
    // Si la página de destino es diferente a la actual, la cambiamos primero
    if (currentPage !== page) {
      setCurrentPage(page);
    }
    
    // Si hay un ID de sección (ancla), lo guardamos. El useEffect lo ejecutará después del render.
    if (sectionId) {
        setScrollTarget(sectionId);
    }
    
    setIsMenuOpen(false); // Close mobile menu
    
    // Opcional: Si vamos a Home y no hay ancla, scroll al top
    if (page === 'home' && !sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page !== 'home') {
        // Al cambiar de página, siempre scrolleamos al inicio para que se vea el nuevo Hero
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Altura de la barra de navegación (aprox 80px, clase h-20)
  const NAVBAR_HEIGHT = 80;

  // useEffect to handle scrolling after the component mounts/updates
  useEffect(() => {
    // Este useEffect se dispara cuando la página cambia (currentPage) o cuando se establece un scrollTarget
    if (scrollTarget) {
      // Pequeño retraso para asegurar que el DOM del nuevo componente AgentsDetail esté renderizado
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          // Calculamos la posición para que el elemento quede justo debajo del navbar fijo
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - NAVBAR_HEIGHT - 20; // 20px extra de margen
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setScrollTarget(null); // Limpiar el objetivo para que no se ejecute dos veces
      }, 200); // Aumentado el tiempo para garantizar el renderizado del DOM
      return () => clearTimeout(timer);
    }
  }, [scrollTarget, currentPage]);

  // Style to simulate a distant starfield using multiple repeating radial gradients
  const starfieldStyle = {
    // Estrellas sutiles que repiten sobre el fondo oscuro
    backgroundImage: `
      repeating-radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: `800px 800px, 400px 400px`,
    backgroundPosition: `0 0, 100px 100px`,
    // Mantiene el fondo estático al hacer scroll para un mejor efecto
    backgroundAttachment: 'fixed',
  };


  return (
    // FIX APLICADO: 'w-screen' y 'overflow-x-hidden' combinados fuerzan el ancho correcto.
    // FONDO ESTELAR APLICADO: Mediante estilo inline para simular las estrellas.
    <div style={starfieldStyle} className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden w-screen">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Clickeable para ir al Home */}
            <div className="flex items-center cursor-pointer" onClick={() => navigateAndScroll('home')} >
              
              {/* LOGO SCALAR */}
              <img 
                src="/logo.png" 
                alt="Logo SCALAR" 
                className="h-10 w-auto mr-3 object-contain"
              />

              <span className="font-bold text-xl tracking-tight">SCALAR</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {/* Navegación a secciones internas (Home) */}
              <button onClick={() => navigateAndScroll('home', 'problema')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">El Problema</button>
              <button onClick={() => navigateAndScroll('home', 'solucion')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Nuestros Agentes</button>
              <button onClick={() => navigateAndScroll('home', 'testimonios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Clientes</button>
              <button onClick={() => navigateAndScroll('home', 'precios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Planes</button>
              
              {/* Nuevo: Acerca de Nosotros */}
              <button onClick={() => navigateAndScroll('about')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium font-bold text-indigo-400">Acerca de nosotros</button>

              <button 
                onClick={() => navigateAndScroll('home', 'demo')}
                className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Agendar Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => navigateAndScroll('home', 'problema')} className="block w-full text-left py-3 text-slate-300">El Problema</button>
              <button onClick={() => navigateAndScroll('home', 'solucion')} className="block w-full text-left py-3 text-slate-300">Agentes</button>
              <button onClick={() => navigateAndScroll('home', 'testimonios')} className="block w-full text-left py-3 text-slate-300">Clientes</button>
              <button onClick={() => navigateAndScroll('home', 'precios')} className="block w-full text-left py-3 text-slate-300">Planes</button>
              <button onClick={() => navigateAndScroll('about')} className="block w-full text-left py-3 font-bold text-indigo-400">Acerca de nosotros</button>
              <button onClick={() => navigateAndScroll('home', 'demo')} className="block w-full text-center mt-4 bg-indigo-600 py-3 rounded-lg font-bold">Agendar Demo</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* --- ROUTING LOGIC --- */}
      {currentPage === 'home' && <HomeContent scrollToSection={(id) => navigateAndScroll('home', id)} navigateAndScroll={navigateAndScroll} />} 
      {currentPage === 'about' && <AboutUs navigateAndScroll={navigateAndScroll} />}
      {currentPage === 'agents' && <AgentsDetail navigateAndScroll={navigateAndScroll} />}

    </div>
  );
};

export default App;