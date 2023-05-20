import React from 'react'
 


function Download() {
    return (
        <div className="flex flex-col items-center justify-start 
        sm:px-[5rem] px-[1rem] bg-[#020917]   pt-[5rem] mt-[4rem] 
        z-[0] rounded-t-[5rem] ">
        
          {/* heading */}
          <div className="headline mt-7 flex flex-col items-center  text-[1.5rem] sm:text-[2rem]">
            <span>Download The Best Music</span>
            <span>
              <b>App Now!</b>
            </span>
            
            <span className="text-[1rem] text-gray-400 px-1  sm:px-[15rem] text-center mt-[1rem]">
              Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
              Vestibulum ullamcorper volutpat varius.
            </span>
              {/* tild icon or path icon */}
          <img src={require("../img/Path 318.png")} alt="" className="w-[3rem] mt-10" />
          </div>
       
        </div>
      );
}

export default Download