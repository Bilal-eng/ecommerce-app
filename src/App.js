import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold text-lg">ShopEasy</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;