 import './App.css';
 import { Experience ,Body, Feature ,Profile, Download , Signup , Aboutus, Contactus,  Login ,Header,Error, DownloadAds, Player, Search ,MusicPlayer ,Hero }from "./components";
 import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
 


function App() {
  return (

     <div className="App text-white overflow-hidden ">
        <Header/>
         <Outlet/>
        <Download/> 
        
     </div>
  );
}

export default App;




export const appRouter = createBrowserRouter ([

   {
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <Aboutus />,
           
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
   },

  
    {
      path: "/login",
      element: <Login />,
    },



    {
      path:"/signup",
      element:<Signup/>,
      errorElement:<Error/>
    },

])






// import React, { useState } from 'react';
 

// import { song , 
// import RecipeList from './components/RecipeList';
//    import { ReactPlayer } from 'react-player';
//  song1 , 
//     song2 , 
//     song3 , 
//     song4 , 
//     song5 , 
//     song6 , 
//   } from '../assets'

// function  Player() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const audioRef = React.useRef(null);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//   };

//   const handleTimeUpdate = () => {
//     const currentTime = audioRef.current.currentTime;
//     const duration = audioRef.current.duration;
//     const progressPercentage = (currentTime / duration) * 100;
//     setProgress(progressPercentage);
//   };

//   return (
//     <div className="bg-gray-100 p-4 rounded-md shadow-md">
//       <audio
//         ref={audioRef}
//         src={song1}
//         onTimeUpdate={handleTimeUpdate}
//       ></audio>
//       <button
//         onClick={togglePlay}
//         className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
//       >
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <div className="w-full h-2 bg-gray-200 mt-4">
//         <div
//           className="h-full bg-blue-500"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default  Player;







