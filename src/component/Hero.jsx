import React from "react";
import image1 from './../image/food.jpg';

function Hero() {
    return(
        <div className="max-w-[1640px] mx-auto p-4 ">
            <div className="relative max-h-[500px]">
                {/* overlay */}
                <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Our <span className="text-orange-500">Best</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-500">Food</span> Delivered</h1>
                </div>

            <img className="w-full max-h-[500px] object-cover" src={image1} alt="/" />
            </div>
        </div>
    )
}

export default Hero;

