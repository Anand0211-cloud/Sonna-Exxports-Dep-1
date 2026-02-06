import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Customization from './pages/Customization';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
