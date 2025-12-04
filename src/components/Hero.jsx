import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-swiggy-orange opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-swiggy-orange opacity-10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-swiggy-dark mb-6 leading-tight"
            >
              Order food from your
              <span className="text-swiggy-orange"> favourite </span>
              restaurants
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-swiggy-gray mb-8"
            >
              Get your food delivered in minutes. Fresh, hot, and delicious!
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="flex items-center bg-white rounded-full shadow-xl p-2 pr-4 hover:shadow-2xl transition-shadow">
                <input
                  type="text"
                  placeholder="Search for restaurants and food"
                  className="flex-1 px-6 py-4 text-lg outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-swiggy-orange text-white p-4 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Search className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: '1000+', label: 'Restaurants' },
                { number: '50K+', label: 'Orders' },
                { number: '4.8★', label: 'Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-swiggy-orange">{stat.number}</div>
                  <div className="text-sm text-swiggy-gray mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
                alt="Delicious Food"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Fast Delivery</div>
                  <div className="text-xs text-swiggy-gray">30 mins</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Top Rated</div>
                  <div className="text-xs text-swiggy-gray">4.8 Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
