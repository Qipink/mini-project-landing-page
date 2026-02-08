import React from 'react';

import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Category from './components/sections/Category';
import Features from './components/sections/Features';
import ProductList from './components/sections/ProductList';
// import Testimonial from './components/sections/Testimonial';

function App() {
  return (
    <div className="w-full min-h-screen bg-white font-saira">

      {/* --- NAVBAR (Sticky Top) --- */}
      <Navbar></Navbar>
      <main>
        <Hero />
        <Features />
        <Category />
        <ProductList />
      </main>

    </div>
  );
}

export default App;