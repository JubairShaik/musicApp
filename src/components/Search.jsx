import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import { images } from './../constants';
 

function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <>
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">

    
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute sm:top-[22rem] top-[20rem] left-[-47rem]"
        />
        <motion.img
          src={require("../img/d1.png")}
          alt=""
          className="w-[16rem] left-[2rem]  sm:left-[3rem] top-[26rem] absolute"
        />{" "}
        <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] sm:left-[7rem] left-[4rem]"
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.1,
            type: "ease-out",
          }}
          src={require("../img/d3.png")}
          alt=""
          className="w-[9rem]  top-[33rem]   absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[5rem] absolute"
        />
      </div>






      {/* right side */}
      <div className="right  hidden sm:flex z-20 items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>

        
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"/>
        </div>

        {/* paragraph */}
        <div className="detail  flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
            </span>

  
            </div>
            


        
  
          <MusicPlayer />
       
      </div>


      </div>


        {/* Search Bar for Mobile menu */}
   <div className="search sm:hidden pt-[15rem] 
    h-full px-[1rem] bg-[#0c2756]  pb-[5rem] my-[-15rem] z-[3] 
    flex items-center justify-between ">


   <div className=" 
   flex items-center  gap-4 flex-col justify-center h-[100%] pt-[4rem]">


 {/* Search */}
 <div className=" items-center gap-2 flex justify-center">
  <div>
  <input
  type="search"
  placeholder="Enter the keyword or URL"
  className=" w-[16.3rem] shrink-5 px-6 outline-none bg-[#020917] text-white rounded-xl p-2 h-[3.1rem]"
/>
  </div>
   
   {/* SearchIcon */}
   <div className=" flex cursor-pointer  items-center rounded-xl  bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[2.8rem]">
     <img
       src={require("../img/search.png")}
       alt=""
       className=" w-[1.7rem]"
     />
   </div>

 </div>


 {/* paragraph */}
 <div className="detail  flex flex-col mt-5 text-4xl">
   <span>Search Music by</span>
   <span>
     <b>Name or Direct URL</b>
   </span>
   <div>
   <MusicPlayer />
   </div>
   <span className="text-sm mt-3  text-[#4D586A]">
     Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
     eget. Vestibulum ullamcorper <br /> volutpat varius.
     </span>
      
 {/* tild icon */}
 <div className="tild mb-[10rem] flex justify-center mt-7 items-center w-[100%]">
 <img
   src={require("../img/Path 318.png")}
   alt=""
   className="w-[10rem]"/>
</div>

    


     </div>
     
     
      
      
     
    
     
     
    
</div>


   
   </div>

      
      



      </>
  );
}

export default Search;
