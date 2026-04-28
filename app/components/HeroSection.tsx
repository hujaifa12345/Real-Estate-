"use client";
import { useState, useEffect } from "react"




const images = [
    "/Hero-section-img-1.jpg",
    "/Hero-section-img-2.png",
    "/Hero-section-img-3.jpg",
    "/Hero-section-img-4.jpg",
    "/Hero-section-img-5.jpeg",
    "/Hero-section-img-6.png",
    "/Hero-section-img-7.jpeg",
    "/Hero-section-img-8.jpg",
    "/Hero-section-img-9.jpg",
    "/Hero-section-img-10.jpg",
]


export default function HeroSection(){

    const [slide, setSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSlide((prev)=>(prev + 1)% images.length)
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);

    

    return(
        <main className="w-full h-200 overflow-hidden relative ">
            <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{transform: `translateX(-${slide * 100}%)`,}}
            >
                {images.map((img, i)=>(
                    <img 
                    key={i} 
                    src={img} 
                    alt={"Slider"} 
                    className="w-full h-screen object-cover flex-shrink-0"
                    />
                ))}
            </div>
        </main>
    )
}