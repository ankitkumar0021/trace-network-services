'use client';
import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="flex items-center gap-4 mt-4">
        <div className="flex border border-black/50 text-lg font-medium h-14">
            <button onClick={decreaseQty} className="w-12 flex items-center justify-center bg-gray-200 hover:bg-primary hover:text-white" >–</button>
            <div className="w-[1px] bg-black/50" />
            <div className="w-12 flex items-center justify-center bg-gray-200">{quantity}</div>
            <div className="w-[1px] bg-black/50" />
            <button onClick={increaseQty} className="w-12 flex items-center justify-center bg-gray-200 hover:bg-primary hover:text-white" > + </button>
        </div>
      <button onClick={addToCart} className="bg-primary w-fit text-white font-semibold py-4 px-10 transition transform hover:scale-105 duration-300 cursor-pointer" >
        Add to Cart
      </button>
    </div>
  );
};

export default QuantitySelector;
