import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useCartStore } from './store/cartStore'; // adjust path based on your structure

function App() {
  const cart = useCartStore((state) => state.cart); // Zustand cart

  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-between relative">
        <Link to="/" className="font-bold text-lg">ShopEasy</Link>

        <div className="relative">
          <Link to="/cart" className="hover:underline">Cart</Link>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;