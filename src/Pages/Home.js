import React from 'react';

function Home() {
  const bgStyle = {
    backgroundImage: 'url("/images/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    padding: '50px'
  };

  return (
    <div style={bgStyle}>
      <h1>🏠 Welcome to ShopEasy</h1>
      <p>Explore our amazing products and offers!</p>
    </div>
  );
}

export default Home;
