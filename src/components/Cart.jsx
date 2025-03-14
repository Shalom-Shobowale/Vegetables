"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { CountContext } from "../context/CountContext";
import CartTotal from "./CartTotal";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CountContext);

  return (
    <div className="w-[90%] mx-auto">
      {/* <h2>Your Cart</h2> */}
      {cart.length === 0 ? (
        <p className="text-background font-bold text-2xl">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between w-full px-8 py-4 border-b mb-4">
            <button className="border px-2 py-1" onClick={() => removeFromCart(item.id)}>x</button>
            <Image
              alt={item.title}
              src={item.image}
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <div className="text-center">
              <p className="text-pretty mb-3">{item.title}</p>
              <p className="text-sm font-medium text-textColors">{item.description}</p>
            </div>
            <p>${item.price}</p>
            <button className="border px-4 py-2">{item.quantity}</button>
            <p>${item.price * item.quantity}</p>
          </div>
        ))
      )}
      <CartTotal />
    </div>
  );
}
