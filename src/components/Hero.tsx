import React, { useState } from 'react';
import Snackbar from './Snackbar';

const Hero = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setIsSnackbarVisible(true);
  };

  const handleEyadButtonClick = () => {
    showSnackbar('hello world');
  };

  const handleDismissSnackbar = () => {
    setIsSnackbarVisible(false);
  };

  return <section id="home" className="relative h-[80vh] w-full bg-black">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      opacity: 0.7
    }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Savory <span className="text-amber-500">Delights</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl">
          Experience culinary excellence with our handcrafted dishes made from
          the finest ingredients
        </p>
        <div className="flex space-x-4">
          <a href="#menu" className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors">
            View Menu
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
            Reserve Table
          </a>
          <button
            onClick={handleEyadButtonClick}
            className="bg-sky-600 text-white px-6 py-3 rounded-md font-medium hover:bg-sky-700 transition-colors"
          >
            eyad
          </button>
        </div>
      </div>
      <Snackbar
        message={snackbarMessage}
        isVisible={isSnackbarVisible}
        onDismiss={handleDismissSnackbar}
      />
    </section>;
};
export default Hero;