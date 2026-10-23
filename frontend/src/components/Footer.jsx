import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const topProducts = [
    {
      id: 1,
      name: 'Sofá Modular Velvet Gris',
      price: 00,
      image: 'https://i.ibb.co/TDw8tRQx/ambo-ampeng-KEGGJPKxc-Sc-unsplash.jpg'
    },
    {
      id: 2,
      name: 'Juego de Comedor Madera Roble 4 Sillas',
      price: 00,
      image: 'https://i.ibb.co/JWvLDwtZ/onno-z-GKRmwzpl-Vc-unsplash.jpg'
    },
    {
      id: 3,
      name: 'Estufa de Gas 30" Acero Inoxidable',
      price: 00,
      image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <footer className="relative bg-[#3C3C3B] text-gray-300 text-xs w-full pt-12 border-t border-gray-700 font-sans">
      
      <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* COLUMNA 1: LOGO DESTACADO EN CONTENEDOR BLANCO */}
        <div className="space-y-4">
          
          {/* Caja Blanca con Sombra para la Máxima Definición del Logo */}
          <div className="bg-white p-4 rounded-2xl shadow-md inline-block border border-gray-100">
            <Logo />
          </div>

          <div className="space-y-2 pt-2 border-t border-gray-600/60">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">VISÍTANOS EN:</h4>
            <p className="text-gray-300 leading-relaxed text-[11px]">
              C. Duarte #37, Esquina los Compadres, Nuevo Amanecer<br />
              Nivel 1, Municipios Los Alcarrizos, Santo Domingo Oeste,<br />
              República Dominicana.
            </p>
          </div>

          <div className="space-y-1 text-[11px] pt-1">
            <p><strong className="text-white font-semibold">Contacto:</strong> +1 (809) 371-5527</p>
            <p><strong className="text-white font-semibold">Email:</strong> info@muebleshabitat.com</p>
            <p><strong className="text-white font-semibold">RNC:</strong> 000-000000</p>
          </div>
        </div>

        {/* COLUMNA 2: POLÍTICAS Y TÉRMINOS */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs tracking-wider uppercase pb-2 border-b border-gray-600/60">
            POLÍTICAS Y TÉRMINOS
          </h4>
          <ul className="space-y-2 text-[11px] text-gray-300">
            <li><a href="#" className="hover:text-[#F39453] transition">Políticas de Seguridad</a></li>
            <li><a href="#" className="hover:text-[#F39453] transition">Políticas de Entrega y Envíos</a></li>
            <li><a href="#" className="hover:text-[#F39453] transition">Devolución, Reembolso y Cancelaciones</a></li>
            <li><a href="#" className="hover:text-[#F39453] transition">Términos del Servicio</a></li>
            <li><a href="#" className="hover:text-[#F39453] transition">Preguntas Frecuentes (FAQ)</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: MÉTODOS DE PAGO */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs tracking-wider uppercase pb-2 border-b border-gray-600/60">
            MÉTODOS DE PAGO (PPROXIMAMENTE)
          </h4>
          <p className="text-gray-300 text-[11px] leading-relaxed">
            Aceptamos múltiples pasarelas de pago seguras y transferencias bancarias locales.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="bg-white/10 border border-gray-600 px-3 py-1.5 rounded-md font-extrabold text-white text-[11px]">
              VISA
            </span>
            <span className="bg-white/10 border border-gray-600 px-3 py-1.5 rounded-md font-extrabold text-white text-[11px]">
              MasterCard
            </span>
            <span className="bg-blue-600 px-3.5 py-1.5 rounded-md font-extrabold text-white text-[11px]">
              AZUL
            </span>
            <span className="bg-white/10 border border-gray-600 px-3 py-1.5 rounded-md font-extrabold text-white text-[11px]">
              AMEX
            </span>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-black/20 border border-gray-600 text-[10px] space-y-1">
            <div className="flex items-center gap-1.5 text-[#9BBDA0] font-bold">
              <ShieldCheck size={14} />
              <span>Pagos Verificados y Encriptados</span>
            </div>
            <p className="text-gray-400">MasterCard SecureCode | Verified by VISA</p>
          </div>
        </div>

        {/* COLUMNA 4: PRODUCTOS MEJOR VALORADOS */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs tracking-wider uppercase pb-2 border-b border-gray-600/60">
            PRODUCTOS MEJOR VALORADOS
          </h4>
          <div className="space-y-3">
            {topProducts.map(prod => (
              <a 
                key={prod.id} 
                href="#" 
                className="flex items-center gap-3 group hover:bg-white/5 p-1 rounded-lg transition"
              >
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-12 h-12 object-cover rounded-md bg-gray-800 shrink-0" 
                />
                <div className="overflow-hidden">
                  <h5 className="font-semibold text-gray-200 text-[11px] truncate group-hover:text-[#F39453] transition">
                    {prod.name}
                  </h5>
                  <span className="text-[#F39453] font-extrabold text-xs">
                    RD${prod.price.toLocaleString()}
                  </span>
                  <span className="text-[9px] text-gray-400 block">Imp. incluido</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="bg-black/30 py-4 text-center text-[11px] text-gray-400 border-t border-gray-700">
        © 2026 MUEBLES HÁBITAT (muebleshabitat.com). Todos los derechos reservados.
      </div>

      {/* Botón Flotante Oficial de WhatsApp */}
        <a 
          href="https://wa.me/18093715527?text=Hola%20Muebles%20Hábitat,%20quisiera%20recibir%20información%20sobre%20sus%20productos." 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 flex items-center justify-center cursor-pointer border-2 border-white animate-bounce"
        >
          <MessageCircle size={32} className="fill-white/20" />
        </a>

    </footer>
  );
}