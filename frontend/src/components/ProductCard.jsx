import React from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col overflow-hidden group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
        />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-[#F39453] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
            {product.tag}
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-gray-600 hover:text-[#e6007e] transition">
          <Heart size={16} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs text-gray-400 font-semibold uppercase">{product.category}</span>
          <h3 className="font-bold text-gray-800 text-sm mt-1 line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-1 text-amber-400 my-2">
            {[...Array(product.rating)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block">Precio (Imp. Incluidos)</span>
            <span className="text-base font-black text-[#3C3C3B]">
              RD${product.price.toLocaleString()}
            </span>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-[#3C3C3B] text-white text-xs font-semibold px-3.5 py-2 rounded-lg hover:bg-[#F39453] transition flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag size={14} /> Añadir
          </button>
        </div>
      </div>
    </div>
  );
}