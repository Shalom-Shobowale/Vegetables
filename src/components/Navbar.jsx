"use client";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import React, { useContext, useState, useEffect } from "react";
import { CountContext } from "../context/CountContext";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

// Throttle function to optimize scroll event
const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export default function Navbar() {
  const { count } = useContext(CountContext);
  const [isSticky, setIsSticky] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const quarterPageHeight = pageHeight / 4; // Change this to 1/4 of the page height

      // Check if the scroll position has reached the quarter point of the page
      if (scrollPosition > quarterPageHeight) {
        setIsSticky(true); // Make sticky when scrolling past a quarter of the page
      } else {
        setIsSticky(false); // Reset sticky if not
      }
    }, 200); // Throttle the scroll event to improve performance

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-6 md:px-20 py-4 bg-white z-10 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""}`}
    >
      <Link href="/home" className="text-background font-bold text-2xl">
        VEGEFOODS
      </Link>
      <nav>
        <ul className={`flex md:items-center gap-8 text-[11px] tracking-[2px] flex-col md:flex-row bg-foreground md:bg-transparent md:h-16 md:p-0 p-5 absolute md:top-0 top-16 w-full md:w-[38%] right-0 z-20 ${menu ? "top-16" : "top-[-490px]"}`}>
          <li><Link href="/home" onClick={()=>setMenu(!menu)}>HOME</Link></li>
          <li><Link href="/about" onClick={()=>setMenu(!menu)}>ABOUT</Link></li>
          <li><Link href="/product" onClick={()=>setMenu(!menu)}>PRODUCT</Link></li>
          <li><Link href="/contact" onClick={()=>setMenu(!menu)}>CONTACT US</Link></li>
          <li>
            <Link href="/cart" className={`flex items-center cursor-pointer ${isSticky?" bg-background px-4 py-6 text-foreground" :''}`}>
              <IoCart /> <p className="text-xs">[{count}]</p>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="md:hidden text-2xl cursor-pointer flex text-background" onClick={()=> setMenu(!menu)}>{menu ? <IoMdClose />: <FaBars />}</p>
    </header>
  );
}
