import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import TrustFeatures from './components/TrustFeatures';
import AboutUs from './components/AboutUs';
import BrandBanner from './components/BrandBanner';
import Footer from './components/Footer';
import { initialProducts, categoriesList } from './data/products';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false); // Modal de autenticación
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  // Cargar usuario guardado en localStorage al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem('habitat_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('habitat_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('habitat_user');
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const filteredProducts = initialProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
      
      {/* 1. HEADER / INICIO */}
      <Header 
        totalItems={totalItems} 
        onOpenCart={() => setCartOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* MODAL DE AUTENTICACIÓN */}
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        onLogin={handleLogin} 
      />

      {/* CARRITO Y CHECKOUT A WHATSAPP */}
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        cart={cart} 
        onUpdateQty={updateQty} 
        currentUser={currentUser}
        onOpenAuth={() => {
          setCartOpen(false);
          setAuthOpen(true);
        }}
      />

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 py-6 w-full flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Barra Lateral de Categorías */}
        <Sidebar 
          categories={categoriesList} 
          mobileMenuOpen={mobileMenuOpen}
          onSelectCategory={(cat) => {
            setSearchTerm(cat);
            setMobileMenuOpen(false);
          }}
        />

        {/* Zona Central */}
        <main className="md:col-span-3 space-y-8">
          
          {/* Si NO hay término de búsqueda activo, mostramos el Banner y la Cuadrícula UNA SOLA VEZ */}
          {!searchTerm && (
            <>
              <HeroBanner />

              {/* ÚNICA APARICIÓN DE CATEGORÍAS */}
              <div id="categorias" className="scroll-mt-28">
                <CategoryGrid onSelectCategory={(cat) => setSearchTerm(cat)} />
              </div>
            </>
          )}

          {/* Listado de Productos */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#3C3C3B]">
                {searchTerm ? `Resultados para: "${searchTerm}"` : 'Productos populares de temporada'}
              </h2>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-[#F39453] hover:text-[#9A5739] underline font-bold cursor-pointer transition"
                >
                  Ver todos
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                <p className="text-gray-500 font-medium">No se encontraron productos con ese criterio.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-3 text-xs bg-[#3C3C3B] hover:bg-[#F39453] text-white px-4 py-2 rounded-lg cursor-pointer transition"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Carrito Lateral */}
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        cart={cart} 
        onUpdateQty={updateQty} 
      />

      {/* 3. SERVICIOS (Garantías) */}
      <div id="servicios" className="scroll-mt-28">
        <TrustFeatures />
      </div>

      {/* 4. NOSOTROS (Misión / Visión) */}
      <div id="nosotros" className="scroll-mt-28">
        <AboutUs />
      </div>

      {/* 5. FINANCIAMIENTO (Banner de Marca) */}
      <div id="financiamiento" className="scroll-mt-28">
        <BrandBanner />
      </div>

      {/* 6. CONTACTO (Footer) */}
      <div id="contacto" className="scroll-mt-28">
        <Footer />
      </div>

    </div>
  );
}