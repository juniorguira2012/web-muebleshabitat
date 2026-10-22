import React from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Logo from './Logo';

export default function BrandBanner() {
  return (
    <section className="bg-white py-8 border-y border-gray-200/80 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        
        {/* 1. BLOQUE IZQUIERDO: MENSAJE CENTRALIZADO + COLOR VIVO + ANIMACIÓN */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <h3 className="font-bree text-2xl md:text-3xl font-extrabold text-[#E05D26] leading-tight drop-shadow-sm">
            ¡Todo para tu hogar <br />
            <span className="text-[#C84B15]">en un solo lugar!</span>
          </h3>

          {/* Botón con Animación de Movimiento (pulse / bounce sutil) */}
          <a 
            href="https://wa.me/18093715527" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-[#E05D26] hover:bg-[#C84B15] text-white font-extrabold text-sm md:text-base px-6 py-3 rounded-full shadow-lg flex items-center justify-center gap-2.5 transition duration-300 transform hover:scale-105 animate-bounce cursor-pointer border-2 border-white"
          >
            <PhoneCall size={20} className="animate-spin-slow text-white" />
            <span>Contáctanos: 809-371-5527</span>
          </a>
        </div>

        {/* 2. BLOQUE CENTRAL: LOGO DE MUEBLES HÁBITAT */}
        <div className="flex items-center justify-center py-2 md:py-0">
          <Logo className="scale-110 md:scale-125" />
        </div>

        {/* 3. BLOQUE DERECHO: FINANCIAMIENTO + CAPITAL FÁCIL + REDES SOCIALES (EXACTO A TU IMAGEN) */}
        <div className="flex flex-col items-center justify-center space-y-4">
          
          {/* Header Financiamiento Verde */}
          <div className="flex items-center justify-center gap-2 text-[#529332]">
            <CheckCircle2 size={38} className="stroke-[2.5]" />
            <div className="text-left leading-none">
              <span className="block font-black text-xl md:text-2xl tracking-tight">Financiamiento</span>
              <span className="block font-black text-xl md:text-2xl tracking-tight">Disponible</span>
            </div>
          </div>

          {/* Píldora Capital Fácil + Teléfono Azul Marina */}
          <div className="relative pt-2">
            {/* Logo flotante Verde "Capital Fácil" arriba */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#529332] text-white px-3 py-0.5 rounded-full border-2 border-white shadow-md flex items-center gap-1 z-10">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-[#529332] font-black text-[10px]">
                C
              </div>
              <span className="font-extrabold text-xs tracking-tight italic">Capital Fácil</span>
            </div>

            {/* Número de teléfono dentro del contenedor Azul Oscuro */}
            <div className="bg-[#0b3c6d] text-white font-black text-xl md:text-2xl px-8 py-2.5 rounded-full shadow-md tracking-wider border border-blue-900 pt-3">
              809-543-1926
            </div>
          </div>

          {/* Sección Redes Sociales con Iconos Reales (TikTok, FB, IG) */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-[#529332] block">
              Síguenos en nuestras redes sociales:
            </span>

            <div className="flex items-center justify-center gap-4 text-xs font-bold text-gray-800">
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-80 transition">
                <span className="bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px]">🎵</span>
                <span>habitat_oficial</span>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-80 transition">
                <span className="bg-[#1877F2] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">f</span>
                <span>Habitat01</span>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-80 transition">
                <span className="bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px]">📸</span>
                <span>@habitat_oficial</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}