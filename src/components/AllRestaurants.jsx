import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import RestaurantCard from './RestaurantCard';

const allRestaurants = [
  {
    id: 6,
    name: 'Dominos Pizza',
    cuisine: 'Pizzas, Italian, Fast Food',
    rating: 4.4,
    time: '25-30 mins',
    price: '₹350 for two',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    offer: '60% off up to ₹120'
  },
  {
    id: 7,
    name: 'KFC',
    cuisine: 'Burgers, Fried Chicken',
    rating: 4.3,
    time: '30-35 mins',
    price: '₹400 for two',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    offer: 'Free delivery'
  },
  {
    id: 8,
    name: 'Meghana Foods',
    cuisine: 'Biryani, South Indian',
    rating: 4.6,
    time: '40-45 mins',
    price: '₹450 for two',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
    offer: '20% off'
  },
  {
    id: 9,
    name: 'Starbucks',
    cuisine: 'Beverages, Cafe',
    rating: 4.5,
    time: '15-20 mins',
    price: '₹400 for two',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    offer: 'Buy 2 Get 1 Free'
  },
  {
    id: 10,
    name: 'Taco Bell',
    cuisine: 'Mexican, Fast Food',
    rating: 4.2,
    time: '25-30 mins',
    price: '₹300 for two',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
    offer: '30% off up to ₹75'
  },
  {
    id: 11,
    name: 'Baskin Robbins',
    cuisine: 'Ice Cream, Desserts',
    rating: 4.4,
    time: '20-25 mins',
    price: '₹250 for two',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    offer: 'Free topping'
  },
  {
    id: 12,
    name: 'Wow Momo',
    cuisine: 'Momos, Chinese',
    rating: 4.1,
    time: '25-30 mins',
    price: '₹200 for two',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    offer: '40% off'
  },
  {
    id: 13,
    name: 'Behrouz Biryani',
    cuisine: 'Biryani, Mughlai',
    rating: 4.3,
    time: '35-40 mins',
    price: '₹500 for two',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
    offer: 'Free delivery'
  },
  {
    id: 14,
    name: 'Faasos',
    cuisine: 'Wraps, Rolls',
    rating: 4.0,
    time: '30-35 mins',
    price: '₹300 for two',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    offer: '50% off'
  },
  {
    id: 15,
    name: 'The Belgian Waffle Co.',
    cuisine: 'Waffles, Desserts',
    rating: 4.5,
    time: '25-30 mins',
    price: '₹350 for two',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop',
    offer: 'Buy 1 Get 1'
  }
];

const AllRestaurants = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-swiggy-dark mb-2">Restaurants near you</h2>
            <p className="text-swiggy-gray">Discover great food around you</p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-swiggy-orange transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="font-medium">Filters</span>
          </motion.button>
        </div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {['All', 'Fast Delivery', 'Rating 4.0+', 'Pure Veg', 'Offers', 'New on Swiggy'].map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-white border-2 border-gray-200 rounded-full hover:border-swiggy-orange hover:text-swiggy-orange transition-colors font-medium"
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-swiggy-orange text-white rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg"
          >
            Load More Restaurants
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AllRestaurants;
