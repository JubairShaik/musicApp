import React,{useState} from 'react'
import useSound from 'use-sound'
import { song , 
  song1 , 
  song2 , 
  song3 , 
  song4 , 
  song5 , 
  song6 , 
} from '../assets'
import { FaPlay, FaPause } from 'react-icons/fa';
import ReactPlayer from 'react-player';


const songs = [
    song,
    song1 , 
    song2 , 
    song3 , 
    song4 , 
    song5 , 
    song6 , 
];




const Player = () => {


  
  // const [playSound] = useSound(mySound)
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  
  function handleClick() {

    {!isPlaying ? setIsPlaying(true):setIsPlaying(false)}
    
  }



  function playNextSong() {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  }
  function playPrevSong() {
    setCurrentSongIndex((currentSongIndex - 1) % songs.length);
  }



  
  return (
    <>
    
    <section className="flex z-10  gap-7 my-5 w-[10rem] justify-center  items-center h-[1.4rem]">
     
    <img src="https://cdn-icons-png.flaticon.com/512/3567/3567971.png"
       className=" h-10   flex justify-center items-center
         text-white font-bold  p-2 rounded"
        onClick={playNextSong}>
    </img>
  

    <button onClick={handleClick} 
    className="  text-white font-bold p-2 rounded"
     > {isPlaying ? <FaPause /> : <FaPlay />}
    </button>

    <img src="https://cdn-icons-png.flaticon.com/512/9685/9685149.png"
       className=" h-10   flex justify-center items-center
         text-white font-bold  p-2 rounded"
        onClick={playNextSong}>
    </img>
  


  <ReactPlayer 
  onEnded={playNextSong}
  url={songs[currentSongIndex]}
   playing={isPlaying} 
  className="mx-auto my-4" 
  />

    </section>

   </>
  )
}

export default Player

 