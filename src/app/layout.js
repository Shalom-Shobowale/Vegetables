'use client';
import { useState, useEffect } from "react";
import { CountContext } from "../context/CountContext";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  const [count, setCount] = useState(0); 
  const [popup, setPopup] = useState(false); 
  const [cart, setCart] = useState([]); 

 
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.some((item) => item.id === product.id);
      if (productExists) {
        
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    setCount(cart.length);
  }, [cart]);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <CountContext.Provider value={{ count, setCount, popup, setPopup, cart, setCart, addToCart, removeFromCart }}>
          <Navbar />
          <div>{children}</div> 
          <Footer />
        </CountContext.Provider>
      </body>
    </html>
  );
};

export default Layout;
