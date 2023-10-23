'use client'

import React, { useState } from 'react';

const PriceCalculator = () => {
  // Define the initial state for style and size selections
  const [selectedStyle, setSelectedStyle] = useState('styleA');
  const [selectedSize, setSelectedSize] = useState('sizeBig');

  // Define the prices for each style and size
  const prices: {
    [style: string]: {
      [size: string]: number;
    };
  } = {
    styleA: {
      sizeBig: 100,
      sizeMedium: 75,
      sizeSmall: 50,
    },
    styleB: {
      sizeBig: 120,
      sizeMedium: 90,
      sizeSmall: 60,
    },
    styleC: {
      sizeBig: 130,
      sizeMedium: 100,
      sizeSmall: 70,
    },
  };
  
  // Calculate the final price based on selections
  const finalPrice = prices[selectedStyle][selectedSize];

  return (
    <div className="p-4 border rounded-lg shadow-md text-3xl w-1/3">
      <h2 className="text-2xl font-semibold">Price Calculator</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Choose a Style:</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            <option value="styleA">Style A</option>
            <option value="styleB">Style B</option>
            <option value="styleC">Style C</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Choose a Size:</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="sizeBig">Big</option>
            <option value="sizeMedium">Medium</option>
            <option value="sizeSmall">Small</option>
          </select>
        </div>
      </form>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">估价</h3>
        <p className="text-xl font-bold text-indigo-600">${finalPrice}</p>
      </div>
    </div>
  );
};

export default PriceCalculator;
