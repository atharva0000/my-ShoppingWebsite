import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.js';
import Products from './Pages/product.js';
import Wishlist from './Pages/Wishlist.js';
import Cart from './Pages/Cart.js';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (item) => {
    if (!cartItems.find(i => i.id === item.id)) {
      setCartItems([...cartItems, item]);
    }
  };

  const addToWishlist = (item) => {
    if (!wishlistItems.find(i => i.id === item.id)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
        <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
        <Link to="/products" style={{ margin: '10px', color: 'white' }}>Products</Link>
        <Link to="/wishlist" style={{ margin: '10px', color: 'white' }}>Wishlist ({wishlistItems.length})</Link>
        <Link to="/cart" style={{ margin: '10px', color: 'white' }}>Cart ({cartItems.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path="/wishlist" element={<Wishlist items={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
        <Route path="/cart" element={<Cart items={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
