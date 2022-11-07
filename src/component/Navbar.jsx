import {React, useState, useEffect} from "react";

// Icon
import { 
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag
} from "react-icons/ai";
import {
    BsFillCartFill,
    BsFillSaveFill
} from "react-icons/bs";
import {
  TbTruckDelivery
}from "react-icons/tb";
import {
  MdHelp,
  MdFavorite
} from "react-icons/md";
import {
  FaWallet,
  FaUserFriends
} from "react-icons/fa";

function Navbar() {
  const [nav,setNav] = useState(false);

  // make when nav COMMING Cant scroll
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={()=> {setNav(!nav);}}/>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Chicken <span className="font-bold text-orange-600">Day</span>
        </h1>

    
      </div>

      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:2-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder="Search foods" className="bg-transparent p-2 focus:outline-none w-full"/>
      </div>

      {/* cart Button */}
      <button className="bg-orange-400 border-none text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2"/> Cart
      </button>

      {/* mobile menu */}
        {/* overlay */}
        {/* If nav true --> overlay ON MODE */}
        {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 left-0 top-0"></div>: ''}
      

      {/* side drawer menu */}
      {/* IF nav true --> nav at left side (hide) */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose size={30} className="absolute top-4 right-4 cursor-pointer" onClick={()=> {setNav(!nav);}}/>
        <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
            <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4"/>Favorites</li>
            <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4"/>Wallet</li>
            <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4"/>Help</li>
            <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4"/>Promotions</li>
            <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4"/>Best One</li>
            <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4"/>Invite Friends</li>
          </ul>
        </nav>
      </div>
        

    </div>
  );
}

export default Navbar;
