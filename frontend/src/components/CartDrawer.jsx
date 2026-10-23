import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Send, MapPin, User, Phone } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQty, currentUser, onOpenAuth }) {
  const [clientInfo, setClientInfo] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    address: currentUser?.address || ''
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSendWhatsAppOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    const name = currentUser?.name || clientInfo.name || 'Cliente';
    const phone = currentUser?.phone || clientInfo.phone || 'No especificado';
    const address = currentUser?.address || clientInfo.address || 'Entrega a coordinar';

    // Construcción del mensaje formateado para WhatsApp
    let message = `🛒 *NUEVO PEDIDO DE COMPRA - MUEBLES HÁBITAT*\n\n`;
    message += `👤 *Cliente:* ${name}\n`;
    message += `📞 *Teléfono:* ${phone}\n`;
    message += `📍 *Dirección:* ${address}\n\n`;
    message += `📋 *DETALLE DEL PEDIDO:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n   - Cantidad: ${item.qty}\n   - Precio: RD$${(item.price * item.qty).toLocaleString()}\n`;
    });

    message += `\n💰 *TOTAL A PAGAR:* RD$${subtotal.toLocaleString()}\n\n`;
    message += `Quedo a la espera de la confirmación del pedido y los métodos de pago. ¡Gracias!`;

    // Redirección a WhatsApp
    const whatsappUrl = `https://wa.me/18093715527?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        
        {/* Header Carrito */}
        <div className="p-4 bg-[#3C3C3B] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#F39453]" />
            <h3 className="font-bold text-sm">Mi Carrito de Compras</h3>
          </div>
          <button onClick={onClose} className="hover:text-[#F39453] transition cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-400 space-y-2">
              <ShoppingBag size={48} className="mx-auto opacity-30 text-[#3C3C3B]" />
              <p className="text-xs font-semibold">Tu carrito está vacío.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg shrink-0 bg-white" />
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-xs font-bold text-[#3C3C3B] truncate">{item.name}</h4>
                  <p className="text-xs text-[#F39453] font-black">RD${item.price.toLocaleString()}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onUpdateQty(item.id, -1)} className="w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold">-</button>
                    <span className="text-xs font-bold px-1">{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)} className="w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold">+</button>
                  </div>
                </div>

                <button onClick={() => onUpdateQty(item.id, -item.qty)} className="text-gray-400 hover:text-red-500 p-1">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Datos de Entrega y Botón Checkout */}
        {cart.length > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
            <div className="flex justify-between items-center text-sm font-black text-[#3C3C3B]">
              <span>Subtotal Total:</span>
              <span className="text-lg text-[#F39453]">RD${subtotal.toLocaleString()}</span>
            </div>

            {/* Datos adicionales si no hay sesión iniciada */}
            {!currentUser && (
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-600">Datos para la Entrega:</span>
                  <button onClick={onOpenAuth} className="text-[10px] text-[#557B5B] underline font-bold">
                    Iniciar Sesión
                  </button>
                </div>
                <input 
                  type="text" 
                  placeholder="Tu Nombre completo *" 
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                  className="w-full text-xs p-2 bg-white border border-gray-300 rounded-lg"
                />
                <input 
                  type="tel" 
                  placeholder="Teléfono / WhatsApp *" 
                  required
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                  className="w-full text-xs p-2 bg-white border border-gray-300 rounded-lg"
                />
              </div>
            )}

            <button 
              onClick={handleSendWhatsAppOrder}
              className="w-full bg-[#25D365] hover:bg-[#128C7E] text-white font-extrabold text-xs py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Send size={16} />
              <span>Enviar Pedido por WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}