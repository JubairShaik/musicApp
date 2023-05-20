import React from 'react';
import Player  from './Player';
import MusicPlayer from './MusicPlayer';
import Tilt  from 'react-parallax-tilt';
import { Link } from "react-router-dom";

 
function Hero() {
  return (
   <>
     <div className=" 
     bg-[#081730] px-5 sm:px-14 -mb-9 flex flex-col sm:flex-row items-center  justify-start
       rounded-b-[5rem] sm:h-[36rem] h-[30rem] z-20  w-[100%] relative  ">

        {/* left side? */}
        <div className="flex flex-col  mt-5 items-start sm:mx-5   leading-[2.9rem] sm:leading-[4.3rem] 
         justify-center h-[90%]">
            <h2 className="text-rose-500  text-center  font-bold
             text-[40px]
             sm:text-[60px] "
            
            >Experience the 
            
            <br  />
             <span className="text-pink-500"  >  Best</span>
             
             
              Quality Music  
             
             </h2>
            
               
            
            <div className=" leading-5 sm:leading-7 my- sm:my-10">
            <span className="sm:text-3xl text-rose-300  text-start  ">Download our Android and IOS Versions</span>
            <h3 className="max-w-[28rem] my-6">
            My Music is a digital music, podcast,
             and video service that gives 
            you access to millions of songs and
             other content from
             creators all over the world
              Basic functions such as
              playing music are totally 
              free.
            </h3>

          <div className="w-[16rem]  flex justify-center items-center list-none" >
          <Link   to="/about">
            <li className="bg-pink-700 sm:px-6 px-4 sm:py-2  py-1 rounded-md font text-sm  
            sm:text-medium  text-white">Click Here To Get Started </li>
            </Link> 
            <h2>Voter</h2>
          </div>

         

            </div>


 
            
         
      </div>
            





    {/* rightside  */}
   <div className="images relative sm:w-[70%]"> 

        <img src={require("../img/backgraphics.png")}
         alt="img"
         className="absolute top-[-8rem]  left-[22rem]" />

         {/* -mt-9 -ml-10 */}
         <img src={require("../img/p 1.png")}
         alt="img"
         className="absolute top-[-15rem] h-[34rem] left-[13rem]" />


         <img src={require("../img/p 2.png")}
         alt="img"
         className="absolute top-[94px] w-[174px] left-[235px]" />



         <img src={require("../img/p 3.png")}
         alt="img"
         className="absolute top-[12rem] w-[5rem] left-[13rem]" />



         <img src={require("../img/p 4.png")}
         alt="img"
         className="absolute top-[12rem] w-[5rem] left-[12.5rem]" />

        </div>        
     </div>




  
     <div className="images   flex sm:hidden  "> 
     
     
        {/* -mt-9 -ml-10 */}
        <img src={require("../img/p 1.png")}
        alt="img"
        className="absolute  z-10 top-[39rem]  h-[35rem] left-[3rem]" />


        <img src={require("../img/p 2.png")}
        alt="img"
        className="absolute  z-10 top-[60.4rem] h-[114px] left-[4.6rem]" />



        <img src={require("../img/p 3.png")}
        alt="img"
        className="absolute z-10   top-[67rem] w-[5rem] left-[2.9rem]" />



        <img src={require("../img/p 4.png")}
        alt="img"
        className="absolute z-10 top-[67rem] w-[5rem] left-[2.5rem]" />

        </div>
   

         
       


        </>
     
    
  )
}

export default Hero