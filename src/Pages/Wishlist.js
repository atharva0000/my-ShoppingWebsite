import React from 'react';

function Wishlist({ items, removeFromWishlist }) {
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
      <h1>💖 Your Wishlist</h1>
      {items.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px' }}>
          {items.map(item => (
            <div key={item.id} style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '10px' }}>
              <img src={item.image} alt={item.name} width="120" height="120" />
              <p>{item.name} - {item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
