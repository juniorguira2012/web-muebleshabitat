import React from 'react';
import { 
  Sofa, 
  Utensils, 
  Tv, 
  Footprints, 
  Shirt, 
  Sparkles, 
  Bed, 
  Smartphone, 
  Laptop, 
  ShoppingBag 
} from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  // Lista de categorías reales con nombres en formato limpio
  const categoryCards = [
    { name: 'Muebles / Sofás', rawName: 'MUEBLES/SOFÁS', count: 18, icon: Sofa, color: 'text-amber-600', bg: 'bg-amber-50' },
    { name: 'Comedores / Mesas', rawName: 'COMEDORES/MESAS', count: 12, icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Tecnología / Electrónica', rawName: 'TECNOLOGIA/ELECTRONICA', count: 15, icon: Tv, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Electrodomésticos', rawName: 'ELECTRODOMÉSTICOS', count: 2, icon: Tv, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { name: 'Ropa / Moda / Calzado', rawName: 'ROPA/MODA/CALZADO', count: 10, icon: Shirt, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Calzado / Accesorios', rawName: 'CALZADO/ACCESORIOS', count: 14, icon: Footprints, color: 'text-pink-500', bg: 'bg-pink-50' },
    { name: 'Perfumería / Cuidado Personal', rawName: 'PERFUMERIA/CUIDADO P', count: 8, icon: Sparkles, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { name: 'Colchones / Base', rawName: 'COLCHONES/BASE', count: 10, icon: Bed, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Celulares / Tablet', rawName: 'CELULARES/TABLET', count: 16, icon: Smartphone, color: 'text-sky-500', bg: 'bg-sky-50' },
    { name: 'Accesorios / Laptops', rawName: 'ACCESORIOS/LAPTOPS', count: 9, icon: Laptop, color: 'text-gray-600', bg: 'bg-gray-100' }
  ];

  return (
    <div className="space-y-4">
      {/* Encabezado con paleta corporativa */}
      <div className="flex items-center gap-2">
        <ShoppingBag size={22} className="text-[#F39453]" />
        <h2 className="text-xl font-bold text-[#3C3C3B]">
          Encuentra artículos por categoría
        </h2>
      </div>
      
      {/* Grid adaptado a 5 columnas en desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categoryCards.map((cat, idx) => {
          const IconComponent = cat.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectCategory(cat.rawName)}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center text-center group transition duration-200 cursor-pointer"
            >
              <div className={`w-12 h-12 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                <IconComponent size={22} />
              </div>

              <h3 className="font-bold text-xs text-[#3C3C3B] group-hover:text-[#F39453] transition line-clamp-2 h-8 flex items-center justify-center">
                {cat.name}
              </h3>

              <span className="text-[11px] text-gray-400 font-medium mt-1">
                ({cat.count} items)
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}