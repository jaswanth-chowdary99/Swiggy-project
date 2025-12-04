import React from 'react';
import { motion } from 'framer-motion';
import RestaurantCard from './RestaurantCard';

const topRestaurants = [
  {
    id: 1,
    name: 'Pizza Hut',
    cuisine: 'Pizzas, Italian',
    rating: 4.3,
    time: '30-35 mins',
    price: '₹300 for two',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    offer: '50% off up to ₹100'
  },
  {
    id: 2,
    name: 'Burger King',
    cuisine: 'Burgers, American',
    rating: 4.2,
    time: '25-30 mins',
    price: '₹350 for two',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    offer: '20% off up to ₹50'
  },
  {
    id: 3,
    name: 'Paradise Biryani',
    cuisine: 'Biryani, Hyderabadi',
    rating: 4.5,
    time: '35-40 mins',
    price: '₹400 for two',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
    offer: 'Free delivery'
  },
  {
    id: 4,
    name: 'Chinese Wok',
    cuisine: 'Chinese, Asian',
    rating: 4.1,
    time: '30-35 mins',
    price: '₹250 for two',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    offer: '40% off up to ₹80'
  },
  {
    id: 5,
    name: 'Subway',
    cuisine: 'Sandwiches, Healthy',
    rating: 4.0,
    time: '20-25 mins',
    price: '₹300 for two',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    offer: 'Buy 1 Get 1'
  }
];

const TopRestaurants = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-swiggy-dark mb-2">Top restaurant chains</h2>
          <p className="text-swiggy-gray">Best food from top rated restaurants</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {topRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRestaurants;
