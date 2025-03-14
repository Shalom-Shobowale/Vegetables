'use client'
import React, { useState, useEffect } from 'react';
export default function Countfunc({ start, end, intervalTime }) {
  const [count, setCount] = useState(start); // Initialize the count with the start value.

  useEffect(() => {
    if (start < end) { // Ensure counting happens when start is less than end
      const intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= end) {
            clearInterval(intervalId); // Stop the counter when it reaches the end value.
            return end; // Ensure the count stops at the end value.
          }
          return prevCount + 1; // Increment the count by 1.
        });
      }, intervalTime); // Update every `intervalTime` milliseconds.

      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts.
    }
  }, [start, end, intervalTime]);

  return <h1 className="text-3xl mb-2">{count}</h1>; // Display the current count.
}
