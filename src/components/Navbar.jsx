import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collections', path: '/shop' },
    { name: 'Archive', path: '#' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-luxury-black hover:opacity-60 transition-opacity"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>

        {/* Brand */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 group">
          <h1 className={`${isScrolled ? 'text-luxury-black' : 'text-white'} font-serif text-2xl lg:text-3xl tracking-[0.5em] font-bold uppercase transition-all duration-700`}>
            Standard <span className="italic font-light opacity-60 group-hover:opacity-100 transition-opacity">Furniture</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-16">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[9px] uppercase tracking-[0.5em] font-bold transition-colors ${
                isScrolled ? 'text-luxury-black hover:text-luxury-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-8 lg:gap-10">
          <button className={`${isScrolled ? 'text-luxury-black' : 'text-white'} hover:opacity-50 transition-opacity`}>
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`flex items-center gap-2 transition-opacity relative ${isScrolled ? 'text-luxury-black hover:opacity-50' : 'text-white hover:opacity-80'}`}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartItems.length > 0 && (
              <span className={`absolute -top-1.5 -right-1.5 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold ${isScrolled ? 'bg-luxury-black' : 'bg-luxury-gold'}`}>
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-white z-[60] px-8 py-12 lg:hidden flex flex-col"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-12 hover:opacity-50 transition-opacity"
              >
                <X size={24} strokeWidth={1} />
              </button>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      to={link.path}
                      className="font-serif text-3xl italic tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-neutral-100 italic font-serif text-neutral-400 text-sm">
                Standard Furniture — 2026 Archive
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
