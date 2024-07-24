import React, { useState } from 'react';

const HamburgerButton = ({toggleMenu, isOpen}) => {


  return (
    <button
      onClick={toggleMenu}
      className="relative w-8 h-6 flex flex-col justify-between items-center group "
    >
      <div
        className={`bg-black dark:bg-gray-300 rounded-full h-1 w-full transform transition duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}
      />
      <div
        className={`bg-black dark:bg-gray-300 rounded-full h-1 w-full transition duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <div
        className={`bg-black dark:bg-gray-300 rounded-full h-1 w-full transform transition duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}
      />
    </button>
  );
};

export default HamburgerButton;