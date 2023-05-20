import React from 'react';
import { Link } from "react-router-dom";

import  MuzicLogo from "../img/MuzicLogo.png";


const Header = () => {
       
    return (
        <div className="header bg-slate-900  flex items-center bg-slate sm:px-[7rem]  px-[2rem]   p-8  justify-between">
             
             <div className="flex  font-nunito items-center justify-center  font-bold text-pink-600 text-[1.5rem] sm:text-[2rem]">
             <img  className="w-[2.4rem] sm:w-[4rem]" src={MuzicLogo}  alt="" />
             <span>usic</span>
             </div>
           
             <div className="flex" >  
             <ul className="list-none flex-row text-lg font-bold flex  gap-[1rem] sm:gap-[2rem]">
             <Link   to="/signup"> 
                <li className="bg-rose-700 sm:px-6 px-4 sm:py-2 py-1  text-sm  sm:text-medium rounded-md font  text-white">Sign up</li>
             </Link>
             <Link   to="/login">
                <li className="bg-pink-700 sm:px-6 px-4 sm:py-2  py-1 rounded-md font text-sm  sm:text-medium  text-white">Login </li>
             </Link> 
             </ul>
              </div>
        </div>
    )
}

export default Header;
