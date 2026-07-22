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
 Gift,
 Check,
 PlayCircle,
 SlidersHorizontal
} from 'lucide-react';

// --- IMPORTACIÓN DE IMÁGENES COMO MÓDULOS ---
import agenteContenidoImg from '/agente-contenido.png';
import agenteSoporteImg from '/agente-soporte.png';
import agenteEmailImg from '/agente-email.png';
import pabloNavarroImg from '/pablo-navarro.png';
import franciscoNavarroImg from '/francisco-navarro.png';
import mogaImg from '/moga.png';
import revitImg from '/revit.png';
import rocaImg from '/roca.png';

// --- DEFINICIÓN DE AGENTES ---
const AGENTS = [
   {
       id: 'contenido',
       name: 'Agente de Contenido Autónomo',
       icon: PenTool,
       color: 'indigo',
       tagline: 'Presencia, autoridad y aprobación previa en 1 clic.',
       img: agenteContenidoImg,
       description: 'Diseña, redacta y programa campañas orgánicas para tus redes y blog. Revisa las propuestas en tu panel central y apruébalas con un solo clic antes de su publicación.'
   },
   {
       id: 'omnicanal',
       name: 'Agente de Conversión y Soporte',
       icon: MessagesSquare,
       color: 'purple',
       tagline: 'Atención instantánea, agendamiento y reputación 24/7.',
       img: agenteSoporteImg,
       description: 'Responde consultas complejas en tiempo real en WhatsApp, Web y DMs, agenda citas directo en tu calendario y activa enlaces de Google Reviews automáticamente.'
   },
   {
       id: 'email',
       name: 'Agente de Email Marketing',
       icon: Mail,
       color: 'emerald',
       tagline: 'Nutrición y monetización autónoma de clientes.',
       img: agenteEmailImg,
       description: 'Segmenta automáticamente tus contactos captados y envía secuencias inteligentes por correo para reactivar clientes y multiplicar tus ventas recurrentes.'
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

       const content = {
           contenido: {
               mision: "Escalar tu presencia digital sin perder el control. Este agente absorbe la voz de tu marca para redactar pautas semanales. Tú solo revisas el contenido en tu panel y lo apruebas en un clic.",
               growth: [
                   { icon: Youtube, title: "Video a Blog (Repurposing)", desc: "Transformación de videos o audios extensos en artículos estructurados de alta calidad." },
                   { icon: Layers, title: "Noticias a Contenido", desc: "Entrega links o artículos relevantes; la IA los convierte en contenido multicanal." }
               ],
               standard: [
                   { icon: CheckSquare, title: "Panel de Aprobación Previa", desc: "Revisa, edita o aprueba las publicaciones programadas antes de que salgan a la luz." },
                   { icon: Share2, title: "Distribución Multicanal", desc: "Posteos sincronizados en Instagram, Facebook, X (Twitter) y Blog corporativo." },
                   { icon: Video, title: "Reels con Avatar IA", desc: "Videos cinematográficos semanales adaptados a tu audiencia para aumentar tu alcance." },
                   { icon: SearchCode, title: "Optimización SEO", desc: "Estructuración de textos y metadatos para posicionar orgánicamente en buscadores." }
               ],
               kpis: [
                   { label: "Tiempo guardado semanal", value: "12 hrs", color: "text-green-400" },
                   { label: "Ahorro en Agencias", value: "80%", color: "text-emerald-400" },
                   { label: "Consistencia de Marca", value: "100%", color: "text-indigo-400" }
               ]
           },
           omnicanal: {
               mision: "Atender a cada prospecto de forma inmediata con el conocimiento experto de tu negocio. Responde dudas, sincroniza agendas en tiempo real y aumenta tus calificaciones en Google sin intervención humana.",
               growth: [
                   { icon: ShoppingCart, title: "Recuperación de Leads", desc: "Seguimiento proactivo a usuarios que mostraron interés pero no cerraron." },
                   { icon: Bot, title: "Soporte Técnico Avanzado (RAG)", desc: "Entrenado con tus manuales internos para solventar dudas complejas." }
               ],
               standard: [
                   { icon: MessageCircle, title: "Atención Centralizada", desc: "Opera en WhatsApp, Web, Instagram DMs, Facebook DMs y comentarios." },
                   { icon: Calendar, title: "Agendamiento Real", desc: "Sincroniza con tus calendarios para agendar citas sin solapamientos." },
                   { icon: Star, title: "Multiplicador de Reseñas", desc: "Detecta clientes satisfechos y les envía un link de calificación en Google." },
                   { icon: Zap, title: "Escalabilidad Humana", desc: "Deriva automáticamente a un representante real ante casos críticos." }
               ],
               kpis: [
                   { label: "Tiempo de Respuesta", value: "< 5s", color: "text-indigo-400" },
                   { label: "Citas Agendadas", value: "x2.8", color: "text-green-400" },
                   { label: "Reseñas Positivas", value: "+60%", color: "text-pink-400" }
               ]
           },
           email: {
               mision: "Monetizar tu base de datos actual y maximizar el ciclo de vida de cada lead. Se alimenta de los contactos captados por el chatbot para enviar flujos hiper-personalizados de fidelización.",
               growth: [
                   { icon: Database, title: "Segmentación Quirúrgica", desc: "Divide de forma automatizada entre Leads Fríos, Prospectos y Clientes Activos." },
                   { icon: Layers, title: "Flujos Automatizados Complejos", desc: "Crea embudos según el comportamiento exacto de apertura y clics." }
               ],
               standard: [
                   { icon: Newspaper, title: "Newsletter Automatizado", desc: "Envío continuo de los artículos generados por el agente de contenido." },
                   { icon: Gift, title: "Campañas de Fidelización", desc: "Mensajes personalizados en fechas especiales y cumpleaños." },
                   { icon: Clock, title: "Alertas de Reactivación", desc: "Correos automáticos cuando un cliente debe renovar o volver a comprar." },
                   { icon: TrendingUp, title: "Promociones de Alta Conversión", desc: "Lanzamientos segmentados orientados a la lista correcta." }
               ],
               kpis: [
                   { label: "Tasa de Apertura", value: "+35%", color: "text-green-400" },
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
                           <img src={agent.img} alt={`Agente ${agent.name}`} className="w-full h-full object-cover object-center" onError={(e) => { e.target.style.display = 'none'; }} />
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
                           <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Plan Growth</div>
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
       <section className="bg-transparent min-h-screen pt-20">
           <div id="agents-hero" className="pt-20 pb-16 bg-slate-900/50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                   <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">Arquitectura Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-500">Autónoma.</span></h1>
                   <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 font-medium">Tres agentes especializados diseñados para asumir la carga operativa de tu marketing, atención al cliente y fidelización.</p>
               </div>
           </div>
           <div className="pb-24">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                   {AGENTS.map(agent => renderAgentSection(agent.id))}
                   <div className="text-center pt-8">
                       <button onClick={() => navigateAndScroll('home')} className="group bg-white text-slate-950 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto hover:bg-indigo-50 transform hover:scale-105 shadow-lg cursor-pointer tracking-tight">Volver a la Página Principal<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
                   </div>
               </div>
           </div>
       </section>
   );
};

// --- COMPONENTE: ACERCA DE NOSOTROS ---
const AboutUs = ({ navigateAndScroll }) => (
 <section className="pt-32 pb-32 bg-transparent">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-16 text-white">
       <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Nuestra Experiencia, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-violet-400">Su Éxito.</span></h1>
       <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">SCALAR nació para eliminar el cuello de botella operativo del emprendedor.</p>
     </div>

     <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
       <div className="space-y-16">
         <div className="grid md:grid-cols-12 gap-10 items-center text-white">
           <div className="md:col-span-5 flex justify-center order-2 md:order-1">
             <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-fuchsia-700/40 shadow-2xl overflow-hidden relative">
               <img src={pabloNavarroImg} alt="Pablo Navarro" className="w-full h-full object-cover" />
             </div>
           </div>
           <div className="md:col-span-7 order-1 md:order-2">
             <h3 className="text-3xl font-bold text-fuchsia-400 mb-4 tracking-tight">Pablo Navarro: Sistemas de IA y Contenido</h3>
             <p className="text-lg text-slate-300 mb-4 leading-relaxed">
               Con trayectoria en Operaciones Financieras y desarrollo de arquitecturas de IA para generación automatizada de contenido, Pablo lidera el diseño técnico de sistemas que replican el tono y la visión de marca con exactitud.
             </p>
           </div>
         </div>

         <div className="grid md:grid-cols-12 gap-10 items-center text-white">
           <div className="md:col-span-7">
             <h3 className="text-3xl font-bold text-violet-400 mb-4 tracking-tight">Francisco Navarro: Conversión y Escalamiento</h3>
             <p className="text-lg text-slate-300 mb-4 leading-relaxed">
               Especializado en gestión de inversiones y estrategias de aceleración comercial. Su enfoque está centrado en eliminar fugas de prospectos y crear flujos inmediatos de respuesta y conversión.
             </p>
           </div>
           <div className="md:col-span-5 flex justify-center text-violet-400">
             <div className="w-full max-w-sm h-80 rounded-2xl bg-slate-800 flex items-center justify-center border-4 border-violet-700/40 shadow-2xl overflow-hidden relative">
               <img src={franciscoNavarroImg} alt="Francisco Navarro" className="w-full h-full object-cover" />
             </div>
           </div>
         </div>
       </div>

       <div className="text-center mt-12">
           <button onClick={() => navigateAndScroll('home')} className="group bg-white text-slate-950 px-8 py-3 rounded-full font-bold text-lg transition-all flex items-center justify-center mx-auto hover:bg-indigo-50 transform hover:scale-105 shadow-lg cursor-pointer tracking-tight">Volver al Inicio<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
       </div>
     </div>
   </div>
 </section>
);

// --- COMPONENTE: CONTENIDO PRINCIPAL (HOME) ---
const HomeContent = ({ scrollToSection, navigateAndScroll }) => {
 const [activeFaq, setActiveFaq] = useState(null);
 const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

 const navigateToAgentDetail = (agentId) => navigateAndScroll('agents', agentId);

 const homeAgentsData = [
   {
       id: 'contenido',
       title: "Agente de Contenido",
       description: "Crea y programa automáticamente pautas de contenido para Meta, X y tu Blog. Revisa y aprueba todo el material programado desde tu panel central con un solo clic.",
       img: "/agente-contenido.png",
       badge: "Aprobación en 1 Clic • 3 Posts + 1 Reel + 1 Blog",
       icon: <PenTool className="w-5 h-5 text-indigo-400" />,
       position: "object-top"
   },
   {
       id: 'omnicanal',
       title: "Conversión y Soporte",
       description: "Un chatbot omnicanal en WhatsApp, Web y DMs. Resuelve consultas complejas, agenda citas en tu calendario y activa solicitudes automáticas a Google Reviews.",
       img: "/agente-soporte.png",
       badge: "Respuesta en <5s • Agendamiento Directo",
       icon: <MessagesSquare className="w-5 h-5 text-purple-400" />,
       position: "object-[center_22%]"
   },
   {
       id: 'email',
       title: "Email Marketing IA",
       description: "Captura automáticamente los contactos de tu chatbot y los convierte en compradores recurrentes mediante flujos automatizados de email hiper-personalizados.",
       img: "/agente-email.png",
       badge: "Segmentación CRM • Recompra Autónoma",
       icon: <Mail className="w-5 h-5 text-emerald-400" />,
       position: "object-center"
   }
 ];

 const testimonials = [
   { 
     name: "Cristián", 
     corp: "Veterinaria Moga", 
     img: mogaImg, 
     text: "Antes perdíamos citas por no contestar el teléfono a tiempo. Ahora la agenda se llena sola y yo me dedico 100% a los animales." 
   },
   { 
     name: "Patricio", 
     corp: "Kinesiología Revit", 
     img: revitImg, 
     text: "Teníamos fugas de leads en DMs de Instagram y WhatsApp. SCALAR centralizó la atención en segundos y disparó nuestras reseñas positivas en Google." 
   },
   { 
     name: "Oscar", 
     corp: "Corredora Roca", 
     img: rocaImg, 
     text: "En el rubro inmobiliario la velocidad es todo. Mis agentes responden en segundos, 24/7, y me dejan la reunión agendada. Duplicamos captaciones." 
   }
 ];

 return (
   <>
     {/* --- HERO SECTION --- */}
     <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden min-h-[90vh] flex items-center">
         <div className="absolute inset-0 z-0">
           <img src="/agente-bg.png" alt="Agente IA" className="w-full h-full object-cover opacity-65" style={{ objectPosition: 'center top' }} />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold mb-8 animate-fade-in-up backdrop-blur-md tracking-wide">
             <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2.5 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
             SaaS de Autogestión • Control Total de Tu Marca
           </div>
           
           <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">
             Delega tu Marketing a la IA.<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300">Tú Solo Apruebas con Un Clic.</span>
           </h1>
           
           <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-200 mb-10 leading-relaxed drop-shadow-lg font-normal opacity-90">
             Conecta tus redes sociales vía <strong>Meta Login</strong>, configura el ADN de tu negocio en 5 minutos y deja que nuestros agentes autónomos redacten tu contenido, atiendan tus canales 24/7 y reactiven a tus clientes. <strong>Tú mantienes la supervisión final de cada publicación.</strong>
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
             <button onClick={() => scrollToSection('precios')} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.4)] border border-indigo-400/20 cursor-pointer tracking-tight border-none transform hover:scale-[1.02]">
               Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" />
             </button>
             <button onClick={() => scrollToSection('como-funciona')} className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 transition-all bg-slate-900/60 backdrop-blur-md cursor-pointer text-base">
               Ver Cómo Funciona
             </button>
           </div>

           <p className="text-xs text-slate-400 mt-4 font-medium">Configuración autónoma en 5 minutos • Sin contratos obligatorios</p>

           <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-300 backdrop-blur-md inline-flex px-8 py-4 items-center rounded-2xl bg-slate-900/50 border border-white/5 mx-auto text-xs md:text-sm">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-4 h-4 text-cyan-400" />
               <span>Panel de Aprobación Previa</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-4 h-4 text-cyan-400" />
               <span>Conexión Segura Meta Login</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-4 h-4 text-cyan-400" />
               <span>Atención & Conversión 24/7</span>
             </div>
           </div>
         </div>
     </section>

       {/* --- SECCIÓN: ANTES VS. DESPUÉS (TRANSFORMACIÓN) --- */}
       <section id="comparativa" className="py-24 bg-slate-950 border-t border-slate-800/80">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">El Cambio Operativo que Tu Negocio Necesita</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">Compara el modelo tradicional manual frente a la velocidad y autonomía de SCALAR.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8 items-stretch">
             {/* Lado Tradicional */}
             <div className="bg-slate-900/40 rounded-3xl p-8 border border-red-500/20 shadow-xl flex flex-col justify-between">
               <div>
                 <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                   <h3 className="text-xl font-bold text-red-400">El Método Tradicional ❌</h3>
                   <span className="text-xs font-semibold bg-red-500/10 text-red-400 px-3 py-1 rounded-full border border-red-500/20">Lento y Costoso</span>
                 </div>
                 <ul className="space-y-4 text-slate-300 text-sm">
                   <li className="flex items-start gap-3">
                     <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <span><strong>Horas perdidas:</strong> Creando copies, diseños e ideas de contenido todas las semanas.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <span><strong>Agencias caras:</strong> Gastos de $800–$1,500 USD/mes sin garantía de entregas a tiempo.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <span><strong>Fugas comerciales:</strong> DMs y mensajes de WhatsApp sin responder durante horas.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <span><strong>Bases frías:</strong> Correos de clientes guardados que jamás vuelven a recibir una oferta.</span>
                   </li>
                 </ul>
               </div>
             </div>

             {/* Lado SCALAR */}
             <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 rounded-3xl p-8 border border-indigo-500/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Recomendado</div>
               <div>
                 <div className="flex items-center justify-between mb-6 border-b border-indigo-500/30 pb-4">
                   <h3 className="text-xl font-bold text-indigo-300">La Era SCALAR ⚡</h3>
                   <span className="text-xs font-semibold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30">100% Autónomo</span>
                 </div>
                 <ul className="space-y-4 text-slate-200 text-sm">
                   <li className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                     <span><strong>Aprobación en 1 Clic:</strong> La IA propone la pauta semanal y tú solo das el visto bueno.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                     <span><strong>Costo Eficiente:</strong> Toda la suite de agentes operando desde $150 USD/mes.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                     <span><strong>Respuestas en &lt; 5 segundos:</strong> Atención omnicanal 24/7 y agendamiento automático.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                     <span><strong>Monetización continua:</strong> Email marketing inteligente enfocado en recompras.</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* --- SECCIÓN: CÓMO FUNCIONA EN 3 PASOS --- */}
       <section id="como-funciona" className="py-24 bg-slate-900/50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Cómo Funciona SCALAR</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">Tres pasos simples para activar tu fuerza digital sin complicaciones técnicas.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative">
               <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 font-extrabold text-xl flex items-center justify-center mb-6 border border-indigo-500/30">1</div>
               <h3 className="text-xl font-bold text-white mb-3">Conecta tus Canales</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Inicia sesión de forma segura a través de Meta Login. Otorga los permisos sin compartir tus contraseñas privadas.</p>
             </div>

             <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative">
               <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 font-extrabold text-xl flex items-center justify-center mb-6 border border-indigo-500/30">2</div>
               <h3 className="text-xl font-bold text-white mb-3">Onboarding de 5 Minutos</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Completa el formulario inteligente con la información de tus servicios, propuesta de valor y tono de marca.</p>
             </div>

             <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative">
               <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 font-extrabold text-xl flex items-center justify-center mb-6 border border-indigo-500/30">3</div>
               <h3 className="text-xl font-bold text-white mb-3">Aprueba y Automatiza</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Revisa las pautas generadas en tu panel, aprueba en 1 clic y deja que tus agentes gestionen publicaciones, chats y correos.</p>
             </div>
           </div>
         </div>
       </section>

       {/* --- SECCIÓN: FUNCIONALIDADES (LOS AGENTES) --- */}
       <section id="solucion" className="py-24 bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 text-white">
             <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Agentes Autónomos Especializados</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto">Selecciona la fuerza digital ajustada a los requerimientos de tu empresa.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {homeAgentsData.map((agent) => (
               <div key={agent.id} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col min-h-[460px]">
                 <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 bg-slate-950">
                   <img src={agent.img} alt={agent.title} className={`w-full h-full object-cover ${agent.position} transition-transform duration-500 group-hover:scale-105`} onError={(e) => { e.target.style.display = 'none'; }} />
                   <div className="absolute bottom-3 right-3 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 shadow-lg flex items-center justify-center">
                     {agent.icon}
                   </div>
                 </div>

                 <div className="flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{agent.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-6">{agent.description}</p>
                 </div>

                 <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-800/60">
                   <span className="text-xs font-medium text-slate-300">{agent.badge}</span>
                   <button onClick={() => navigateToAgentDetail(agent.id)} className="text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer border-none">
                     Ver detalles
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* --- SECCIÓN PRECIOS (SELF-CHECKOUT) --- */}
       <section id="precios" className="py-24 bg-slate-900/50 text-white text-center border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Planes Transparentes</h2>
           <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed font-medium">Comienza hoy mismo sin contratos de permanencia. Cancela cuando quieras.</p>
          
           <div className="grid md:grid-cols-3 gap-8 text-left">
             {/* PLAN STARTER */}
             <div className="p-8 rounded-3xl border border-slate-800 bg-slate-950 hover:bg-slate-900/80 transition-all flex flex-col min-h-[520px] shadow-2xl">
               <h3 className="text-xl font-medium text-slate-300 mb-2">Emprendedor</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Starter</div>
               <div className="text-3xl font-bold text-indigo-400">$150 <span className="text-xs text-slate-500 font-black uppercase tracking-widest">USD/mes</span></div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed">Presencia continua con aprobación de contenidos y atención omnicanal 24/7.</p>
               <div className="flex-grow">
                 <ul className="space-y-4 text-sm border-t border-slate-800 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> <span><strong>Agente de Contenido:</strong> Pauta semanal con aprobación en 1 clic</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> <span><strong>Atención Omnicanal 24/7:</strong> WhatsApp, Web e Instagram</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> <span>Sincronización de Agenda y Calendarios</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> <span>Disparador Orgánico de Google Reviews</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6">
                 <button onClick={() => alert('Redirigiendo a la página de registro/pago...')} className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all cursor-pointer border-none text-center block">
                   Comenzar con Starter
                 </button>
               </div>
             </div>

             {/* PLAN GROWTH */}
             <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-slate-950 relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(79,70,229,0.2)] flex flex-col min-h-[520px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">El más elegido</div>
               <h3 className="text-xl font-medium text-indigo-400 mb-2">Crecimiento</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Growth</div>
               <div className="text-3xl font-bold text-indigo-400">$200 <span className="text-xs text-slate-500 font-black uppercase tracking-widest">USD/mes</span></div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed font-medium">La suite completa. Omnicanalidad avanzada y monetización por email.</p>
               <div className="flex-grow text-indigo-100">
                 <ul className="space-y-4 text-sm border-t border-indigo-500/30 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> <span><strong>Todo lo incluido en Plan Starter</strong></span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> <span><strong>Agente de Email Marketing Inteligente</strong></span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> <span>Segmentación Automatizada CRM</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> <span>Soporte Técnico Avanzado con Base RAG</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6">
                 <button onClick={() => alert('Redirigiendo a la página de registro/pago...')} className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all shadow-lg cursor-pointer border-none text-center block">
                   Comenzar con Growth
                 </button>
               </div>
             </div>

             {/* ENTERPRISE */}
             <div className="p-8 rounded-3xl border border-slate-800 bg-slate-950 hover:bg-slate-900/80 transition-all flex flex-col min-h-[520px]">
               <h3 className="text-xl font-medium text-slate-300 mb-2 tracking-tight">Corporativo</h3>
               <div className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Enterprise</div>
               <div className="text-3xl font-bold text-slate-400 tracking-tight">A Medida</div>
               <p className="text-slate-400 text-sm my-6 leading-relaxed">Integraciones profundas con CRMs legacy y flujos a medida.</p>
               <div className="flex-grow">
                 <ul className="space-y-4 text-sm border-t border-slate-800 pt-6">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> <span>Integraciones API Privadas</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> <span>Entrenamiento con Datos Internos</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> <span>Modelos de Lenguaje Dedicados</span></li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> <span>Soporte VIP y Auditorías Mensuales</span></li>
                 </ul>
               </div>
               <div className="mt-8 pt-6">
                 <button onClick={() => scrollToSection('precios')} className="w-full py-4 rounded-xl border border-slate-700 hover:border-indigo-500 text-white font-bold transition-all cursor-pointer bg-transparent text-center block">
                   Contactar Ventas
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* --- FAQ SECTION --- */}
       <section className="py-24 bg-slate-950 text-white text-center">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Preguntas Frecuentes</h2>
           <div className="space-y-4 text-left">
             {[
               { q: "¿Tengo control sobre lo que publican los agentes?", a: "Absolutamente. Contamos con un panel centralizado donde puedes revisar, editar o aprobar el contenido programado antes de su publicación con un solo clic." },
               { q: "¿Cómo se conecta SCALAR a mis canales?", a: "Es 100% seguro. Durante el registro realizas el inicio de sesión oficial con Meta Login para otorgarnos los tokens autorizados. Nosotros nunca vemos ni guardamos tus contraseñas." },
               { q: "¿Necesito conocimientos técnicos para configurar SCALAR?", a: "No. Nuestro proceso de onboarding te guía paso a paso en menos de 5 minutos recopilando la información de tu empresa para entrenar a tus agentes." },
               { q: "¿Qué pasa si un cliente hace una consulta muy específica?", a: "El agente de soporte cuenta con un protocolo de escalabilidad humana. Si detecta una duda que requiere criterio comercial específico, notificará a tu equipo en tiempo real." },
               { q: "¿Puedo cancelar mi suscripción en cualquier momento?", a: "Sí, puedes cancelar tu suscripción directamente desde tu cuenta sin penalizaciones ni compromisos a largo plazo." }
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

       {/* --- FINAL CTA BANNER --- */}
       <section className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-center border-t border-slate-800">
         <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Activa Tu Fuerza Digital Hoy</h2>
           <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-normal">Configura tus agentes en 5 minutos y automatiza la creación de contenido y atención de tu negocio.</p>
           <button onClick={() => scrollToSection('precios')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] border-none cursor-pointer">
             Comenzar Ahora
           </button>
         </div>
       </section>

       {/* --- FOOTER RESTRUCTURADO --- */}
       <footer className="bg-slate-950 border-t border-slate-800/80 py-16 text-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-left">
               <div className="md:col-span-1">
                 <div className="flex items-center tracking-tight mb-4">
                   <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-3 object-contain" />
                   <span className="font-bold text-lg text-slate-200 uppercase tracking-widest">SCALAR</span>
                 </div>
                 <p className="text-slate-400 text-xs leading-relaxed">Fuerza digital autónoma para empresas y emprendedores. Delegación inteligente con control total de tu marca.</p>
               </div>

               <div>
                 <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegación</h4>
                 <ul className="space-y-2 text-xs text-slate-400">
                   <li><button onClick={() => scrollToSection('como-funciona')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer">Cómo Funciona</button></li>
                   <li><button onClick={() => scrollToSection('solucion')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer">Funcionalidades</button></li>
                   <li><button onClick={() => scrollToSection('precios')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer">Precios</button></li>
                 </ul>
               </div>

               <div>
                 <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Compañía</h4>
                 <ul className="space-y-2 text-xs text-slate-400">
                   <li><button onClick={() => navigateAndScroll('about')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer">Acerca de Nosotros</button></li>
                   <li><a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">Política de Privacidad</a></li>
                   <li><a href="/terminos.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">Términos del Servicio</a></li>
                 </ul>
               </div>

               <div>
                 <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Cuenta</h4>
                 <ul className="space-y-2 text-xs text-slate-400">
                   <li><button onClick={() => alert('Redirigiendo a inicio de sesión...')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer">Iniciar Sesión</button></li>
                   <li><button onClick={() => scrollToSection('precios')} className="hover:text-white bg-transparent border-none p-0 cursor-pointer">Crear Cuenta</button></li>
                 </ul>
               </div>
             </div>

             <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
               <p>&copy; {new Date().getFullYear()} Taskly IA SpA. Santiago, Chile.</p>
               <p>Todos los derechos reservados.</p>
             </div>
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
    
     {/* --- NAVBAR OPTIMIZADO PARA CONVERSIÓN --- */}
     <nav className="fixed w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
         <div className="flex justify-between items-center h-20">
           {/* Logo */}
           <div className="flex items-center cursor-pointer" onClick={() => navigateAndScroll('home')}>
             <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-3 object-contain" />
             <span className="font-bold text-xl tracking-tight text-white uppercase tracking-widest">SCALAR</span>
           </div>

           {/* Menú Principal Simplificado */}
           <div className="hidden md:flex space-x-8 items-center">
             <button onClick={() => navigateAndScroll('home', 'como-funciona')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none p-0">Cómo Funciona</button>
             <button onClick={() => navigateAndScroll('home', 'solucion')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none p-0">Funcionalidades</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium cursor-pointer tracking-tight bg-transparent border-none p-0">Precios</button>
           </div>

           {/* Botones de Acción Derecha */}
           <div className="hidden md:flex space-x-4 items-center">
             <button onClick={() => alert('Redirigiendo a inicio de sesión...')} className="text-slate-300 hover:text-white text-sm font-semibold bg-transparent border-none cursor-pointer">Iniciar Sesión</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer shadow-lg shadow-indigo-600/20 border-none">Comenzar</button>
           </div>

           {/* Menú Móvil Hamburguesa */}
           <div className="md:hidden text-white">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-transparent border-none">{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
           </div>
         </div>
       </div>

       {/* Desplegable Móvil */}
       {isMenuOpen && (
         <div className="md:hidden bg-slate-900 border-b border-slate-800 text-center">
           <div className="px-4 pt-2 pb-6 space-y-2 text-sm">
             <button onClick={() => navigateAndScroll('home', 'como-funciona')} className="block w-full text-left py-3 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Cómo Funciona</button>
             <button onClick={() => navigateAndScroll('home', 'solucion')} className="block w-full text-left py-3 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Funcionalidades</button>
             <button onClick={() => navigateAndScroll('home', 'precios')} className="block w-full text-left py-3 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Precios</button>
             <button onClick={() => alert('Redirigiendo a inicio de sesión...')} className="block w-full text-left py-3 text-slate-300 border-b border-slate-800 font-medium bg-transparent border-none">Iniciar Sesión</button>
             
             <button onClick={() => navigateAndScroll('home', 'precios')} className="block w-full text-center mt-4 bg-indigo-600 py-3 rounded-xl font-bold text-white shadow-lg border-none">Comenzar</button>
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