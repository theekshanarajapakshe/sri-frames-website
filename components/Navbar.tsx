
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">
            {BRAND_NAME.split(' ')[0]}<span className="text-brand-primary">{BRAND_NAME.split(' ')[1]}</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                location.pathname === item.path ? 'text-brand-primary' : 'text-slate-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-primary/25"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed left-0 right-0 z-60 bg-brand-dark/95 backdrop-blur-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: navRef.current ? `${navRef.current.offsetHeight}px` : '70px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`text-2xl font-display font-semibold transition-colors ${
                location.pathname === item.path ? 'text-brand-primary' : 'text-slate-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-semibold w-full text-center"
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
