import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: 'NOVEDADES 2026',
      title: 'Decora tu Hogar con Elegancia y Estilo',
      description: 'Aprovecha hasta un 30% de descuento en juegos de sala y comedores de temporada.',
      buttonText: 'Ver Ofertas',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      badge: 'OFERTA DE TEMPORADA',
      title: 'Renueva tu Dormitorio y Descansa Mejor',
      description: 'Juegos de aposento y colchones ortopédicos con transporte e instalación gratis.',
      buttonText: 'Explorar Catálogo',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      badge: 'LINEA BLANCA',
      title: 'Equipa tu Cocina con Tecnología Moderna',
      description: 'Estufas, neveras y electrodomésticos con garantía respaldada en RD.',
      buttonText: 'Comprar Ahora',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  // Cambio automático de slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[340px] md:h-[400px] bg-gray-900 group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Imagen de fondo */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Superposición gradiente oscura para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center p-6 md:p-12">
            <div className="max-w-md text-white space-y-3">
              {/* Badge destacado */}
              <span className="inline-block bg-[#F39453] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {slide.badge}
              </span>

              {/* Título principal */}
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
                {slide.title}
              </h1>

              {/* Descripción */}
              <p className="text-xs md:text-sm text-gray-200 line-clamp-2 leading-relaxed">
                {slide.description}
              </p>

              {/* Botón de llamada a la acción */}
              <div className="pt-2">
                <button className="bg-[#F39453] hover:bg-[#9A5739] text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-full shadow-md flex items-center gap-2 transition cursor-pointer">
                  <span>{slide.buttonText}</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botones de navegación Anterior / Siguiente */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicadores de posición (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-[#e6007e]' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}