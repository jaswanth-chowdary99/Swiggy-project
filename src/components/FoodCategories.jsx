import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Pizza', emoji: '🍕', color: 'bg-red-100' },
  { name: 'Burger', emoji: '🍔', color: 'bg-yellow-100' },
  { name: 'Biryani', emoji: '🍛', color: 'bg-orange-100' },
  { name: 'Chinese', emoji: '🥡', color: 'bg-pink-100' },
  { name: 'Desserts', emoji: '🍰', color: 'bg-purple-100' },
  { name: 'Salad', emoji: '🥗', color: 'bg-green-100' },
  { name: 'Rolls', emoji: '🌯', color: 'bg-blue-100' },
  { name: 'Sandwich', emoji: '🥪', color: 'bg-indigo-100' },
];

const FoodCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-swiggy-dark mb-2">What's on your mind?</h2>
          <p className="text-swiggy-gray">Explore cuisines by category</p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide space-x-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className={`${category.color} w-32 h-32 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}>
                  <span className="text-5xl">{category.emoji}</span>
                </div>
                <p className="text-center mt-3 font-medium text-swiggy-dark">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
