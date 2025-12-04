import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FoodCategories from './components/FoodCategories';
import TopRestaurants from './components/TopRestaurants';
import AllRestaurants from './components/AllRestaurants';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FoodCategories />
              <TopRestaurants />
              <AllRestaurants />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
