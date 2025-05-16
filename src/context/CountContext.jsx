'use client'
import React, { createContext, useState, useEffect } from 'react';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(null);
  return (
    <CountContext.Provider value={{ count, cart, addToCart, setPopup, popup }}>
      {children}
    </CountContext.Provider>
  );
};
