import React, { useState } from 'react';
import { X, User, Phone, Mail, MapPin, Lock } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister && (!formData.name || !formData.phone)) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }
    
    // Guardar usuario en el estado global y en localStorage
    const userToSave = {
      name: formData.name || formData.email.split('@')[0] || 'Cliente',
      email: formData.email,
      phone: formData.phone || '809-000-0000',
      address: formData.address || 'Santo Domingo, R.D.'
    };

    onLogin(userToSave);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative border border-gray-100 animate-in fade-in zoom-in duration-200">
        
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#3C3C3B] p-1 rounded-full transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Encabezado */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#F39453]/10 text-[#F39453] rounded-2xl flex items-center justify-center mx-auto mb-2 border border-[#F39453]/20">
            <User size={24} />
          </div>
          <h3 className="font-bigola text-2xl font-bold text-[#3C3C3B]">
            {isRegister ? 'Crear mi Cuenta' : 'Iniciar Sesión'}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {isRegister ? 'Completa tus datos para agilizar tus pedidos' : 'Ingresa a tu cuenta de Muebles Hábitat'}
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Nombre Completo *</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F39453]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Correo Electrónico *</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="email"
                required
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F39453]"
              />
            </div>
          </div>

          {isRegister && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Teléfono / WhatsApp *</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel"
                    required
                    placeholder="809-000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F39453]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Dirección de Envío</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Sector, Calle, No. Residencia / Ap."
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F39453]"
                  />
                </div>
              </div>
            </>
          )}

          <button 
            type="submit"
            className="w-full bg-[#F39453] hover:bg-[#9A5739] text-white font-bold text-xs py-3 rounded-xl shadow-md transition cursor-pointer mt-2"
          >
            {isRegister ? 'Registrarme e Ingresar' : 'Entrar a Mi Cuenta'}
          </button>
        </form>

        {/* Alternar Registro / Login */}
        <div className="mt-4 text-center border-t border-gray-100 pt-3">
          <button 
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs text-[#557B5B] hover:underline font-semibold cursor-pointer"
          >
            {isRegister ? '¿Ya tienes cuenta? Inicia Sesión' : '¿No tienes cuenta? Regístrate aquí'}
          </button>
        </div>

      </div>
    </div>
  );
}