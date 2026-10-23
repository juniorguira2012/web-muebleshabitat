import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: 'NOVEDADES 2026',
      title: 'Equipa tu Hogar con Elegancia y Estilo',
      description: 'Aprovecha nuestras ofertas en juegos de sala y comedores de temporada.',
      buttonText: 'Ver Oferta',
      actionType: 'oferta',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      badge: 'OFERTA DE TEMPORADA',
      title: 'Renueva tu Dormitorio Con Nuestros Mejores Productos',
      description: 'Juegos de aposento y colchones ortopédicos con transporte gratis.',
      buttonText: 'Explorar Catálogo',
      actionType: 'catalogo',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      badge: 'LÍNEA BLANCA',
      title: 'Equipa tu Cocina con Tecnología Moderna',
      description: 'Estufas, neveras y electrodomésticos con garantía respaldada en RD.',
      buttonText: 'Comprar Ahora',
      actionType: 'comprar',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  // Función para redirigir a WhatsApp según la acción del botón
  const handleActionClick = (slide) => {
    const phoneNumber = '18093715527';
    let message = '';

    switch (slide.actionType) {
      case 'oferta':
        message = `Hola, Muebles Hábitat. 👋 Quisiera consultar las ofertas disponibles para: *"${slide.title}"*.`;
        break;
      case 'catalogo':
        message = `Hola, Muebles Hábitat. 📚 Me gustaría solicitar el catálogo digital de: *"${slide.title}"*.`;
        break;
      case 'comprar':
        message = `Hola, Muebles Hábitat. 🛒 Quisiera asesoría inmediata para comprar: *"${slide.title}"*.`;
        break;
      default:
        message = `Hola, Muebles Hábitat. 👋 Deseo más información sobre: *"${slide.title}"*.`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Cambio automático de slide cada 8 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
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

          {/* Superposición gradiente oscura */}
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

              {/* Botón interactivo de llamada a la acción hacia WhatsApp */}
              <div className="pt-2">
                <button 
                  onClick={() => handleActionClick(slide)}
                  className="bg-[#25D365] hover:bg-[#128C7E] text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-full shadow-md flex items-center gap-2 transition cursor-pointer"
                >
                  <MessageCircle size={16} />
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
              idx === currentSlide ? 'w-8 bg-[#F39453]' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}