'use client'
import { useState, useEffect } from "react";

export default function Date({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let day = parseInt(Math.floor(total_hours / 24));

    let seconds = total_seconds % 60;
    let minutes = total_minutes % 60;
    let hours = total_hours % 24;

    return (
      <>
        <span className="mr-12">{day}</span>
        <span className="mr-12">{hours}</span>
        <span className="mr-12">{minutes}</span>
        <span className="mr-12">{seconds}</span>
      </>
    );
  };

  return (
    <div className="text-4xl font-medium text-background">
      {getFormattedTime(time)}
    </div>
  );
}
