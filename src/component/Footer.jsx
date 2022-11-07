import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className="max-w-[1640px] mx-auto overflow-hidden grid grid-cols-2 md:grid-cols-4 px-4 py-12 bg-black text-gray-200 gap-6">
            <div className="flex flex-col">
                <h1 className="text-2xl mb-2 sm:text-3xl lg:text-4xl">
                Best <span className="font-bold">Eats</span>
                </h1>
                <p className="text-gray-400">Always get the best food</p>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-200 font-semibold mb-2">Service</p>
                <Link className="text-gray-400" to={'#'}>Service</Link>
                <Link className="text-gray-400" to={'#'}>Blog</Link>
                <Link className="text-gray-400" to={'#'}>About Us</Link>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-200 font-semibold mb-2">Our Store</p>
                <Link className="text-gray-400" to={'#'}>Shopee</Link>
                <Link className="text-gray-400" to={'#'}>Tokopedia</Link>
                <Link className="text-gray-400" to={'#'}>Lazada</Link>
            </div>
            <div className="w-[100%]">
                <form className="flex flex-col items-start justify-center">
                    <input placeholder="Example@gmail.com" className="w-full bg-transparent border-gray-400 border-2 rounded-full text-gray-400 px-3 py-1" type="email" />
                    <button className="border-gray-400 mt-5 ml-2 rounded-full active:bg-slate-200 active:text-black avitve:text-semibold">SUBMIT</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer;