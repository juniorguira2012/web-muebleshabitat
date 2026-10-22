import React from 'react';
import { Target, Eye, Heart, Award, Users, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-[#F39453]" />,
      title: 'Calidad Garantizada',
      description: 'Ofrecemos muebles y artículos para el hogar seleccionados con los más altos estándares de durabilidad y diseño.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#557B5B]" />,
      title: 'Atención Cercana',
      description: 'Acompañamos a las familias dominicanas con un servicio personalizado y asesoría antes y después de su compra.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#E05D26]" />,
      title: 'Compromiso y Pasión',
      description: 'Nos apasiona transformar espacios en hogares acogedores, funcionales y llenos de estilo.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#9E6E47]" />,
      title: 'Accesibilidad',
      description: 'Brindamos planes de financiamiento flexibles y precios competitivos para que todos puedan renovar su hogar.'
    }
  ];

  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#557B5B] uppercase tracking-widest bg-emerald-50 px-3.5 py-1 rounded-full border border-[#9BBDA0]/40">
            Conoce nuestra historia
          </span>
          <h2 className="font-bigola text-3xl md:text-4xl font-bold text-[#3C3C3B]">
            ¿Quiénes Somos en <span className="text-[#F39453]">Muebles Hábitat</span>?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Somos una empresa dominicana dedicada a brindar soluciones integrales para el hogar. Nos especializamos en la comercialización de muebles, electrodomésticos, calzados y artículos esenciales que combinan estilo, confort y funcionalidad para las familias de todo el país.
          </p>
        </div>

        {/* MISIÓN Y VISIÓN (TARJETAS PARALELAS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TARJETA DE MISIÓN */}
          <div className="bg-[#3C3C3B] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between space-y-4 border border-gray-700">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#F39453]/20 rounded-2xl flex items-center justify-center border border-[#F39453]/40">
                <Target className="w-6 h-6 text-[#F39453]" />
              </div>
              <h3 className="font-bigola text-2xl font-bold text-white">Nuestra Misión</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Transformar los hogares dominicanos ofreciendo muebles y productos de calidad superior a precios accesibles, respaldados por una atención al cliente excepcional y facilidades de financiamiento que mejoren la calidad de vida de nuestras familias.
              </p>
            </div>
            <div className="pt-2 border-t border-gray-700/60 text-[11px] text-[#9BBDA0] font-semibold">
              Muebles y soluciones pensadas para ti.
            </div>
          </div>

          {/* TARJETA DE VISIÓN */}
          <div className="bg-emerald-900/10 border border-[#557B5B]/30 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#557B5B]/20 rounded-2xl flex items-center justify-center border border-[#557B5B]/40">
                <Eye className="w-6 h-6 text-[#557B5B]" />
              </div>
              <h3 className="font-bigola text-2xl font-bold text-[#3C3C3B]">Nuestra Visión</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Consolidarnos como la tienda de muebles y artículos para el hogar referente en la República Dominicana, reconocida por la innovación en nuestros productos, la calidez en nuestro servicio y la confianza otorgada por miles de clientes satisfechos.
              </p>
            </div>
            <div className="pt-2 border-t border-gray-200 text-[11px] text-[#557B5B] font-bold">
              Inspirando elegancia y comodidad en cada hogar.
            </div>
          </div>

        </div>

        {/* VALORES CORPORATIVOS */}
        <div className="space-y-6 pt-4">
          <div className="text-center">
            <h3 className="font-bigola text-2xl font-bold text-[#3C3C3B]">Nuestros Valores</h3>
            <p className="text-xs text-gray-500 mt-1">Los principios que guían cada una de nuestras acciones cotidianas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition duration-300 space-y-2">
                <div className="mb-3">{val.icon}</div>
                <h4 className="font-bold text-[#3C3C3B] text-sm">{val.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}