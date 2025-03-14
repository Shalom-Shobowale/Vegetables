'use client';
import { useState, useEffect } from "react";
import { CountContext } from "../context/CountContext";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  const [count, setCount] = useState(0); // Number of items in the cart
  const [popup, setPopup] = useState(false); // For controlling the popup visibility
  const [cart, setCart] = useState([]); // Cart state, holds the added products

  // To add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.some((item) => item.id === product.id);
      if (productExists) {
        // If product exists in cart, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist in the cart, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // To remove items from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Keep count updated when the cart changes
  useEffect(() => {
    setCount(cart.length);
  }, [cart]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration if necessary
      once: true,     // Set to true to animate only once
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <CountContext.Provider value={{ count, setCount, popup, setPopup, cart, setCart, addToCart, removeFromCart }}>
          <Navbar />
          <div>{children}</div> {/* Your page content will go here */}
          <Footer />
        </CountContext.Provider>
      </body>
    </html>
  );
};

export default Layout;
