'use client'
import { useState } from "react"
import { FaHeart } from "react-icons/fa";
export default function Heart(){
    const [color, setColor] = useState('text-white')
    const colorChange = ()=>{
        setColor(prevColor => prevColor === 'text-white' ? 'text-red-500' : 'text-white');
    }
     return(
        <p className={`w-10 h-10 rounded-full bg-background flex justify-center items-center ${color}`} onClick={colorChange}>
            <FaHeart />
        </p>
     )
}