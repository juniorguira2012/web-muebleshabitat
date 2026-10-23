import React, { useState } from 'react';
import { Menu, ChevronRight, Mail } from 'lucide-react';

export default function Sidebar({ categories, mobileMenuOpen, onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // Número de WhatsApp oficial de la tienda
    const phoneNumber = '18093715527';
    const message = `Hola, Muebles Hábitat. 📩 Deseo suscribirme a sus ofertas, catálogo y promociones especiales con mi correo: *${email}*`;
    
    // Generar enlace dinámico y abrir en nueva pestaña
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <aside className={`md:block ${mobileMenuOpen ? 'block' : 'hidden'} md:col-span-1 space-y-6`}>
      
      {/* 1. Lista de Categorías */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="bg-[#3C3C3B] text-white px-4 py-3 rounded-lg font-bold text-sm mb-3 flex items-center justify-between">
          <span>Categorías</span>
          <Menu size={16} />
        </div>
        <ul className="space-y-1">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <button 
                onClick={() => onSelectCategory(cat)}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#F39453] flex items-center justify-between transition cursor-pointer"
              >
                <span>{cat}</span>
                <ChevronRight size={14} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Caja de Suscripción a WhatsApp */}
      <div className="bg-[#3C3C3B] text-white p-6 rounded-2xl shadow-md space-y-4">
        <div className="w-10 h-10 bg-[#F39453]/20 rounded-xl flex items-center justify-center border border-[#F39453]/40">
          <Mail size={20} className="text-[#F39453]" />
        </div>

        <div>
          <h3 className="font-bold text-base text-white tracking-wide">Déjanos tu Correo</h3>
          <p className="text-xs text-gray-300 leading-relaxed mt-1.5">
            Recibe ofertas exclusivas, catálogos de temporada y promociones especiales directamente en tu e-mail o WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-3">
          <input 
            type="email" 
            required
            placeholder="Dirección de Correo Electrónico" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-xs p-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#F39453] transition"
          />
          <button 
            type="submit" 
            className="w-full bg-[#F39453] hover:bg-[#9A5739] text-white font-bold text-xs py-3 rounded-xl shadow-md transition cursor-pointer"
          >
            {subscribed ? '¡Gracias por Suscribirte!' : 'Enviar y Suscribirme'}
          </button>
        </form>
      </div>

    </aside>
  );
}