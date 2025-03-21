'use client'
import { useState } from "react";
import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";
export default function Circles() {
    const [color, setColor] = useState(1)
    return(
        <div className="flex justify-center my-4 gap-1 cursor-pointer">
            <p className="rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 text-sm"><PiLessThan /></p>
            <p className={`rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 ${color === 1 ? 'bg-background text-white': ''}`} onClick={()=>setColor(1)}>1</p>
            <p className={`rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 ${color === 2 ? 'bg-background text-white': ''}`} onClick={()=>setColor(2)}>2</p>
            <p className={`rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 ${color === 3 ? 'bg-background text-white': ''}`} onClick={()=>setColor(3)}>3</p>
            <p className={`rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 ${color === 4 ? 'bg-background text-white': ''}`} onClick={()=>setColor(4)}>4</p>
            <p className={`rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 ${color === 5 ? 'bg-background text-white': ''}`} onClick={()=>setColor(5)}>5</p>
            <p className={`rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 ${color === 6 ? 'bg-background text-white': ''} `} onClick={()=>setColor(6)}>6</p>
            <p className="rounded-full border border-gray-300 flex items-center justify-center w-10 h-10 text-sm font-bold"><PiGreaterThan /></p>
        </div>
    )
}