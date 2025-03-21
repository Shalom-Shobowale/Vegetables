"use client";
import Image from "next/image";
import { HiBars3, HiMiniShoppingCart } from "react-icons/hi2";
import Heart from "./Heart";
import React, { useContext } from "react";
import { CountContext } from "../context/CountContext";
import Popup from "./Popup";

export default function Card({ limit = 8, items = [] }) {
  const { addToCart, setPopup } = useContext(CountContext);

  const handleButtonClick = (item) => {
    addToCart(item); // Add item to the cart
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[90%] mx-auto gap-y-9">
        {items.slice(0, limit).map((item, id) => (
          <div
            key={id}
            className="md:w-64 h-72 bg-cover border relative group hover:rounded-md hover:shadow-inner flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay={id * 200}
          >
            <Image
              alt={`Image of ${item.title || "product"}`}
              src={item.image || "/default-image.png"}
              width={250}
              height={300}
              className="object-contain"
              priority
            />
            <div className="mt-4">
              <p className="font-Poppins mb-2 text-center text-sm uppercase">
                {item.title || "Untitled"}
              </p>
              <div className="flex items-center space-x-2 text-base justify-center">
                <p
                  className={`${
                    item.discount
                      ? "line-through text-gray-400"
                      : "text-background"
                  } group-hover:opacity-0 transition-opacity duration-300`}
                >
                  ${item.price || "0"}.00
                </p>
                {item.discount && (
                  <p className="text-background group-hover:opacity-0 transition-opacity duration-300">
                    ${item.discount}.00
                  </p>
                )}
              </div>
            </div>
            <div
              className={`bg-red-4 h-full w-full absolute duration-300 top-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center ${
                item.price || item.discount ? "hover:opacity-0" : "opacity-100"
              }`}
            >
              <Image
                alt={`Image of ${item.title || "product"}`}
                src={item.image || "/default-image.png"}
                width={250}
                height={300}
                className="w-64 object-contain"
              />
              <div className="flex justify-center mt-8 text-white gap-1">
                <p
                  className="w-10 h-10 rounded-full cursor-pointer bg-background flex justify-center items-center"
                  onClick={() => setPopup(item)} // Open popup to view details
                  aria-label="View details"
                >
                  <HiBars3 />
                </p>
                <p
                  className="w-10 h-10 rounded-full bg-background flex justify-center items-center cursor-pointer"
                  onClick={() => handleButtonClick(item)} // Add item to cart
                  aria-label="Add to cart"
                >
                  <HiMiniShoppingCart />
                </p>
                <Heart aria-label="Add to favorites" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Popup />
    </div>
  );
}
