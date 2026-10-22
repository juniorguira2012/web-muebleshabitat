import React from 'react';
import { ShoppingBag, Search, Menu, X, User, Phone, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Header({ 
  totalItems, 
  onOpenCart, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  searchTerm, 
  setSearchTerm 
}) {
  
  // Función para desplazamiento suave con margen superior (offset)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    
    if (id === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Calculamos la posición del elemento restando la altura del menú sticky (110px)
        const headerOffset = 135;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header id="inicio" className="bg-white shadow-sm sticky top-0 z-40 w-full">
      
      {/* 1. BARRA SUPERIOR */}
      <div className="bg-[#3C3C3B] text-gray-200 text-xs py-2 px-4 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <a href="tel:18093715527" className="flex items-center gap-2 hover:text-[#F39453] transition">
            <Phone size={15} className="text-[#9BBDA0]" />
            <span className="font-medium">+1 (809) 371-5527</span>
          </a>

          <a href="mailto:contacto@muebleshabitat.com" className="hidden sm:flex items-center gap-2 hover:text-[#F39453] transition">
            <Mail size={15} className="text-[#9BBDA0]" />
            <span className="font-medium">contacto@muebleshabitat.com</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline font-medium text-gray-300 text-[11px] md:text-xs">
            Envíos a todo el país | Santo Domingo & Provincias
          </span>

          <a 
            href="https://wa.me/18093715527" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D365] hover:bg-[#128C7E] text-white font-semibold px-3 py-1 rounded-md text-[11px] md:text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm"
          >
            <MessageCircle size={14} />
            <span>WhatsApp Directo</span>
          </a>
        </div>
      </div>

      {/* 2. NAVBAR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#3C3C3B] hover:text-[#F39453] p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Logo />
        </div>

        {/* Menú Central Interactivo */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 font-semibold text-xs lg:text-sm text-[#3C3C3B]">
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, 'inicio')} 
            className="hover:text-[#F39453] transition cursor-pointer"
          >
            INICIO
          </a>
          <a 
            href="#nosotros" 
            onClick={(e) => scrollToSection(e, 'nosotros')} 
            className="hover:text-[#F39453] transition cursor-pointer"
          >
            NOSOTROS
          </a>
          <a 
            href="#categorias" 
            onClick={(e) => scrollToSection(e, 'categorias')} 
            className="hover:text-[#F39453] transition cursor-pointer"
          >
            CATEGORÍAS
          </a>
          <a 
            href="#financiamiento" 
            onClick={(e) => scrollToSection(e, 'financiamiento')} 
            className="hover:text-[#F39453] transition cursor-pointer text-[#529332]"
          >
            FINANCIAMIENTO
          </a>
          <a 
            href="#servicios" 
            onClick={(e) => scrollToSection(e, 'servicios')} 
            className="hover:text-[#F39453] transition cursor-pointer"
          >
            SERVICIOS
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => scrollToSection(e, 'contacto')} 
            className="hover:text-[#F39453] transition cursor-pointer"
          >
            CONTACTO
          </a>
        </nav>

        {/* Acciones de Usuario y Carrito */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 text-xs lg:text-sm font-medium text-[#3C3C3B] hover:text-[#F39453]">
            <User size={18} />
            <span>Mi Cuenta</span>
          </button>
          
          <button 
            onClick={onOpenCart}
            className="relative bg-[#3C3C3B] hover:bg-[#F39453] text-white p-2.5 rounded-full transition flex items-center justify-center cursor-pointer shadow-sm"
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F39453] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 3. BUSCADOR GLOBAL */}
      <div className="bg-gray-100 px-4 py-2 border-t border-gray-200">
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Buscar muebles, electrodomésticos, tenis..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-full py-1.5 pl-4 pr-10 text-xs md:text-sm focus:outline-none focus:border-[#F39453]"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#F39453] hover:bg-[#9A5739] text-white px-3.5 py-1 rounded-full text-xs transition cursor-pointer">
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* 4. MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, 'inicio')} 
            className="block font-semibold text-sm text-[#3C3C3B] py-1 hover:text-[#F39453]"
          >
            INICIO
          </a>
          <a 
            href="#nosotros" 
            onClick={(e) => scrollToSection(e, 'nosotros')} 
            className="block font-semibold text-sm text-[#3C3C3B] py-1 hover:text-[#F39453]"
          >
            NOSOTROS
          </a>
          <a 
            href="#categorias" 
            onClick={(e) => scrollToSection(e, 'categorias')} 
            className="block font-semibold text-sm text-[#3C3C3B] py-1 hover:text-[#F39453]"
          >
            CATEGORÍAS
          </a>
          <a 
            href="#financiamiento" 
            onClick={(e) => scrollToSection(e, 'financiamiento')} 
            className="block font-semibold text-sm text-[#529332] py-1 hover:text-[#F39453]"
          >
            FINANCIAMIENTO
          </a>
          <a 
            href="#servicios" 
            onClick={(e) => scrollToSection(e, 'servicios')} 
            className="block font-semibold text-sm text-[#3C3C3B] py-1 hover:text-[#F39453]"
          >
            SERVICIOS
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => scrollToSection(e, 'contacto')} 
            className="block font-semibold text-sm text-[#3C3C3B] py-1 hover:text-[#F39453]"
          >
            CONTACTO
          </a>
        </div>
      )}
    </header>
  );
}