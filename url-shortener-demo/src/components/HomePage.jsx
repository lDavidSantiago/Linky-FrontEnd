import React, { useState, useEffect } from 'react';
import Clipboard2 from './InputCopy';

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
        <h1 className={`text-6xl font-bold text-white mb-4 text-glow ${animate ? 'scale-105 transition-transform duration-500' : ''}`}>
          <span className="opacity-0 animate-fade-in-1">Welcome </span>
          <span className="opacity-0 animate-fade-in-2">to </span>
          <span className="opacity-0 animate-fade-in-3">MiniURL</span>
        </h1>
        <p className={`text-gray-300 text-lg mb-8 opacity-0 animate-fade-in-5 ${animate ? 'scale-105 transition-transform duration-1000' : ''}`}>
          Shorten your links quickly and easily
        </p>

        <div className="flex justify-center space-x-4">
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="url"
              id="UserUrl"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
            />
            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all"
            >
              Enter URL
            </span>
          </label>
          <button className="btn btn-active">
            Submit
          </button>
        </div>
        <div className='mt-6'>
        <Clipboard2 />
        </div>
      </div>
    </div>
  );
}

export default HomePage;