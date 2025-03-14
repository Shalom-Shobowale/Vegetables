'use client'
import React, { createContext, useState, useEffect } from 'react';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(null);

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   setCart(savedCart);
  //   setCount(savedCart.length);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  //   setCount(cart.length);
  // }, [cart]);

  // Add product to the cart
  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const productExists = prevCart.some((item) => item.id === product.id);
  //     if (productExists) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  return (
    <CountContext.Provider value={{ count, cart, addToCart, setPopup, popup }}>
      {children}
    </CountContext.Provider>
  );
};
