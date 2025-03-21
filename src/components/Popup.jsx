'use client';
import Image from "next/image";
import { LuPlus, LuMinus } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";
import React, { useContext, useState } from "react";
import { CountContext } from "../context/CountContext";
import product from "../app/product.json";

export default function Popup() {
  const { popup, setPopup, addToCart } = useContext(CountContext);
  const [count, setCount] = useState(0);

  if (!popup) return null;

  const handleIncrease = () => {
    if (popup.inStock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleRemove = () => {
    setCount(0);
    setPopup(null); // Close popup
  };

  const handleButtonClick = () => {
    if (popup.inStock && count > 0) {
      // Add the specific amount of the product to the cart
      addToCart({ ...popup, quantity: count });
      setPopup(null); // Close popup after adding to cart
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div className="bg-[#f8f9fa] p-10 rounded-lg shadow-lg w-[85%] flex gap-6">
        <p className="absolute right-[110px] top-20 text-xl cursor-pointer" onClick={handleRemove}>
          ❌
        </p>
        <div className="bg-white shadow-inner p-5 rounded-md">
          <Image
            alt={`Image of ${product.title}`}
            src={popup.image}
            width={500}
            height={500}
          />
        </div>
        <div className="bg-white shadow-inner w-[50%] h-52 p-8 rounded-md flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">{popup.title}</h1>
            <p className="font-medium">{popup.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>
          <p className="text-background my-3">${popup.price}.00</p>
          <p>Price is given for fruit per bunch</p>
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={handleRemove}
              className="hover:bg-red-500 hover:text-white py-1 px-3 flex gap-4 items-center text-red-500 rounded-sm"
            >
              <FiTrash />
              <p>Remove</p>
            </button>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleIncrease}
                disabled={!popup.inStock}
                className={`p-1 text-2xl ${
                  !popup.inStock ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                }`}
              >
                <LuPlus />
              </button>
              <p>{count}</p>
              <button onClick={handleDecrease} className="p-1 text-2xl">
                <LuMinus />
              </button>
            </div>
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 bg-background text-white rounded-md"
              disabled={count <= 0 || !popup.inStock} // Disable if count is 0 or out of stock
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
