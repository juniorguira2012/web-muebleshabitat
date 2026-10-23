import React from 'react';
import { Truck, ShieldCheck, RotateCcw } from 'lucide-react';

export default function TrustFeatures() {
  const features = [
    {
      title: 'Entrega y Envíos',
      description: 'Despachos rápidos e instalación garantizada.',
      icon: Truck,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      message: 'Hola Muebles Hábitat, quisiera consultar sobre los envíos y entregas.'
    },
    {
      title: 'Garantía de Calidad',
      description: 'Muebles resistentes construidos para durar.',
      icon: ShieldCheck,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      message: 'Hola Muebles Hábitat, quisiera información sobre la garantía de sus productos.'
    },
    {
      title: 'Soporte Continuo',
      description: 'Atención personalizada vía WhatsApp.',
      icon: RotateCcw,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      message: 'Hola Muebles Hábitat, necesito atención personalizada con una duda.'
    }
  ];

  return (
    <section className="bg-[#f0f4f8] py-8 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            const whatsappUrl = `https://wa.me/18093715527?text=${encodeURIComponent(item.message)}`;

            return (
              <a
                key={index}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex items-center gap-4 transition duration-200 group cursor-pointer"
              >
                {/* Icono envuelto en contenedor con color tenue */}
                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <IconComponent size={24} className={item.iconColor} />
                </div>

                {/* Texto explicativo */}
                <div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#e6007e] transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}