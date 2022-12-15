import {BsFillPauseCircleFill, BsFillPlayCircleFill} from 'react-icons/bs';
import {styled, Typography,Slider,Paper,Stack,box, duration,  } from '@mui/material'
import {FaStepForward, FaStepBackward} from 'react-icons/fa'
import {RiRepeatOneFill} from 'react-icons/ri'
import {BiVolumeFull} from 'react-icons/bi'
import {TfiControlShuffle} from 'react-icons/tfi'
import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context';
import { useAudioContext } from '../context/audioContext';


const PSlider = styled(Slider)(({theme, ...props}) => ({
   color:'yellow',
   height: 2,
   '&:hover': {
    cursor: 'auto',
   },
   '& .MuiSlider-thumb': {
    width:'1rem',
    height:'1rem',
    display: props.thumbless ? 'none' : 'black',
   }
  }))

 const AudioPlayer = ({}) => {

 const {playing,audioRef,playerImg,subtitle,title,handleNext,handlePrev} = useGlobalContext();
 const {move,setMove,duration,setDuration,play,setPlay,} = useAudioContext()
 const [volume, setVolume] = useState(100)
 
  

 const handleClick = () => {
  if(play){
    setPlay(false)
  }else{
    setPlay(true)
  }
 }

 useEffect(()=> {
  if(playing) {
    audioRef.current.volume = volume/100
   }
 },[volume])

  useEffect(()=> {
   if(play) {
    setInterval(()=>{
     const time = Math.floor(audioRef.current.currentTime)
     const durations = Math.floor(audioRef.current.duration)
     setDuration(durations)
     setMove(time)
    },[100])
    if(move === duration){
      setMove(0)
      setDuration(0)
    }
   }
  },[playing,play])

 return (
  <main>
    <div className='s-player'>
   <div className=' audio-player'>
    <div className='audio-details'>
     <img className='audio-img' alt='img' src={playerImg}/>
     <div className='audio-title'>
      <h4>{`${title.substring(0, 20)}...`}</h4>
      <p className='join-a'>{subtitle}</p>
     </div>
    </div>
    <div className='audio-icons'>
     <div className='audio-icon'>
      <TfiControlShuffle className='audio-btn'/>
      <FaStepBackward className='audio-btn'
      onClick={handlePrev}
      />
       <BsFillPlayCircleFill className={`${!play ? 'play-btn':'play-btn hidden'}`} onClick={()=>handleClick()}/>
       <BsFillPauseCircleFill className={`${play ? 'play-btn':'play-btn hidden'}`} onClick={() => handleClick()}/>
       <FaStepForward className='audio-btn' onClick={handleNext} />
       <RiRepeatOneFill className='audio-btn'/>
     </div>
     <Stack className='audio-movement'>
      <PSlider thumbless
      value={move}
      max={duration}
       />
     </Stack>
    </div>
     <Stack 
     direction='row'
     spacing={1}
     className='audio-sound'>
     <BiVolumeFull className='volume'/>
      <PSlider className='slider' min={0} max={100} value={volume} 
      onChange={(e, v) => setVolume(v)}
      />
     </Stack>
   </div> 
  </div>
  <div className='m-player'>
     <div className=' audio-player'>
    <div className='audio-details'>
     <img className='audio-img' alt='img' src={playerImg}/>
     <div className='audio-title'>
      <h4>{`${title.substring(0, 20)}...`}</h4>
      <p className='join-a'>{subtitle}</p>
     </div>
    </div>
    <div className='audio-icons'>
     <div className='audio-icon'>     
       <BsFillPlayCircleFill className={`${!play ? 'play-btn':'play-btn hidden'}`} onClick={()=>handleClick()}/>
       <BsFillPauseCircleFill className={`${play ? 'play-btn':'play-btn hidden'}`} onClick={() => handleClick()}/>
       <FaStepForward className='audio-btn'
       onClick={handleNext}
        />
     </div>
    </div>
   </div> 
  </div>
  </main>
 )
}

export default AudioPlayer;