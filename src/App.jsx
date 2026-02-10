import React from 'react';

import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Category from './components/sections/Category';
import Features from './components/sections/Features';
import ProductList from './components/sections/ProductList';
import Benefits from './components/sections/Benefits';
import Testimonial from './components/sections/Testimonial';
import Newsletter from './components/sections/NewsLetter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F9F9F7] font-saira">

      {/* --- NAVBAR (Sticky Top) --- */}
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Category />
        <Benefits />
        <ProductList />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;