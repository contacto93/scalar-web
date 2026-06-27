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
 ArrowUpRight,
 Gift
} from 'lucide-react';

// --- DEFINICIÓN DE AGENTES REESTRUCTURADOS ---
const AGENTS = [
   {
       id: 'contenido',
       name: 'Agente de Contenido Autónomo',
       icon: PenTool,
       color: 'indigo',
       tagline: 'Presencia, autoridad y omnicanalidad orgánica.',
       img: '/agente-contenido.png',
       description: 'Se encarga de internalizar el ADN de tu negocio mediante el onboarding para diseñar, redactar y publicar campañas consistentes en tus redes sociales y blog corporativo.'
   },
   {
       id: 'omnicanal',
       name: 'Agente de Conversión y Soporte',
       icon: MessagesSquare,
       color: 'purple',
       tagline: 'Atención instantánea, citas y reputación 24/7.',
       img: '/agente-soporte.png',
       description: 'Maneja consultas complejas en tiempo real, agenda reuniones directo en tu calendario y activa estratégicamente enlaces de Google Reviews para potenciar tu marca.'
   },
   {
       id: 'email',
       name: 'Agente de Email Marketing',
       icon: Mail,
       color: 'emerald',
       tagline: 'Nutrición y monetización de tus bases de datos.',
       img: '/agente-email.png',
       description: 'Se encarga de estructurar flujos de correo inteligentes segmentando de manera automatizada tus bases de datos para fidelizar y activar compras recurrentes.'
   }
];

