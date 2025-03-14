'use client'
import { useState, useEffect } from "react";
import Button from "../components/Botton";

export default function Landing({description, bgImage}){
    const images = [
        'bgImage.png',
        'about.png',
    ]

     // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  });
    return(
        <div  style={{backgroundImage: `url(${images[currentImageIndex]})`,transition: 'background-image 1.5s ease-in-out'}} className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
            <p className="text-8xl text-foreground font-Amatic" data-aos="fade-up" >{description}</p>
            <p className="uppercase text-center text-[11px] tracking-[4px] text-white font-light my-5" data-aos="fade-up" data-aos-delay="150">We deliver organic vegetables &amp; fruits</p>
            <div data-aos="fade-up" data-aos-delay="300">
              <Button name="View Details"/>
            </div>
        </div>
    );
}