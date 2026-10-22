import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <a href="/" className={`inline-flex items-center gap-3 decoration-none group ${className}`}>
      {/* Ilustración SVG del logo: Techo, Sillón Naranja, Lámpara y Planta */}
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Techo y Chimenea Gris Oscuro */}
          <path d="M10 40 L50 15 L90 40" stroke="#3C3C3B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M72 25 V18 H80 V30" stroke="#3C3C3B" strokeWidth="5" strokeLinecap="round" />
          <rect x="42" y="22" width="16" height="12" stroke="#3C3C3B" strokeWidth="3" fill="none" />
          <line x1="50" y1="22" x2="50" y2="34" stroke="#3C3C3B" strokeWidth="3" />
          <line x1="42" y1="28" x2="58" y2="28" stroke="#3C3C3B" strokeWidth="3" />

          {/* Sillón Naranja (#F39453) */}
          <path d="M20 48 C20 42 26 38 32 38 H44 C50 38 56 42 56 48 V65 H20 V48 Z" fill="#F39453" stroke="#3C3C3B" strokeWidth="3" />
          <path d="M15 50 C15 45 19 45 22 48 V62 C22 65 17 65 15 60 V50 Z" fill="#F39453" stroke="#3C3C3B" strokeWidth="3" />
          <path d="M54 50 C54 45 58 45 61 48 V62 C61 65 56 65 54 60 V50 Z" fill="#F39453" stroke="#3C3C3B" strokeWidth="3" />
          <rect x="23" y="55" width="30" height="10" rx="3" fill="#F39453" stroke="#3C3C3B" strokeWidth="2" />
          
          {/* Patas del Sillón */}
          <line x1="22" y1="65" x2="20" y2="72" stroke="#3C3C3B" strokeWidth="4" strokeLinecap="round" />
          <line x1="54" y1="65" x2="56" y2="72" stroke="#3C3C3B" strokeWidth="4" strokeLinecap="round" />

          {/* Mesa y Lámpara */}
          <rect x="58" y="52" width="28" height="5" fill="#9A5739" stroke="#3C3C3B" strokeWidth="2" />
          <line x1="62" y1="57" x2="60" y2="70" stroke="#3C3C3B" strokeWidth="3" />
          <line x1="82" y1="57" x2="84" y2="70" stroke="#3C3C3B" strokeWidth="3" />

          {/* Lámpara Naranja */}
          <path d="M64 42 L74 42 L72 32 L66 32 Z" fill="#F39453" stroke="#3C3C3B" strokeWidth="2" />
          <line x1="69" y1="42" x2="69" y2="52" stroke="#3C3C3B" strokeWidth="2.5" />

          {/* Maceta y Planta Verde (#557B5B) */}
          <path d="M78 52 C78 48 84 48 84 52 Z" fill="#9BBDA0" stroke="#3C3C3B" strokeWidth="2" />
          <path d="M81 44 Q76 40 79 36 Q83 40 81 44 Z" fill="#557B5B" />
          <path d="M83 46 Q88 42 85 38 Q81 42 83 46 Z" fill="#557B5B" />

          {/* Curva de la Base */}
          <path d="M8 72 Q50 64 92 72" stroke="#3C3C3B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Tipografía Oficial: "Habitat" (Serif) y "Muebles y soluciones para el hogar" (Verde) */}
      <div className="flex flex-col leading-none">
        <span className="font-bigola text-2xl md:text-3xl font-bold tracking-tight text-[#3C3C3B] group-hover:text-[#F39453] transition">
          Habitat
        </span>
        <span className="font-bree text-[10px] md:text-[11px] font-semibold text-[#557B5B] tracking-normal mt-0.5">
          Muebles y soluciones para el hogar
        </span>
      </div>
    </a>
  );
}