import React from 'react';

const PRODUCTS = [
  { id: 1, name: 'Shoes', price: '$49', image: '/images/shoes.jpeg' },
  { id: 2, name: 'Watch', price: '$99', image: '/images/watch.jpeg' },
  { id: 3, name: 'Backpack', price: '$39', image: '/images/backpack.jpg' },
];

function Products({ addToCart, addToWishlist }) {
  const bgStyle = {
    backgroundImage: 'url("/images/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
    color: 'white'
  };

  return (
    <div style={bgStyle}>
      <h1>🛍️ Products</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {PRODUCTS.map(product => (
          <div key={product.id} style={{ border: '1px solid white', padding: '10px', backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <img src={product.image} alt={product.name} width="150" height="150" />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)} style={{ marginLeft: '10px' }}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