// --- COMPONENTE: DETALLE DE AGENTES ---
const AgentsDetail = ({ navigateAndScroll }) => {
  
   const renderAgentSection = (agentId) => {
       const agent = AGENTS.find(a => a.id === agentId);
       if (!agent) return null;
       const Icon = agent.icon;
       const textColor = `text-${agent.color}-400`;
       const borderColor = `border-${agent.color}-500/50`;
       const bgColor = `bg-${agent.color}-500/20`;

       const content = {
           contenido: {
               mision: "Escalar tu presencia digital y autoridad sin que muevas un solo dedo. Este agente absorbe toda la identidad de tu empresa: misión, servicios, ventajas competitivas y casos de éxito para diseñar campañas orgánicas paralelas y perfectamente armonizadas en múltiples canales.",
               growth: [
                   { icon: Youtube, title: "Video a Blog (Repurposing)", desc: "Transformación de videos o audios extensos en artículos estructurados de alta calidad." },
                   { icon: Layers, title: "Noticias a Contenido", desc: "Entrega links, artículos o papers relevantes; la IA los convierte en contenido multicanal." }
               ],
               standard: [
                   { icon: Share2, title: "Distribución Multicanal Sincronizada", desc: "Posteos paralelos y armónicos en Instagram, Facebook, X (Twitter) y tu Blog corporativo." },
                   { icon: Video, title: "Reels Pro de Alta Fidelidad (Avatar AI)", desc: "Videos cinematográficos semanales con tu avatar hiperrealista personalizado, ideal para alcance and anuncios." },
                   { icon: SearchCode, title: "Optimización SEO Avanzada", desc: "Estructuración de textos y metadatos para rankear orgánicamente en los buscadores principales." },
                   { icon: FileText, title: "Estrategia Semanal Cerrada", desc: "Garantiza un flujo de 3 Posts (Imagen + Copy fluido), 1 Reel premium y 1 Blog de autoridad por semana." }
               ],
               kpis: [
                   { label: "Alcance en Canales", value: "+75%", color: "text-green-400" },
                   { label: "Ahorro en Agencias", value: "100%", color: "text-emerald-400" },
                   { label: "Consistencia de Marca", value: "24/7", color: "text-indigo-400" }
               ]
           },
           omnicanal: {
               mision: "Atender a cada interesado de forma inmediata con todo el conocimiento experto de tu negocio. Olvídate de perder oportunidades por demoras; este agente responde dudas, agenda citas reales y se encarga de que tu reputación online crezca de manera automática.",
               growth: [
                   { icon: ShoppingCart, title: "Recuperación de Leads", desc: "Seguimiento proactivo a usuarios que mostraron interés pero no cerraron." },
                   { icon: Bot, title: "Soporte Técnico Avanzado (RAG)", desc: "Entrenado con tus manuales internos para solventar dudas sumamente complejas." }
               ],
               standard: [
                   { icon: MessageCircle, title: "Centralización Omnicanal", desc: "Opera en WhatsApp, Sitio Web, Instagram DMs, Facebook DMs y comentarios." },
                   { icon: Calendar, title: "Acceso y Agendamiento Real", desc: "Sincroniza con tus calendarios para separar citas sin solapamientos." },
                   { icon: Star, title: "Multiplicador Google Reviews", desc: "Detecta clientes satisfieds y les envía un link de calificación." },
                   { icon: Zap, title: "Escalabilidad Humana", desc: "Deriva fluidamente con un representante real ante casos críticos." }
               ],
               kpis: [
                   { label: "Tiempo de Respuesta", value: "< 5s", color: "text-indigo-400" },
                   { label: "Citas Agendadas", value: "x2.8", color: "text-green-400" },
                   { label: "Reseñas Positivas", value: "+60%", color: "text-pink-400" }
               ]
           },
           email: {
               mision: "Monetizar tu base de datos actual y maximizar el ciclo de vida de cada lead. Alimentado directamente por los contactos captados en tus chats, este agente estructura flujos de correo inteligentes para fidelizar y activar compras recurrentes.",
               growth: [
                   { icon: Database, title: "Segmentación Quirúrgica", desc: "Divide de forma automatizada entre Leads Fríos, Prospectos Clave y Clientes Activos." },
                   { icon: Layers, title: "Flujos Automatizados Complejos", desc: "Crea embudos según el comportamiento exacto de apertura y clicks." }
               ],
               standard: [
                   { icon: Newspaper, title: "Newsletter de Autoridad", desc: "Envío automatizado de los artículos generados por el agente de contenido." },
                   { icon: Gift, title: "Campañas de Fidelización", desc: "Saludos personalizados en cumpleaños, festividades y fechas especiales." },
                   { icon: Clock, title: "Alertas de Reactivación", desc: "Correos automáticos cuando es tiempo de que un cliente vuelva a tomar un servicio." },
                   { icon: TrendingUp, title: "Promociones de Alta Conversión", desc: "Lanzamientos segmentados orientados a la base de datos correcta." }
               ],
               kpis: [
                   { label: "Tasa de Apertura (OR)", value: "+35%", color: "text-green-400" },
                   { label: "Ventas Recurrentes", value: "+30%", color: "text-emerald-400" },
                   { label: "Retención de Clientes", value: "+45%", color: "text-blue-400" }
               ]
           }
       }[agentId];

       return (
           <div key={agentId} id={agentId} className={`p-8 md:p-12 rounded-3xl border ${borderColor} bg-slate-900 shadow-2xl shadow-slate-950/50 mt-20 relative overflow-hidden`}>
               <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-slate-800 pb-8">
                   <div className="relative group">
                       <div className={`w-40 h-40 rounded-2xl bg-slate-950 border-2 ${borderColor} overflow-hidden shadow-2xl flex items-center justify-center relative`}>
                           <img 
                             src={agent.img} 
                             alt={`Agente ${agent.name}`} 
                             className="w-full h-full object-cover object-center" 
                             onError={(e) => { e.target.style.display = 'none'; }} 
                           />
                           <div className="absolute bottom-2 right-2 bg-slate-900/90 p-2 rounded-xl border border-slate-800 shadow-lg flex items-center justify-center">
                               <Icon className={`w-5 h-5 ${textColor}`} />
                           </div>
                       </div>
                   </div>
                   <div className="text-center md:text-left">
                       <h3 className={`text-3xl md:text-5xl font-extrabold ${textColor} mb-2 tracking-tight`}>{agent.name}</h3>
                       <p className="text-xl font-medium text-slate-300">{agent.tagline}</p>
                   </div>
               </div>

               <div className="grid lg:grid-cols-3 gap-12">
                   <div className="lg:col-span-2 space-y-10">
                       <div>
                           <h4 className="text-2xl font-bold mb-4 text-white flex items-center gap-2 tracking-tight"><Target className={`w-6 h-6 ${textColor}`} /> Misión Operativa</h4>
                           <p className="text-slate-300 text-lg leading-relaxed">{content.mision}</p>
                       </div>
                       <div>
                           <h4 className={`text-xl font-bold mb-6 text-white border-l-4 ${borderColor.replace('border-', 'border-')} pl-4 tracking-tight`}>Funcionalidades Incluidas</h4>
                           <div className="grid md:grid-cols-2 gap-6">
                               {content.standard.map((feat, i) => {
                                   const FeatIcon = feat.icon;
                                   return (
                                       <div key={i} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                                           <FeatIcon className={`w-5 h-5 ${textColor} mb-2`} />
                                           <h5 className="font-bold text-white text-sm mb-1">{feat.title}</h5>
                                           <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
                                       </div>
                                   );
                               })}
                           </div>
                       </div>
                   </div>
                   <div className="space-y-8">
                       <div className={`bg-gradient-to-br from-${agent.color}-500/20 to-slate-900/50 p-6 rounded-3xl border ${borderColor} relative overflow-hidden shadow-xl`}>
                           <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Plan Growth Exclusive</div>
                           <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2 tracking-tight"><ArrowUpRight className="w-5 h-5" /> Potencia Avanzada</h4>
                           <ul className="space-y-5">
                               {content.growth.map((item, i) => {
                                   const ItemIcon = item.icon;
                                   return (
                                       <li key={i} className="flex gap-3">
                                           <div className="mt-1"><ItemIcon className={`w-5 h-5 ${textColor}`} /></div>
                                           <div><p className="text-sm font-bold text-white">{item.title}</p><p className="text-xs text-slate-400 leading-tight">{item.desc}</p></div>
                                       </li>
                                   );
                               })}
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
                   <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-medium">Nuestros agentes autónomos operan bajo el ADN absoluto de tu marca. Automatizan los flujos más complejos de captación, retención, omnipresencia y marketing directo con precisión quirúrgica.</p>
                   <a href="#contenido" onClick={(e) => { e.preventDefault(); navigateAndScroll('agents', 'contenido'); }} className="text-indigo-400 font-semibold inline-flex items-center hover:text-white transition-colors cursor-pointer">Explorar la Fuerza Digital<ArrowDown className="ml-2 w-5 h-5 animate-bounce" /></a>
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
             <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-fuchsia-700/40 shadow-2xl shadow-fuchsia-900/40 overflow-hidden relative">
               {/* CORRECCIÓN: Etiqueta img limpia para que no sea interceptada erróneamente */}
               <img src="/pablo-navarro.png" alt="Pablo Navarro" className="w-full h-full object-cover" />
             </div>
           </div>
           <div className="md:col-span-7 order-1 md:order-2">
             <h3 className="text-3xl font-bold text-fuchsia-400 mb-4 tracking-tight">Pablo Navarro: Estrategia de Contenido y Arquitectura de Sistemas IA</h3>
             <p className="text-lg text-slate-300 mb-4 leading-relaxed">
               Con una sólida trayectoria en **Operaciones Financieras de gran escala (Banco Santander)**, Pablo desarrolló una visión sistémica para estructurar flujos de datos complejos y predecibles. Esta experiencia, combinada con su trayectoria trabajando en empresas diseñando arquitecturas de IA para la generación automatizada de contenido omnicanal de alta fidelidad, le permite construir sistemas digitales autónomos que replican con precisión quirúrgica la voz, tono y objetivos comerciales de cualquier negocio.
             </p>
             <p className="text-slate-400 italic text-sm border-l-2 border-fuchsia-400 pl-4 py-1">
               "Mi enfoque es crear estructuras de IA tan robustas que una empresa pueda multiplicar su presencia digital por diez, manteniendo la consistencia de una multinacional con el costo de un software."
             </p>
           </div>
         </div>

         <div className="grid md:grid-cols-12 gap-10 items-center text-white">
           <div className="md:col-span-7">
             <h3 className="text-3xl font-bold text-violet-400 mb-4 tracking-tight">Francisco Navarro: Escalamiento Digital y Conversión de Clientes</h3>
             <p className="text-lg text-slate-300 mb-4 leading-relaxed">
               La base de Francisco en la **gestión de inversiones** le otorgó una vasta experiencia lidiando con audiencias de alta exigencia, entendiendo la psicología del consumidor y la importancia de la velocidad en el cierre comercial. Su paso por el emprendimiento y el e-commerce le dio la visión de los cuellos de botella en la conversión de leads, especializándose en el desarrollo de agentes autónomos orientados a la retención inmediata, nutrición por email y captación de clientes 24/7.
             </p>
             <p className="text-slate-400 italic text-sm border-l-2 border-violet-400 pl-4 py-1">
               "El marketing orgánico y la atención no deberían consumir el tiempo del dueño de negocio. La IA democratiza la omnipresencia: permite a cualquier PYME convertir prospectos en clientes al segundo, en piloto automático."
             </p>
           </div>
           <div className="md:col-span-5 flex justify-center text-violet-400">
             <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-violet-700/40 shadow-2xl shadow-violet-900/40 overflow-hidden relative">
               {/* CORRECCIÓN: Etiqueta img limpia para que no sea interceptada erróneamente */}
               <img src="/francisco-navarro.png" alt="Francisco Navarro" className="w-full h-full object-cover" />
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

 const homeAgentsData = [
   {
       id: 'contenido',
       title: "Agentes de Contenido",
       description: "Diseñan, redactan y ejecutan paralelamente campañas orgánicas de autoridad o promoción en Meta (FB, IG), X y Blog corporativo. Tu marca activa y armónica en piloto automático.",
       img: "/agente-contenido.png",
       badge: "3 Posts + 1 Reel + 1 Blog / sem",
       icon: <PenTool className="w-5 h-5 text-indigo-400" />,
       position: "object-top" /* <-- CORRECCIÓN: Enfoca la parte superior de la imagen para que no se corte la cabeza */
   },
   {
       id: 'omnicanal',
       title: "Conversión y Soporte",
       description: "Un chatbot omnicanal experto que opera en WhatsApp, Web y DMs. Resuelve dudas, tiene acceso a tu agenda corporativa para concertar citas e impulsa tu reputación mediante enlaces inteligentes a Google Reviews.",
       img: "/agente-soporte.png",
       badge: "Atención 24/7 y Reputación",
       icon: <MessagesSquare className="w-5 h-5 text-purple-400" />,
       position: "object-[center_22%]" /* <-- CORRECCIÓN: Ajuste de posición preciso para que encuadre perfectamente abajo */
   },
   {
       id: 'email',
       title: "Email Marketing IA",
       description: "Alimenta de forma dinámica tus listas de contactos desde el chatbot. Redacta y envía flujos hiper-personalizados segmentados quirúrgicamente entre prospectos y clientes recurrentes para maximizar tus ventas.",
       img: "/agente-email.png",
       badge: "Nutrición de Leads y Recompra",
       icon: <Mail className="w-5 h-5 text-emerald-400" />,
       position: "object-center"
   }
 ];

 return (
   <>
     {/* --- HERO SECTION --- */}
     <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden md:h-screen flex items-center">
         <div className="absolute inset-0 z-0">
           <img src="/agente-bg.png" alt="Agente IA" className="w-full h-full object-cover opacity-75" style={{ objectPosition: 'center top' }} />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm tracking-wide">
             <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>Fuerza Laboral Digital Autónoma
           </div>
           
           <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">
             Tus Redes, Canales y Marketing<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-200 to-cyan-200 animate-gradient">Operando al 100% en Piloto Automático.</span>
           </h1>
           
           <p className="max-w-4xl mx-auto text-base md:text-xl text-slate-100 mb-10 leading-relaxed drop-shadow-lg font-medium opacity-90">
             Conecta mediante <span className="text-white font-bold text-shadow-glow">Meta Login</span>, completa tu onboarding en 5 minutos y despliega agentes autónomos de IA que internalizan el <strong>ADN de tu empresa</strong>. Deja que nuestra tecnología redacte tu contenido, publique <strong>Reels cinematográficos semanales con tu avatar</strong>, atienda tus DMs 24/7, agende citas y dispare tus reseñas en Google Reviews de forma autónoma.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button onClick={() => scrollToSection('demo')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] border border-indigo-400/20 cursor-pointer tracking-tight border-none">Solicitar Demostración<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
             <button onClick={() => navigateAndScroll('about')} className="px-8 py-4 rounded-xl font-semibold text-white hover:text-cyan-200 border border-white/20 hover:border-cyan-400/50 transition-all bg-white/5 backdrop-blur-md cursor-pointer text-lg tracking-tight">Conocer al Equipo</button>
           </div>

           <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-white/90 backdrop-blur-md inline-flex px-10 py-5 items-center rounded-3xl bg-slate-900/40 border border-white/5 mx-auto">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-cyan-400" />
               <span className="text-sm font-medium leading-none">Onboarding guiado inteligente</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-cyan-400" />
               <span className="text-sm font-medium leading-none">Conexión oficial vía Meta Login</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-cyan-400" />
               <span className="text-sm font-medium leading-none">Omnipresencia de marca instantánea</span>
             </div>
           </div>
         </div>
     </section>

       {/* --- SECCIÓN EL PROBLEMA --- */}
       <section id="problema" className="py-24 bg-slate-900/50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">¿Tu negocio sufre por <span className="text-red-400 font-extrabold">falta de consistencia y atención</span>?</h2>
               <p className="text-slate-400 text-lg mb-6 leading-relaxed">Mantener activas las redes, atender prospectos al segundo y nutrir tus contactos exige un tiempo que no tienes o agencias costosas que no dan resultados.</p>
               <ul className="space-y-4">
                 {["Pierdes clientes potenciales por demoras en DMs o WhatsApp.", "Tus canales de Meta se ven inactivos por falta de tiempo para crear contenido.", "Las bases de datos se enfrían sin un marketing por email constante.", "El costo de un equipo humano o agencias consume tu margen comercial."].map((item, i) => (
                   <li key={i} className="flex items-start text-base"><X className="w-4 h-4 text-red-500 mr-3 mt-1" /><span className="text-slate-300 font-medium">{item}</span></li>
                 ))}
               </ul>
             </div>
             <div className="relative">
               <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><Clock className="w-32 h-32" /></div>
                 <h3 className="text-xl font-bold mb-2 tracking-tight">Tu Estado Actual</h3>
                 <p className="text-slate-400 mb-6">Inconsistencia digital y fugas de leads.</p>
                 <div className="h-2 bg-slate-800 rounded-full mb-4 overflow-hidden"><div className="h-full bg-red-500 w-[85%]"></div></div>
                 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Fugas comerciales: Crítico</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* --- SECCIÓN NUEVO EQUIPO DIGITAL (SOLUCIÓN CORREGIDA) --- */}
       <section id="solucion" className="py-24 bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 text-white">
             <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Tu Nueva Fuerza Digital</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">Despliega agentes especializados autónomos entrenados exclusivamente con las ventajas competitivas y casos de éxito de tu negocio.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {homeAgentsData.map((agent) => (
               <div key={agent.id} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col min-h-[460px]">
                 
                 {/* Contenedor de la Imagen Superior con Icono Flotante */}
                 <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 bg-slate-950">
                   <img 
                     src={agent.img}
                     alt={agent.title}
                     className={`w-full h-full object-cover ${agent.position} transition-transform duration-500 group-hover:scale-105`}
                     onError={(e) => { e.target.style.display = 'none'; }}
                   />
                   
                   {/* Símbolo/Icono flotando abajo a la derecha de la foto */}
                   <div className="absolute bottom-3 right-3 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 shadow-lg flex items-center justify-center">
                     {agent.icon}
                   </div>
                 </div>

                 {/* Bloque de Textos */}
                 <div className="flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                     {agent.title}
                   </h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     {agent.description}
                   </p>
                 </div>

                 {/* Fila Inferior con Insignia y Botón de Navegación */}
                 <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-800/60">
                   <span className="text-xs font-medium text-slate-300">
                     {agent.badge}
                   </span>
                   <button 
                     onClick={() => navigateToAgentDetail(agent.id)} 
                     className="text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/10 cursor-pointer border-none"
                   >
                     Ver más
                   </button>
                 </div>

               </div>
             ))}
           </div>

           <div className="text-center mt-12">
               <button onClick={() => navigateAndScroll('agents', 'agents-hero')} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(79,70,229,0.4)] cursor-pointer tracking-tight border-none">Ver en detalle cómo trabaja cada agente<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
           </div>
         </div>
       </section>

       {/* --- SECCIÓN PLANES / PRECIOS --- */}
       <section id="precios" className="py-24 bg-slate-950 text-white text-center">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Planes Simples y Transparentes</h2>
           <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed font-medium">Arquitectura operativa automatizada de nivel B2B diseñada para robustecer tu visibilidad y atención digital.</p>
          
           <div className="grid md:grid-cols-3 gap-8">
             {/* PLAN STARTER */}
             <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all flex flex-col min-h-[550px] shadow-2xl shadow-slate-950/50">
               <h3 className="text-xl font-medium text-slate-300 mb-2">Emprendedor</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Starter</div>
               <div className="text-2xl font-bold text-indigo-400">$150 <span className="text-xs text-slate-500 font-black uppercase tracking-widest">USD/mes</span></div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed">Perfecto para asegurar la omnipresencia orgánica y la conversión automatizada de tus canales.</p>
               <div className="flex-grow">
                 <ul className="space-y-4 text-sm text-left border-t border-slate-800 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span><strong>Servicio 1:</strong> Agente de Contenido Autónomo</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Pauta Semanal (3 Posts + 1 Reel + 1 Blog)</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span><strong>Servicio 2:</strong> Conversión y Soporte Omnicanal 24/7</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Sincronización de Agenda y Calendarios</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" /> <span>Disparador Orgánico de Google Reviews</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6"><button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-black transition-all cursor-pointer bg-transparent">Solicitar Demo</button></div>
             </div>

             {/* PLAN GROWTH */}
             <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-slate-900 relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col min-h-[550px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">El más elegido</div>
               <h3 className="text-xl font-medium text-indigo-400 mb-2">Crecimiento</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Growth</div>
               <div className="text-2xl font-bold text-indigo-400">$200 <span className="text-xs text-slate-500 font-black uppercase tracking-widest">USD/mes</span></div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed font-medium">La suite laboral digital al completo. Omnicanalidad avanzada y monetización de bases de datos por correo.</p>
               <div className="flex-grow text-indigo-100">
                 <ul className="space-y-4 text-sm text-left border-t border-indigo-500/30 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span><strong>Todo lo incluido en el plan Starter</strong></span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span><strong>Servicio 3:</strong> Agente de Email Marketing Inteligente</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Segmentación Automatizada de Bases CRM</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Campañas de Recompra y Nutrición de Leads</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span>Soporte Técnico Advanced con Base RAG</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6"><button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black transition-all shadow-lg cursor-pointer transform hover:scale-[1.02] border-none">Solicitar Demo</button></div>
             </div>

             {/* ENTERPRISE */}
             <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all flex flex-col min-h-[550px]">
               <h3 className="text-xl font-medium text-slate-300 mb-2 tracking-tight">Corporativo</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Enterprise</div>
               <div className="text-2xl font-bold text-slate-400 tracking-tight">Personalizado</div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed">Arquitectura a medida e integraciones sumamente profundas con tus sistemas y CRMs legados de la empresa.</p>
               <div className="flex-grow">
                 <ul className="space-y-4 text-sm text-left border-t border-slate-800 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Integraciones API Privadas</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Entrenamiento de IA con Data Interna</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Modelos de Lenguaje Dedicados</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" /> <span>Auditoría de IA Mensual y Soporte VIP</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6"><button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-black transition-all cursor-pointer bg-transparent">Solicitar Demo</button></div>
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
               { q: "¿Cómo se conecta SCALAR a mis redes sociales?", a: "Es 100% seguro. Durante el ingreso a la plataforma realizas el inicio de sesión oficial con Meta Login para otorgarnos los tokens autorizados. Nosotros nunca vemos ni guardamos tus contraseñas." },
               { q: "¿Qué información necesita el onboarding?", a: "Te guiaremos mediante un formulario inteligente donde nuestro agente asimilará el rubro, nombre, servicios, misión, ventajas comparativas y los casos de éxito de tu empresa para redactar y contestar de manera exacta." },
               { q: "¿Qué pasa si un cliente hace una pregunta que el Agente no sabe?", a: "Nuestra IA de conversión y soporte cuenta con un protocolo de escalabilidad humana. Si detecta una consulta sumamente específica o que requiere criterio comercial humano, derivará el caso de inmediato a un representante real." },
               { q: "¿El contenido que publican los agentes requiere mi aprobación?", a: "Nuestros agentes autónomos están estructurados bajo flujos predecibles y de alta autoridad. Sin embargo, en el panel central de Scalar siempre tendrás la visibilidad completa de las pautas programadas de manera semanal." }
             ].map((item, index) => (
               <div key={index} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900 shadow-lg">
                 <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-6 hover:bg-slate-800/50 cursor-pointer text-left bg-transparent border-none">
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
           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">¿Listo para activar tu Fuerza Digital?</h2>
           <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">Agenda una demostración de 15 minutos. Te mostraremos exactamente cómo trabaja nuestro onboarding inteligente y cómo operará tu marca.</p>
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
              
               <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed border-none">
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
    
     {/* --- NAVBAR COMPLETAMENTE TRANSPARENTE E INTEGRADO --- */}
     <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
         <div className="flex justify-between items-center h-20">
           {/* Logo */}
           <div className="flex items-center cursor-pointer" onClick={() => navigateAndScroll('home')} >
             <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-3 object-contain" />
             <span className="font-bold text-xl tracking-tight text-white uppercase tracking-widest">SCALAR</span>
           </div>

           {/* Menú Escritorio */}
           <div className="hidden md:flex space-x-6 items-center">
             <button onClick={() => navigateAndScroll('home', 'problema')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none shadow-none p-0 m-0 outline-none focus:outline-none">El Problema</button>
             <button onClick={() => navigateAndScroll('home', 'solucion')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none shadow-none p-0 m-0 outline-none focus:outline-none">Agentes</button>
             <button onClick={() => navigateAndScroll('home', 'testimonios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none shadow-none p-0 m-0 outline-none focus:outline-none">Clientes</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none shadow-none p-0 m-0 outline-none focus:outline-none">Planes</button>
             <button onClick={() => navigateAndScroll('about')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none shadow-none p-0 m-0 outline-none focus:outline-none">Acerca de nosotros</button>
             
             {/* Enlaces Legales Estáticos */}
             <a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-tight">Privacidad</a>
             <a href="/terminos.html" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-tight">Términos</a>
             
             <button onClick={() => navigateAndScroll('home', 'demo')} className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all cursor-pointer shadow-lg shadow-white/10 tracking-tight border-none">Agendar Demo</button>
           </div>

           <div className="md:hidden text-white">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-transparent border-none shadow-none">{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
           </div>
         </div>
       </div>

       {/* Menú Móvil */}
       {isMenuOpen && (
         <div className="md:hidden bg-slate-900 border-b border-slate-800 text-center">
           <div className="px-4 pt-2 pb-6 space-y-2 text-sm">
             <button onClick={() => navigateAndScroll('home', 'problema')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">El Problema</button>
             <button onClick={() => navigateAndScroll('home', 'solucion')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Agentes</button>
             <button onClick={() => navigateAndScroll('home', 'testimonios')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Clientes</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Planes</button>
             <button onClick={() => navigateAndScroll('about')} className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Acerca de nosotros</button>
             
             {/* Enlaces Legales */}
             <a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">Política de Privacidad</a>
             <a href="/terminos.html" target="_blank" rel="noopener noreferrer" className="block w-full text-left py-4 text-slate-300 border-b border-slate-800 font-medium">Términos del Servicio</a>
             
             <button onClick={() => navigateAndScroll('home', 'demo')} className="block w-full text-center mt-6 bg-indigo-600 py-4 rounded-xl font-bold text-white shadow-lg border-none">Agendar Demo</button>
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