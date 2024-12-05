import React, { useState, useEffect } from 'react';

function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      // Reset animation after 1 second
      setTimeout(() => setAnimate(false), 1000);
    }, 5000); // Ejecutar cada 20 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className={`text-6xl font-bold text-white mb-4 text-glow`}>
          <span className="opacity-0 animate-fade-in-1">Welcome </span>
          <span className="opacity-0 animate-fade-in-2">to </span>
          <span className="opacity-0 animate-fade-in-3">Linkly</span>
        </h1>
        <p className={`text-gray-300 text-lg mb-8 opacity-0 animate-fade-in-5 ${animate ? 'scale-105 transition-transform duration-1000' : ''}`}>
          Shorten your links quickly and easily
        </p>
      </div>
    </div>
  );
}

export default HomePage;