import React, { useState } from 'react';
import {
  Bot,
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
  Users,
  MessageCircle,
  Quote,
  Star,
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>

              <span className="font-bold text-xl tracking-tight">SCALAR</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => scrollToSection('problema')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                El Problema
              </button>
              <button
                onClick={() => scrollToSection('solucion')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                Nuestros Agentes
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection('precios')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                Planes
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Agendar Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button
                onClick={() => scrollToSection('problema')}
                className="block w-full text-left py-3 text-slate-300"
              >
                El Problema
              </button>
              <button
                onClick={() => scrollToSection('solucion')}
                className="block w-full text-left py-3 text-slate-300"
              >
                Agentes
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left py-3 text-slate-300"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection('precios')}
                className="block w-full text-left py-3 text-slate-300"
              >
                Planes
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="block w-full text-center mt-4 bg-indigo-600 py-3 rounded-lg font-bold"
              >
                Agendar Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden md:h-screen flex items-center">
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0 z-0">
          <img
            src="/agente-bg.png"
            alt="Agente IA SCALAR"
            className="w-full h-full object-cover opacity-75"
            style={{ objectPosition: 'center top' }}
            onError={(e) => {
              // Fallback por si la imagen no carga
              e.target.style.display = 'none';
              e.target.parentElement.style.background =
                'radial-gradient(circle at center, #312e81 0%, #020617 100%)';
            }}
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
            Haz crecer tu empresa,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-200 to-cyan-200 animate-gradient">
              sin contratar más personal.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-100 mb-10 leading-relaxed drop-shadow-lg font-medium">
            Integra una{' '}
            <span className="text-white font-bold text-shadow-glow">
              fuerza laboral digital completa
            </span>{' '}
            que gestiona la totalidad de tu negocio. Desde la atracción de
            clientes hasta el balance financiero. Toma el control total de tu
            operación y escala sin límites.
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
              <span className="text-sm font-medium">
                Trabajan 24/7 sin descanso
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">
                Sin contratos laborales
              </span>
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
                ¿Sientes que eres{' '}
                <span className="text-red-400">
                  esclavo de tu propio negocio
                </span>
                ?
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                La mayoría de los dueños pasan el día atrapados en tareas
                repetitivas en lugar de hacer crecer su empresa.
              </p>
              <ul className="space-y-4">
                {[
                  'Pierdes ventas por no responder WhatsApp a tiempo.',
                  'Te estresas cobrando facturas atrasadas.',
                  'Nadie publica en redes sociales por falta de tiempo.',
                  'Los sueldos se comen casi todas tus ganancias.',
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
                <p className="text-slate-400 mb-6">
                  Apagando incendios todo el día.
                </p>
                <div className="h-2 bg-slate-800 rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-red-500 w-[90%]"></div>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Nivel de estrés: Crítico
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION (BENTO GRID) --- */}
      <section id="solucion" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tu Nuevo Equipo Digital
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Contrata 4 roles expertos por una fracción del costo de un
              empleado junior. Sin quejas, sin horarios, resultados puros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all"></div>
              <div>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Vendedor Automático</h3>
                <p className="text-slate-400 max-w-md">
                  Busca clientes, les escribe y agenda reuniones en tu
                  calendario mientras duermes. Nunca se olvida de hacer
                  seguimiento y trabaja con la misma energía el lunes a las 9 AM
                  que el domingo a las 10 PM.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-indigo-400">
                <span>Trae dinero a la empresa</span>
                <div className="h-px w-8 bg-indigo-500/50 mx-3"></div>
                <span className="text-emerald-400 flex items-center">
                  <Zap className="w-3 h-3 mr-1" /> Activo 24/7
                </span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experto en Marketing</h3>
                <p className="text-slate-400 text-sm">
                  Redacta y publica contenido en tus redes para atraer clientes,
                  sin que tú tengas que escribir una sola palabra.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Administrador y Finanzas
                </h3>
                <p className="text-slate-400 text-sm">
                  Ordena tus números, cobra a clientes morosos y te dice
                  exactamente cuánto ganaste a fin de mes.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-pink-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-16 -mb-16 group-hover:bg-pink-500/20 transition-all"></div>
              <div>
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Soporte y Atención al Cliente
                </h3>
                <p className="text-slate-400 max-w-md">
                  Responde dudas al instante (menos de 5 segundos) y mantiene a
                  tus clientes felices. Permite que atiendas al doble de
                  personas sin contratar a más secretarias o recepcionistas.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-pink-400">
                <span>Cuida a tus clientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section
        id="testimonios"
        className="py-24 bg-slate-900/50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Empresarios que recuperaron su vida
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ellos dejaron de apagar incendios y empezaron a escalar con
              SCALAR.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-700">
                  <img
                    src="https://placehold.co/100x100/1e293b/cbd5e1?text=MOGA"
                    alt="Moga Veterinaria"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Cristián</h4>
                  <p className="text-sm text-indigo-400">Veterinaria MOGA</p>
                </div>
              </div>
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Antes perdíamos citas por no contestar el teléfono a tiempo.
                Ahora la agenda se llena sola y yo me dedico 100% a los
                animales. Es como tener una recepcionista estrella por una
                fracción del costo."
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-700">
                  <img
                    src="https://placehold.co/100x100/1e293b/cbd5e1?text=REVIT"
                    alt="Clinica Revit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Patricio</h4>
                  <p className="text-sm text-indigo-400">Kinesiología REVIT</p>
                </div>
              </div>
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "La gestión de cobros y facturas me quitaba horas de sueño.
                SCALAR ordenó todo el flujo administrativo en una semana. Mi
                clínica funciona como un reloj suizo sin contratar personal
                extra."
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-700">
                  <img
                    src="https://placehold.co/100x100/1e293b/cbd5e1?text=ROCA"
                    alt="Roca Propiedades"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Oscar</h4>
                  <p className="text-sm text-indigo-400">Corredora ROCA</p>
                </div>
              </div>
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "En el rubro inmobiliario la velocidad es todo. Mis agentes
                responden a interesados en segundos, 24/7, y me dejan la reunión
                lista. Hemos duplicado las captaciones sin contratar más
                personal."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="precios" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Planes Simples
            </h2>
            <p className="text-slate-400">
              Más barato que un sueldo mínimo. Más efectivo que un equipo
              entero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all">
              <h3 className="text-xl font-medium text-slate-300 mb-2">
                Emprendedor
              </h3>
              <div className="text-3xl font-bold mb-6">Starter</div>
              <p className="text-slate-400 text-sm mb-8 h-12">
                Para negocios que quieren empezar a ordenarse y automatizar
                respuestas.
              </p>
              <button
                onClick={() => scrollToSection('demo')}
                className="w-full py-3 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-medium transition-all mb-8"
              >
                Consultar Precio
              </button>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  Agente de Ventas Básico
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  Chatbot de Respuestas 24/7
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  Panel de Control Simple
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-slate-900 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                El más elegido
              </div>
              <h3 className="text-xl font-medium text-indigo-400 mb-2">
                Crecimiento
              </h3>
              <div className="text-3xl font-bold mb-6">Growth</div>
              <p className="text-slate-400 text-sm mb-8 h-12">
                El equipo completo. Ventas agresivas, marketing y finanzas en un
                solo lugar.
              </p>
              <button
                onClick={() => scrollToSection('demo')}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all mb-8 shadow-lg shadow-indigo-500/25"
              >
                Solicitar Demo
              </button>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  <strong>Todo lo de Emprendedor</strong>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  Ventas Proactivas (Busca clientes)
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  Creación de Contenido Automático
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />{' '}
                  Gestión de Cobranzas y Pagos
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all">
              <h3 className="text-xl font-medium text-slate-300 mb-2">
                Corporativo
              </h3>
              <div className="text-3xl font-bold mb-6">Enterprise</div>
              <p className="text-slate-400 text-sm mb-8 h-12">
                Para empresas grandes con varias sucursales y necesidades a
                medida.
              </p>
              <button
                onClick={() => scrollToSection('demo')}
                className="w-full py-3 rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 font-medium transition-all mb-8"
              >
                Contactar Ventas
              </button>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" />{' '}
                  Integraciones a medida (API)
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" />{' '}
                  Gerente de Cuenta Personal
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" />{' '}
                  Entrenamiento de IA Privado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '¿Tengo que despedir a mis empleados?',
                a: 'No necesariamente. SCALAR hace el trabajo repetitivo y aburrido (agendar, cobrar, responder lo mismo 100 veces). Esto libera a tu equipo humano para que hagan lo importante: cerrar tratos grandes y atender mejor a la gente en persona.',
              },
              {
                q: '¿Es difícil de usar?',
                a: 'Para nada. Nosotros te lo entregamos configurado y listo. Si sabes usar WhatsApp y el correo, ya sabes usar SCALAR. Además, la instalación tarda solo 5 días.',
              },
              {
                q: '¿Qué pasa si mi negocio crece mucho?',
                a: 'Esa es la magia. Si mañana te llegan 1.000 clientes, SCALAR los atiende a todos sin cansarse y sin cobrarte horas extras. Tu capacidad de atención se vuelve infinita.',
              },
              {
                q: '¿Es seguro para mis datos financieros?',
                a: 'Totalmente. Usamos seguridad de nivel bancario. El agente de finanzas solo ve lo que tú le permites y te ayuda a tener orden, pero tú siempre tienes el control final del dinero.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-medium text-slate-200">{item.q}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para recuperar tu tiempo?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Agenda una demostración de 15 minutos. Te mostraremos exactamente
            cuánto dinero y horas te ahorrará SCALAR desde el primer mes.
          </p>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl max-w-md mx-auto">
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">
                  Correo Corporativo
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="nombre@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="+56 9..."
                />
              </div>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02]"
              >
                Agendar Demo Gratis
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
            <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center mr-2">
              <Bot className="w-3 h-3 text-indigo-400" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-200">
              SCALAR
            </span>
          </div>
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Taskly IA SpA. Todos los
              derechos reservados.
            </p>
            <p className="mt-1">Santiago, Chile.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
