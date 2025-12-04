import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ShoppingBag, User, MapPin } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Location */}
          <div className="flex items-center space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <h1 className="text-3xl font-bold text-swiggy-orange">Swiggy</h1>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="hidden md:flex items-center space-x-2 cursor-pointer group"
            >
              <MapPin className="w-5 h-5 text-swiggy-gray group-hover:text-swiggy-orange transition-colors" />
              <span className="text-sm font-medium text-swiggy-dark border-b-2 border-transparent group-hover:border-swiggy-orange transition-all">
                Bangalore
              </span>
              <ChevronDown className="w-4 h-4 text-swiggy-gray group-hover:text-swiggy-orange transition-colors" />
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="flex items-center space-x-2 text-swiggy-gray hover:text-swiggy-orange transition-colors"
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">Search</span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="flex items-center space-x-2 text-swiggy-gray hover:text-swiggy-orange transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">Cart</span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="flex items-center space-x-2 text-swiggy-gray hover:text-swiggy-orange transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Sign In</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-swiggy-gray hover:text-swiggy-orange"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
