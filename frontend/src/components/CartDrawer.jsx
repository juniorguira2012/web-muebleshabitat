import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQty }) {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-4 border-b">
            <h3 className="font-bold text-lg text-[#1e2838] flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#e6007e]" /> Tu Carrito de Compras
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
              <X size={20} />
            </button>
          </div>

          <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-center text-gray-400 py-12 text-sm">Tu carrito está vacío.</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex items-center justify-between gap-3 bg-gray-50 p-3 rounded-lg border">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-800 line-clamp-1">{item.name}</h4>
                    <span className="text-xs text-[#e6007e] font-semibold">RD${item.price.toLocaleString()}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 bg-white border rounded hover:bg-gray-100 cursor-pointer">
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-bold">{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 bg-white border rounded hover:bg-gray-100 cursor-pointer">
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => onUpdateQty(item.id, -item.qty)} className="text-gray-400 hover:text-red-500 cursor-pointer">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">Subtotal:</span>
            <span className="text-lg font-black text-[#1e2838]">RD${totalPrice.toLocaleString()}</span>
          </div>
          <button 
            disabled={cart.length === 0}
            className="w-full bg-[#25d366] text-white font-bold py-3 rounded-xl hover:bg-[#20ba5a] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
          >
            <span>Finalizar Pedido por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}