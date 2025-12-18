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
 ArrowDown,
 Search,
 Video,
 PhoneCall,
 Mail,
 Calendar,
 StarHalf,
 Database,
 Smartphone,
 Youtube,
 SearchCode,
 Newspaper,
 Image as ImageIcon,
 Share2,
 FileText,
 PenTool,
 CheckSquare,
 CreditCard,
 AlertTriangle,
 FileSearch,
 Layers,
 Inbox,
 UserPlus,
 ShoppingCart,
 Bot,
 MessagesSquare,
 ArrowUpRight
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
const AgentsDetail = ({ navigateAndScroll }) => {
  
   const renderAgentSection = (agentId) => {
       const agent = AGENTS.find(a => a.id === agentId);
       const Icon = agent.icon;
       const textColor = `text-${agent.color}-400`;
       const borderColor = `border-${agent.color}-500/50`;
       const bgColor = `bg-${agent.color}-500/20`;


       const content = {
           vendedor: {
               mision: "Convertir tu proceso comercial en una máquina predecible. Este agente no solo espera que lleguen leads; sale a buscarlos, califica su interés y agenda reuniones por ti. El valor real: conseguirás nuevos clientes en modo automático mientras tu equipo se enfoca en el cierre.",
               growth: [
                   { icon: Search, title: "Búsqueda de Leads (Scraping)", desc: "Escaneo de LinkedIn y Google Maps para enviar propuestas de convenios corporativos automáticos." },
                   { icon: BarChart3, title: "Análisis de Competencia", desc: "Rastreo de precios y ofertas rivales para argumentos de venta dinámicos." },
                   { icon: Video, title: "Video Prospecting (Avatar AI)", desc: "Videos personalizados donde tu avatar saluda al prospecto por su nombre." },
                   { icon: PhoneCall, title: "Llamadas en Frío (AI Voice)", desc: "Calificación inicial o reactivación de leads antiguos mediante voz humana." }
               ],
               standard: [
                   { icon: Mail, title: "Redacción Hiper-Personalizada", desc: "Correos rompehielos basados en técnicas modernas de venta." },
                   { icon: Zap, title: "Gestión de Respuestas", desc: "Clasificación (Interesado/No interesado) y contestación adecuada." },
                   { icon: Calendar, title: "Agendamiento de Reuniones", desc: "Coordinación de agendas e invitaciones automáticas." },
                   { icon: Clock, title: "Recordatorios de Citas", desc: "Asegura la asistencia de prospectos mediante avisos multicanal." },
                   { icon: StarHalf, title: "Google Reviews Link", desc: "Mejora tu ranking local pidiendo reseñas tras cada cita." },
                   { icon: Database, title: "Limpieza de CRM", desc: "Detección de duplicados y actualización de cargos automáticamente." },
                   { icon: Smartphone, title: "Seguimiento Multicanal", desc: "Secuencias coordinadas por Email, WhatsApp y SMS." }
               ],
               kpis: [
                   { label: "Leads Calificados", value: "+40%", color: "text-green-400" },
                   { label: "Costos de Prospección", value: "-70%", color: "text-red-400" },
                   { label: "Conversión a Cita", value: "x2.5", color: "text-indigo-400" }
               ]
           },
           marketing: {
               mision: "Escalar tu presencia digital y autoridad sin que tengas que grabar una sola historia o escribir un blog. Este agente se encarga de que tu marca esté presente donde tus clientes están, fidelizándolos y activando ventas recurrentes mediante el análisis de su comportamiento histórico.",
               growth: [
                   { icon: Youtube, title: "Video a Blog (Repurposing)", desc: "Transcripción de videos de YouTube y transformación en artículos estructurados." },
                   { icon: SearchCode, title: "Auditoría de Contenido", desc: "Escaneo de tu web para detectar enlaces rotos o contenido desactualizado." },
                   { icon: Newspaper, title: "Newsletter Automatizada", desc: "Recopilación de noticias del sector y redacción de boletines semanales." }
               ],
               standard: [
                   { icon: Mail, title: "Fidelización Automatizada", desc: "Emails en fechas especiales y ofertas en momentos clave de compra." },
                   { icon: ImageIcon, title: "Generación de Imágenes AI", desc: "Infografías e imágenes únicas para artículos, libres de derechos." },
                   { icon: Share2, title: "Contenido Redes Sociales", desc: "Posts de autoridad, promocionales, educativos y personales." },
                   { icon: PenTool, title: "Social Media Manager", desc: "Redacción, programación y envío de contenido blog por email." }
               ],
               kpis: [
                   { label: "Alcance en Redes", value: "+65%", color: "text-green-400" },
                   { label: "Ventas Recurrentes", value: "+25%", color: "text-purple-400" },
                   { label: "Ahorro Agencia", value: "100%", color: "text-emerald-400" }
               ]
           },
           finanzas: {
               mision: "Traer orden militar y claridad financiera a tu operación. Elimina el error humano en la facturación y los reportes, asegurando que cada peso esté donde debe estar. Funciona como un CFO y asistente ejecutivo 24/7 que te alerta antes de que ocurra un problema.",
               growth: [
                   { icon: Layers, title: "Agendamiento Complejo", desc: "Negociación de reuniones con múltiples participantes buscando huecos comunes." },
                   { icon: CreditCard, title: "Categorización de Gastos", desc: "Clasificación inteligente según historial y reglas de negocio." },
                   { icon: FileText, title: "Generación de Contratos", desc: "Creación de documentos legales basados en datos del CRM/Formularios." },
                   { icon: PenTool, title: "Gestión de Firmas", desc: "Envío y seguimiento automático de firmas hasta completar el proceso." },
                   { icon: Smartphone, title: "Control de Suscripciones", desc: "Detección de pagos duplicados o aumentos inesperados en SaaS." },
                   { icon: AlertTriangle, title: "Detección de Anomalías", desc: "Alertas ante caídas de tráfico o gastos operativos inusuales." }
               ],
               standard: [
                   { icon: FileSearch, title: "Procesamiento de Facturas", desc: "OCR para extraer datos de PDF/Imagen de proveedores al instante." },
                   { icon: BarChart3, title: "Reporte P&L Semanal", desc: "Flujo de caja y pérdidas/ganancias con comentarios explicativos." },
                   { icon: Database, title: "Información Contable", desc: "Preparación de planillas listas para enviar a tu Contador." },
                   { icon: Inbox, title: "Triaje de Correo", desc: "Asistente que filtra spam y redacta borradores para correos importantes." },
                   { icon: Briefcase, title: "Preparación de Reuniones", desc: "Briefing con perfiles LinkedIn y noticias de los asistentes." },
                   { icon: UserPlus, title: "Onboarding de Empleados", desc: "Alta en sistemas y envío de manuales de bienvenida automático." }
               ],
               kpis: [
                   { label: "Tiempo Admin", value: "-80%", color: "text-red-400" },
                   { label: "Error en Cuentas", value: "0%", color: "text-emerald-400" },
                   { label: "Visibilidad Caja", value: "100%", color: "text-blue-400" }
               ]
           },
           soporte: {
               mision: "Garantizar que ningún cliente se sienta ignorado. Este agente no solo responde dudas; entiende la urgencia y el sentimiento detrás de cada mensaje. El resultado es un incremento masivo en la retención de clientes y la recuperación de ventas que dabas por perdidas.",
               growth: [
                   { icon: ShoppingCart, title: "Recuperación de Carritos", desc: "Contacto proactivo por WhatsApp a usuarios que abandonaron compras." }
               ],
               standard: [
                   { icon: Bot, title: "Soporte Inteligente (RAG)", desc: "Entrenado con tus documentos para responder dudas técnicas al instante." },
                   { icon: MessagesSquare, title: "Soporte Omnicanal", desc: "Gestión unificada de WhatsApp, Instagram, Web y Email." },
                   { icon: Zap, title: "Enrutamiento Inteligente", desc: "Detección de urgencia/enfado para escalar casos a humanos." },
                   { icon: UserPlus, title: "Onboarding de Clientes", desc: "Tutoriales proactivos para guiar a usuarios en sus primeros días." },
                   { icon: FileText, title: "Análisis de Feedback", desc: "Reporte mensual de 'Qué piden los clientes' basado en reviews." }
               ],
               kpis: [
                   { label: "Tiempo Respuesta", value: "<5s", color: "text-indigo-400" },
                   { label: "Ticket Resuelto AI", value: "90%", color: "text-green-400" },
                   { label: "NPS / Satisfacción", value: "+45%", color: "text-pink-400" }
               ]
           }
       }[agentId];


       return (
           <div key={agentId} id={agentId} className={`p-8 md:p-12 rounded-3xl border ${borderColor} bg-slate-900 shadow-2xl shadow-slate-950/50 mt-20 relative overflow-hidden`}>
               <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-slate-800 pb-8">
                   <div className="relative group">
                       <div className={`w-32 h-32 rounded-2xl bg-slate-800 border-2 ${borderColor} overflow-hidden shadow-2xl transition-transform group-hover:scale-105`}>
                           <img src={`/agente-${agentId}.png`} alt={`Agente ${agent.name}`} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                           <div style={{display: 'none'}} className="w-full h-full items-center justify-center"><Icon className={`w-12 h-12 ${textColor}`} /></div>
                       </div>
                       <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center border border-white/10`}><Icon className={`w-4 h-4 ${textColor}`} /></div>
                   </div>
                   <div className="text-center md:text-left">
                       <h3 className={`text-5xl font-extrabold ${textColor} mb-2 tracking-tight`}>{agent.name}</h3>
                       <p className="text-xl font-medium text-slate-300">{agent.tagline}</p>
                   </div>
               </div>


               <div className="grid lg:grid-cols-3 gap-12">
                   <div className="lg:col-span-2 space-y-10">
                       <div>
                           <h4 className="text-2xl font-bold mb-4 text-white flex items-center gap-2 tracking-tight"><Target className={`w-6 h-6 ${textColor}`} /> Misión Principal</h4>
                           <p className="text-slate-300 text-lg leading-relaxed">{content.mision}</p>
                       </div>
                       <div>
                           <h4 className={`text-xl font-bold mb-6 text-white border-l-4 ${borderColor.replace('border-', 'border-')} pl-4 tracking-tight`}>Funcionalidades de Éxito</h4>
                           <div className="grid md:grid-cols-2 gap-6">
                               {content.standard.map((feat, i) => (
                                   <div key={i} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                                       <feat.icon className={`w-5 h-5 ${textColor} mb-2`} />
                                       <h5 className="font-bold text-white text-sm mb-1">{feat.title}</h5>
                                       <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
                                   </div>
                               ))}
                           </div>
                       </div>
                   </div>
                   <div className="space-y-8">
                       <div className={`bg-gradient-to-br from-${agent.color}-500/20 to-slate-900/50 p-6 rounded-3xl border ${borderColor} relative overflow-hidden shadow-xl`}>
                           <div className={`absolute top-0 right-0 ${agent.color === 'emerald' ? 'bg-emerald-600' : `bg-${agent.color}-600`} text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider`}>Plan Growth Exclusive</div>
                           <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2 tracking-tight"><ArrowUpRight className="w-5 h-5" /> Potencia Growth</h4>
                           <ul className="space-y-5">
                               {content.growth.map((item, i) => (
                                   <li key={i} className="flex gap-3">
                                       <div className="mt-1"><item.icon className={`w-5 h-5 ${textColor}`} /></div>
                                       <div><p className="text-sm font-bold text-white">{item.title}</p><p className="text-xs text-slate-400 leading-tight">{item.desc}</p></div>
                                   </li>
                               ))}
                           </ul>
                       </div>
                       <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 shadow-inner">
                           <h4 className="text-lg font-bold mb-4 text-white tracking-tight">Impacto Estimado</h4>
                           <div className="space-y-4">
                               {content.kpis.map((kpi, i) => (
                                   <div key={i} className="flex items-end justify-between border-b border-slate-800 pb-2">
                                       <p className="text-slate-400 text-xs">{kpi.label}</p>
                                       <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                                   </div>
                               ))}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       );
   };


   return (
       <section className="bg-transparent min-h-screen">
           <div id="agents-hero" className="pt-40 pb-20 bg-slate-900/50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                   <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">La <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-500">Arquitectura Inteligente.</span></h1>
                   <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-medium">Los agentes SCALAR no son chatbots. Son módulos de IA operativa, entrenados para dominar un rol de negocio completo, con la precisión y eficiencia que la dependencia humana nunca podría ofrecer.</p>
                   <a href="#vendedor" onClick={(e) => { e.preventDefault(); navigateAndScroll('agents', 'vendedor'); }} className="text-indigo-400 font-semibold inline-flex items-center hover:text-white transition-colors cursor-pointer">Explorar la Fuerza Digital<ArrowDown className="ml-2 w-5 h-5 animate-bounce" /></a>
               </div>
           </div>
           <div className="py-24">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                   {AGENTS.map(agent => renderAgentSection(agent.id))}
                   <div className="text-center pt-12">
                       <button onClick={() => navigateAndScroll('home')} className="group bg-white text-slate-950 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto hover:bg-indigo-50 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer tracking-tight">Volver a la Página Principal<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
                   </div>
               </div>
           </div>
       </section>
   );
};




// --- COMPONENTE: ACERCA DE NOSOTROS ---
const AboutUs = ({ navigateAndScroll }) => (
 <section className="pt-40 pb-32 bg-transparent">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-20 text-white">
       <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Nuestra Experiencia, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-violet-400">Su Éxito.</span></h1>
       <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">SCALAR nació de la necesidad, no de la teoría.</p>
     </div>


     <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
       <h2 className="text-3xl font-bold mb-12 border-b border-slate-700/50 pb-4 text-violet-400 tracking-tight">La Fusión de Dos Perspectivas Emprendedoras</h2>
      
       <div className="space-y-16">
         <div className="grid md:grid-cols-12 gap-10 items-center text-white">
           <div className="md:col-span-5 flex justify-center order-2 md:order-1">
             <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-fuchsia-700/40 shadow-2xl shadow-fuchsia-900/40 overflow-hidden text-fuchsia-400">
               <img src="/pablo-navarro.png" alt="Pablo Navarro" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
               <div style={{display: 'none'}} className="w-full h-full items-center justify-center"><Users className="w-16 h-16" /></div>
             </div>
           </div>
           <div className="md:col-span-7 order-1 md:order-2">
             <h3 className="text-3xl font-bold text-fuchsia-400 mb-4 tracking-tight">Pablo Navarro: Operaciones, Finanzas y Automatización IA</h3>
             <p className="text-lg text-slate-300 mb-4 leading-relaxed">
               Con una sólida trayectoria en **Operaciones Financieras de gran escala (Banco Santander)**, Pablo desarrolló una visión sistémica para identificar puntos de quiebre en flujos de trabajo. Esta experiencia, combinada con el lanzamiento exitoso de su propia empresa (PINTUREX), donde implementó agentes de IA y flujos n8n para automatizar atención y logística, le permite crear soluciones tecnológicas que garantizan eficiencia, no solo gestión.
             </p>
             <p className="text-slate-400 italic text-sm">
               "Mi enfoque no es solo administrar una operación, sino escalarla y automatizar los procesos críticos para reducir costos y riesgos financieros."
             </p>
           </div>
         </div>


         <div className="grid md:grid-cols-12 gap-10 items-center text-white">
           <div className="md:col-span-7">
             <h3 className="text-3xl font-bold text-violet-400 mb-4 tracking-tight">Francisco Navarro: Escalamiento Digital y Gestión de Clientes</h3>
             <p className="text-lg text-slate-300 mb-4 leading-relaxed">
               La base de Francisco en la **gestión de inversiones** le otorgó una vasta experiencia lidiando con clientes altamente exigentes, entendiendo sus expectativas y la importancia de la precisión en las transacciones. Su paso por el emprendimiento PyME (frutas y verduras a domicilio) le dio la visión de los desafíos logísticos y la necesidad de sistemas que permitan a los pequeños empresarios competir con eficiencia de capital.
             </p>
             <p className="text-slate-400 italic text-sm">
               "La IA debe ser una herramienta de democratización. Permite a cualquier PyME operar con la precisión y eficiencia que antes solo podían permitirirse las grandes instituciones."
             </p>
           </div>
           <div className="md:col-span-5 flex justify-center text-violet-400">
             <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-violet-700/40 shadow-2xl shadow-violet-900/40 overflow-hidden">
               <img src="/francisco-navarro.png" alt="Francisco Navarro" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
               <div style={{display: 'none'}} className="w-full h-full items-center justify-center"><Briefcase className="w-16 h-16" /></div>
             </div>
           </div>
         </div>
       </div>


       <div className="mt-24 pt-8 border-t border-slate-800/50 text-white">
         <h3 className="text-2xl font-bold mb-4 text-violet-400 tracking-tight">El Compromiso SCALAR</h3>
         <p className="text-lg text-slate-300 mb-6 leading-relaxed">
           Nuestra experiencia combinada, sumando la gestión operativa y la arquitectura de sistemas escalables, nos permitió identificar un patrón común: **el emprendedor es el cuello de botella de su propio crecimiento.** Por ello, SCALAR no es solo un conjunto de chatbots o automatizaciones; es una estructura de inteligencia artificial que replica, ejecuta y mejora los procesos internos críticos que quitan el tiempo del dueño.
         </p>
         <p className="text-lg text-slate-300 leading-relaxed font-semibold">
           <span className="text-fuchsia-400">Nuestra misión:</span> Convertir la frustración del trabajo administrativo en tiempo libre y crecimiento exponencial, basándonos en nuestra propia experiencia superando esas barreras.
         </p>
       </div>


       <div className="text-center mt-12">
           <button onClick={() => navigateAndScroll('home')} className="group bg-white text-slate-950 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto hover:bg-indigo-50 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer tracking-tight">Volver a la Propuesta SCALAR<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
       </div>
     </div>
   </div>
 </section>
);




// --- COMPONENTE: CONTENIDO PRINCIPAL (HOME) ---
const HomeContent = ({ scrollToSection, navigateAndScroll }) => {
 const [activeFaq, setActiveFaq] = useState(null);
 const [formData, setFormData] = useState({ nombre: '', correo: '', telefono: '' });
 const [formStatus, setFormStatus] = useState(null);


 const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);
 const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


 const handleSubmit = async (e) => {
   e.preventDefault();
   setFormStatus('submitting');
   await new Promise(resolve => setTimeout(resolve, 1500));
   if (formData.nombre && formData.correo && formData.telefono) {
     setFormStatus('success');
     setFormData({ nombre: '', correo: '', telefono: '' });
   } else {
     setFormStatus('error');
   }
 };


 const navigateToAgentDetail = (agentId) => navigateAndScroll('agents', agentId);


 return (
   <>
     <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden md:h-screen flex items-center">
         <div className="absolute inset-0 z-0">
           <img src="/agente-bg.png" alt="Agente IA" className="w-full h-full object-cover opacity-75" style={{ objectPosition: 'center top' }} />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm tracking-wide">
             <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>Inteligencia Artificial Operativa
           </div>
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">Haz crecer tu empresa,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-200 to-cyan-200 animate-gradient">sin contratar más personal.</span></h1>
           <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-100 mb-10 leading-relaxed drop-shadow-lg font-medium opacity-90">Integra una <span className="text-white font-bold text-shadow-glow">fuerza laboral digital completa</span> que gestiona la totalidad de tu negocio. Desde la atracción de clientes hasta el balance financiero. Toma el control total de tu operación y escala sin límites.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button onClick={() => scrollToSection('demo')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] border border-indigo-400/20 cursor-pointer tracking-tight">Solicitar Demostración<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
             <button onClick={() => navigateAndScroll('about')} className="px-8 py-4 rounded-xl font-semibold text-white hover:text-cyan-200 border border-white/20 hover:border-cyan-400/50 transition-all bg-white/5 backdrop-blur-md cursor-pointer text-lg tracking-tight">Conocer al Equipo</button>
           </div>


           {/* --- CUADRO INFERIOR HERO SECTION (RESTAURADO Y CENTRADO) --- */}
           <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-white/90 backdrop-blur-md inline-flex px-10 py-5 items-center rounded-3xl bg-slate-900/40 border border-white/5 mx-auto">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-cyan-400" />
               <span className="text-sm font-medium leading-none">Trabajan 24/7 sin descanso</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-cyan-400" />
               <span className="text-sm font-medium leading-none">Sin contratos laborales</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-cyan-400" />
               <span className="text-sm font-medium leading-none">Instalación en 5 días</span>
             </div>
           </div>
         </div>
       </section>


       <section id="problema" className="py-24 bg-slate-900/50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">¿Sientes que eres <span className="text-red-400 font-extrabold">esclavo de tu propio negocio</span>?</h2>
               <p className="text-slate-400 text-lg mb-6 leading-relaxed">La mayoría de los dueños pasan el día atrapados en tareas repetitivas en lugar de hacer crecer su empresa.</p>
               <ul className="space-y-4">
                 {["Pierdes ventas por no responder WhatsApp a tiempo.", "Te estresas cobrando facturas atrasadas.", "Nadie publica en redes sociales por falta de tiempo.", "Los sueldos se comen casi todas tus ganancias."].map((item, i) => (
                   <li key={i} className="flex items-start text-base"><X className="w-4 h-4 text-red-500 mr-3 mt-1" /><span className="text-slate-300 font-medium">{item}</span></li>
                 ))}
               </ul>
             </div>
             <div className="relative">
               <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><Clock className="w-32 h-32" /></div>
                 <h3 className="text-xl font-bold mb-2 tracking-tight">Tu Realidad Hoy</h3>
                 <p className="text-slate-400 mb-6">Apagando incendios todo el día.</p>
                 <div className="h-2 bg-slate-800 rounded-full mb-4 overflow-hidden"><div className="h-full bg-red-500 w-[90%]"></div></div>
                 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Nivel de estrés: Crítico</p>
               </div>
             </div>
           </div>
         </div>
       </section>


       <section id="solucion" className="py-24 bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 text-white">
             <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Tu Nuevo Equipo Digital</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">Contrata 4 roles expertos por una fracción del costo de un empleado junior. Sin quejas, sin horarios, resultados puros.</p>
           </div>


           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col min-h-[320px]">
               <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all pointer-events-none"></div>
               <div className="flex-grow text-white">
                 <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400"><TrendingUp className="w-6 h-6" /></div>
                 <h3 className="text-2xl font-bold mb-2 tracking-tight">Vendedor Automático</h3>
                 <p className="text-slate-400 max-w-2xl mb-6 leading-relaxed">Busca clientes activamente mediante scraping, genera propuestas de convenios corporativos y agenda reuniones directamente en tu calendario. Trabaja con la misma energía el lunes a las 9 AM que el domingo a las 10 PM, asegurando que nunca pierdas una oportunidad de negocio.</p>
               </div>
               <div className="mt-auto pt-4 flex items-center justify-between text-sm font-medium text-indigo-400 relative z-10 border-t border-slate-800/50">
                   <span className="flex items-center">Trae ingresos <Zap className="w-3 h-3 ml-2 text-emerald-400" /></span>
                   <button onClick={() => navigateToAgentDetail('vendedor')} className="text-white bg-indigo-600 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-indigo-500">Ver más</button>
               </div>
             </div>


             <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden flex flex-col min-h-[320px]">
               <div className="flex-grow text-white">
                 <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400"><Megaphone className="w-6 h-6" /></div>
                 <h3 className="text-xl font-bold mb-2 tracking-tight">Experto en Marketing</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Crea y programa contenido estratégico para tus redes sociales y blog. Automatiza el contacto con tus clientes para fidelizarlos y activa ventas recurrentes analizando el comportamiento de compra.</p>
               </div>
               <div className="mt-auto pt-4 flex items-center justify-between text-purple-400 relative z-10 border-t border-slate-800/50">
                   <span className="text-xs">Crea contenido constante</span>
                   <button onClick={() => navigateToAgentDetail('marketing')} className="text-white bg-purple-600 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-purple-500">Ver más</button>
               </div>
             </div>


             <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-colors group relative overflow-hidden flex flex-col min-h-[320px]">
               <div className="flex-grow text-white">
                 <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400"><Wallet className="w-6 h-6" /></div>
                 <h3 className="text-xl font-bold mb-2 tracking-tight">Administrador y Finanzas</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Procesa facturas con OCR, genera reportes de rentabilidad y gestiona contratos. Mantiene tus números en orden militar y te entrega un balance claro de tu flujo de caja semanalmente.</p>
               </div>
               <div className="mt-auto pt-4 flex items-center justify-between text-emerald-400 relative z-10 border-t border-slate-800/50">
                   <span className="text-xs">Controla el flujo de caja</span>
                   <button onClick={() => navigateToAgentDetail('finanzas')} className="text-white bg-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-emerald-500 text-sm">Ver más</button>
               </div>
             </div>


             <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-pink-500/50 transition-colors group relative overflow-hidden flex flex-col min-h-[320px]">
               <div className="absolute right-0 bottom-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[120px] -mr-16 -mb-16 group-hover:bg-pink-500/20 transition-all pointer-events-none"></div>
               <div className="flex-grow text-white">
                 <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400"><MessageCircle className="w-6 h-6" /></div>
                 <h3 className="text-2xl font-bold mb-2 tracking-tight">Soporte y Atención al Cliente</h3>
                 <p className="text-slate-400 max-w-2xl mb-6 leading-relaxed">Responde consultas técnicas en menos de 5 segundos usando inteligencia entrenada con tu propia documentación (RAG). Gestiona WhatsApp, Instagram y Email unificadamente, recuperando ventas incluso de carritos abandonados.</p>
               </div>
               <div className="mt-auto pt-4 flex items-center justify-between text-pink-400 relative z-10 border-t border-slate-800/50">
                   <span className="flex items-center text-sm">Cuida a tus clientes</span>
                   <button onClick={() => navigateToAgentDetail('soporte')} className="text-white bg-pink-600 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 hover:bg-pink-500 relative z-20">Ver más</button>
               </div>
             </div>
           </div>


           <div className="text-center mt-12">
               <button onClick={() => navigateAndScroll('agents', 'agents-hero')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(79,70,229,0.4)] cursor-pointer tracking-tight">Ver en detalle cómo trabaja cada agente<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
           </div>
         </div>
       </section>


       {/* --- TESTIMONIALS SECTION --- */}
       <section id="testimonios" className="py-24 bg-slate-900/50 relative overflow-hidden text-white text-center">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 text-white">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Empresarios que recuperaron su vida</h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Ellos dejaron de apagar incendios y empezaron a escalar con SCALAR.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8 text-left">
             {[
               { name: "Cristián", corp: "Veterinaria Moga", img: "/moga.png", text: "Antes perdíamos citas por no contestar el teléfono a tiempo. Ahora la agenda se llena sola y yo me dedico 100% a los animales." },
               { name: "Patricio", corp: "Kinesiología Revit", img: "/revit.png", text: "La gestión de cobros me quitaba horas de sueño. SCALAR ordenó todo el flujo administrativo en una semana. Mi clínica funciona como un reloj suizo." },
               { name: "Oscar", corp: "Corredora Roca", img: "/roca.png", text: "En el rubro inmobiliario la velocidad es todo. Mis agentes responden a interesados en segundos, 24/7, y me dejan la reunión lista. Hemos duplicado las captaciones sin contratar más personal." }
             ].map((test, i) => (
               <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative shadow-lg">
                 <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-14 h-14 rounded-full bg-white overflow-hidden p-1"><img src={test.img} alt={test.corp} className="w-full h-full object-contain" /></div>
                   <div>
                       <h4 className="font-bold text-white text-lg tracking-tight">{test.name}</h4>
                       <p className="text-sm text-indigo-400 font-normal">{test.corp}</p>
                   </div>
                 </div>
                 <p className="text-slate-300 text-sm italic leading-relaxed">"{test.text}"</p>
               </div>
             ))}
           </div>
         </div>
       </section>


       <section id="precios" className="py-24 bg-slate-950 text-white text-center">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Planes Simples</h2>
           <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed font-medium">Arquitectura de inteligencia operativa de clase mundial, diseñada para escalar tu negocio sin contratar más personal.</p>
          
           <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all flex flex-col min-h-[550px] shadow-2xl shadow-slate-950/50">
               <h3 className="text-xl font-medium text-slate-300 mb-2">Emprendedor</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Starter</div>
               <div className="text-2xl font-bold text-indigo-400">$199 <span className="text-xs text-slate-500 font-black uppercase tracking-widest">USD/mes</span></div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed">Ideal para optimizar los flujos críticos de comunicación y visibilidad inicial.</p>
               <div className="flex-grow">
                 <ul className="space-y-4 text-sm text-left border-t border-slate-800 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Agente de Ventas Inteligente</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Soporte con Base de Datos RAG</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Contenido para Redes Sociales</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Panel Financiero Centralizado</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Onboarding de Clientes Automático</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6"><button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-black transition-all cursor-pointer">Solicitar Demo</button></div>
             </div>


             <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-slate-900 relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col min-h-[550px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">El más elegido</div>
               <h3 className="text-xl font-medium text-indigo-400 mb-2">Crecimiento</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Growth</div>
               <div className="text-2xl font-bold text-indigo-400">$399 <span className="text-xs text-slate-500 font-black uppercase tracking-widest">USD/mes</span></div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed font-medium">La fuerza laboral digital completa. Proactividad total en ventas y administración compleja.</p>
               <div className="flex-grow text-indigo-100">
                 <ul className="space-y-4 text-sm text-left border-t border-indigo-500/30 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span><strong>Todo lo del plan Starter</strong></span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Prospección Activa y Scraping de Leads</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Marketing AI de Alto Impacto (Video a Blog)</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Gestión Financiera con OCR y P&L</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Recuperación de Ventas vía WhatsApp</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6"><button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black transition-all shadow-lg cursor-pointer transform hover:scale-[1.02]">Solicitar Demo</button></div>
             </div>


             <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all flex flex-col min-h-[550px]">
               <h3 className="text-xl font-medium text-slate-300 mb-2 tracking-tight">Corporativo</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Enterprise</div>
               <div className="text-2xl font-bold text-slate-400 tracking-tight tracking-tight">Personalizado</div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed">Arquitectura personalizada e integraciones profundas con tus sistemas actuales legados.</p>
               <div className="flex-grow">
                 <ul className="space-y-4 text-sm text-left border-t border-slate-800 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Integraciones API a Medida</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Entrenamiento IA con Data Privada</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Gestión de Contratos y Firmas Legales</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Auditoría de IA Mensual y Soporte VIP</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6"><button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-black transition-all cursor-pointer">Solicitar Demo</button></div>
             </div>
           </div>
         </div>
       </section>


       {/* --- FAQ SECTION --- */}
       <section className="py-24 bg-slate-900/30 text-white text-center">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Preguntas Frecuentes</h2>
           <div className="space-y-4 text-left">
             {[
               { q: "¿Tengo que despedir a mis empleados?", a: "No necesariamente. SCALAR hace el trabajo repetitivo y aburrido (agendar, cobrar, responder lo mismo 100 veces). Esto libera a tu equipo humano para que hagan lo importante: cerrar tratos grandes y atender mejor a la gente en persona." },
               { q: "¿Es difícil de usar?", a: "Para nada. Nosotros te lo entregamos configurado y listo. Si sabes usar WhatsApp y el correo, ya sabes usar SCALAR. Además, la instalación tarda solo 5 días." },
               { q: "¿Qué pasa si mi negocio crece mucho?", a: "Esa es la magia. Si mañana te llegan 1.000 clientes, SCALAR los atiende a todos sin cansarse y sin cobrarte horas extras. Tu capacidad de atención se vuelve infinita." },
               { q: "¿Es seguro para mis datos financieros?", a: "Totalmente. Usamos seguridad de nivel bancario. El agente de finanzas solo ve lo que tú le permites, pero tú siempre tienes el control final del dinero." }
             ].map((item, index) => (
               <div key={index} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900 shadow-lg">
                 <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-6 hover:bg-slate-800/50 cursor-pointer text-left">
                   <span className="font-normal text-base tracking-tight text-slate-200">{item.q}</span>
                   {activeFaq === index ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                 </button>
                 {activeFaq === index && <div className="p-6 pt-4 text-slate-400 text-sm border-t border-slate-800/50 leading-relaxed">{item.a}</div>}
               </div>
             ))}
           </div>
         </div>
       </section>


       {/* --- FINAL CTA / CONTACT --- */}
       <section id="demo" className="py-24 relative overflow-hidden bg-slate-950 text-center">
         <div className="absolute inset-0 bg-indigo-900/20 -z-10"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
         <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">¿Listo para recuperar tu tiempo?</h2>
           <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">Agenda una demostración de 15 minutos. Te mostraremos exactamente cuánto dinero y horas te ahorrará SCALAR desde el primer mes.</p>
           <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl max-w-md mx-auto relative z-10 text-left">
             <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                 <label htmlFor="nombre" className="block text-sm font-normal text-slate-400 mb-1.5">Nombre</label>
                 <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" placeholder="Tu nombre completo" />
               </div>
               <div>
                 <label htmlFor="correo" className="block text-sm font-normal text-slate-400 mb-1.5">Correo electrónico</label>
                 <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" placeholder="nombre@empresa.com" />
               </div>
               <div>
                 <label htmlFor="telefono" className="block text-sm font-normal text-slate-400 mb-1.5">Teléfono</label>
                 <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" placeholder="+56 9 1234 5678" />
               </div>
              
               {formStatus === 'success' && (<p className="text-green-400 text-center text-sm font-bold bg-green-400/10 py-2 rounded-lg border border-green-400/20 animate-pulse">¡Solicitud enviada! Nos contactaremos pronto.</p>)}
              
               <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                 {formStatus === 'submitting' ? 'Enviando...' : 'Agendar Demo Gratis'}
               </button>
              
               <p className="text-xs text-center text-slate-500 mt-4 font-normal">Sin compromiso. Auditoría de IA incluida.</p>
             </form>
           </div>
         </div>
       </section>


       <footer className="bg-slate-950 border-t border-slate-800 py-12 text-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center tracking-tight"><img src="/logo.png" alt="Logo" className="h-8 w-auto mr-3 object-contain" /><span className="font-bold text-lg text-slate-200 uppercase tracking-widest">SCALAR</span></div>
             <div className="text-slate-500 text-xs text-center md:text-right font-medium uppercase tracking-widest"><p>&copy; {new Date().getFullYear()} Taskly IA SpA. Santiago, Chile.</p></div>
           </div>
       </footer>
   </>
 );
};




// --- COMPONENTE PRINCIPAL ---
const App = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [currentPage, setCurrentPage] = useState('home');
 const [scrollTarget, setScrollTarget] = useState(null);


 const navigateAndScroll = (page, sectionId = null) => {
   if (currentPage !== page) {
     setCurrentPage(page);
   }
  
   if (sectionId) {
     setScrollTarget(sectionId);
   }
  
   setIsMenuOpen(false);
  
   if (page === 'home' && !sectionId) {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   } else if (page !== 'home') {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   }
 };


 const NAVBAR_HEIGHT = 80;


 useEffect(() => {
   if (scrollTarget) {
     const timer = setTimeout(() => {
       const element = document.getElementById(scrollTarget);
       if (element) {
         const elementPosition = element.getBoundingClientRect().top + window.scrollY;
         const offsetPosition = elementPosition - NAVBAR_HEIGHT - 20;
         window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
       }
       setScrollTarget(null);
     }, 300);
     return () => clearTimeout(timer);
   }
 }, [scrollTarget, currentPage]);


 const starfieldStyle = {
   backgroundImage: `repeating-radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
   backgroundSize: `800px 800px`,
   backgroundAttachment: 'fixed',
 };


 return (
   <div style={starfieldStyle} className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden w-screen">
    
     {/* --- NAVBAR --- */}
     <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
         <div className="flex justify-between items-center h-20">
           {/* Logo */}
           <div className="flex items-center cursor-pointer" onClick={() => navigateAndScroll('home')} >
             <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-3 object-contain" />
             <span className="font-bold text-xl tracking-tight text-white uppercase tracking-widest">SCALAR</span>
           </div>


           {/* Menú */}
           <div className="hidden md:flex space-x-8 items-center">
             <button onClick={() => navigateAndScroll('home', 'problema')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight">El Problema</button>
             <button onClick={() => navigateAndScroll('home', 'solucion')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight">Agentes</button>
             <button onClick={() => navigateAndScroll('home', 'testimonios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight">Clientes</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight">Planes</button>
             <button onClick={() => navigateAndScroll('about')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight">Acerca de nosotros</button>
             <button onClick={() => navigateAndScroll('home', 'demo')} className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all cursor-pointer shadow-lg shadow-white/10 tracking-tight">Agendar Demo</button>
           </div>


           <div className="md:hidden text-white">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
           </div>
         </div>
       </div>


       {isMenuOpen && (
         <div className="md:hidden bg-slate-900 border-b border-slate-800 text-center">
           <div className="px-4 pt-2 pb-6 space-y-2 text-sm">
             <button onClick={() => navigateAndScroll('home', 'problema')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">El Problema</button>
             <button onClick={() => navigateAndScroll('home', 'solucion')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">Agentes</button>
             <button onClick={() => navigateAndScroll('home', 'testimonios')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">Clientes</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">Planes</button>
             <button onClick={() => navigateAndScroll('about')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">Acerca de nosotros</button>
             <button onClick={() => navigateAndScroll('home', 'demo')} className="block w-full text-center mt-6 bg-indigo-600 py-4 rounded-xl font-bold text-white shadow-lg">Agendar Demo</button>
           </div>
         </div>
       )}
     </nav>
    
     {currentPage === 'home' && <HomeContent scrollToSection={(id) => navigateAndScroll('home', id)} navigateAndScroll={navigateAndScroll} />}
     {currentPage === 'about' && <AboutUs navigateAndScroll={navigateAndScroll} />}
     {currentPage === 'agents' && <AgentsDetail navigateAndScroll={navigateAndScroll} />}


   </div>
 );
};


export default App;

