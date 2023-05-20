import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { FeartureData , SingleCard } from './../constants/index';

function Experience() {
  return (
    <div className="experience-section sm:pt-[0rem]   pt-[28rem]   items-center flex flex-col justify-center
      bg-slate-800  rounded-b-[5rem]  
       sm:h-[54rem] h-[118rem] relative mt-[-7rem] z-[2] ">
        <img src={require("../img/Path 318.png")} alt="img" className="w-[5rem] mt-[3rem] sm:mt-[0rem] " />
        <div className="heading  flex flex-col items-center text-2rem ">
           <h5 className="text-3xl my-4">An Amazing App Can Change Your Life </h5>
           <h2 className="text-4xl   uppercase font-space font-medium">MUSIC EXPERIENCE</h2>
        </div>

        <div className="features flex flex-col gap-10 sm:gap-2 sm:flex-row text-center
         items-center justify-around mt-[3rem] w-[100%]  ">
            {FeartureData.map((data,index)=>(
              <SingleCard {...data} key={data.icon} index= {index} />
            ))}
        </div>
    </div>



  )
}

export default Experience