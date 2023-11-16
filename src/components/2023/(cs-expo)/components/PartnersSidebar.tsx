'use client';
import React, { useState, useEffect } from 'react';

const CircularSidebar = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [showArrowColor, setShowArrowColor] = useState('coral-pink');

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName} Button`);
  
    const sectionElement = document.getElementById(buttonName.toLowerCase());

    if (sectionElement) {
      const scrollPosition = sectionElement.offsetTop;

      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setShowArrow(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center">
      {showArrow && (
        <div className="text-coral-pink font-extrabold text-8xl cursor-pointer"
          onClick={handleScrollUp}
          onMouseEnter={() => setShowArrowColor('black')}
          onMouseLeave={() => setShowArrowColor('coral-pink')}
        >
          <div className={`w-15 h-20 text-${showArrowColor} transition duration-300 ease-in-out`}>^</div>
        </div>
      )}
      <div className="mr-10 ml-10 flex flex-col items-center text-white">
        {['Major', 'Minor', 'Media'].map((buttonName, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-coral-pink rounded-full mb-2 flex items-center justify-center cursor-pointer"
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularSidebar;
