import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

const RestaurantCard = ({ restaurant, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Offer Badge */}
        {restaurant.offer && (
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-lg"
          >
            <span className="text-sm font-bold text-swiggy-orange">{restaurant.offer}</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-swiggy-dark mb-1 group-hover:text-swiggy-orange transition-colors">
          {restaurant.name}
        </h3>
        <p className="text-sm text-swiggy-gray mb-3">{restaurant.cuisine}</p>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-green-600 text-green-600" />
            <span className="text-sm font-semibold text-swiggy-dark">{restaurant.rating}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-swiggy-gray">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{restaurant.time}</span>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-100">
          <span className="text-sm text-swiggy-gray">{restaurant.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
