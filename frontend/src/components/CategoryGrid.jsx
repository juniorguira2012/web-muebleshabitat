import React from 'react';
import { 
  Utensils, 
  Bed, 
  DoorClosed, 
  Sofa, 
  Tv, 
  Layers, 
  Footprints 
} from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  const categoryCards = [
    { name: 'Cocina', count: 12, icon: Utensils, color: 'text-amber-500', bg: 'bg-amber-50' },
    { name: 'Colchones', count: 8, icon: Bed, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Dormitorio', count: 15, icon: DoorClosed, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Sala', count: 20, icon: Sofa, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Muebles/Sofás', count: 18, icon: Sofa, color: 'text-sky-500', bg: 'bg-sky-50' },
    { name: 'Electrodomésticos', count: 25, icon: Tv, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'Modulares', count: 9, icon: Layers, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Tenis / Calzado', count: 14, icon: Footprints, color: 'text-pink-500', bg: 'bg-pink-50' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-[#1e2838]">Encuentra artículos por categoría</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categoryCards.map((cat, idx) => {
          const IconComponent = cat.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectCategory(cat.name.toUpperCase())}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center text-center group transition duration-200 cursor-pointer"
            >
              <div className={`w-12 h-12 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <IconComponent size={24} />
              </div>
              <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#e6007e] transition">
                {cat.name}
              </h3>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">
                ({cat.count} items)
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}