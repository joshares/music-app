import React, { useState, useContext, useEffect } from 'react'
import { useGlobalContext } from './context'

const AudioContext = React.createContext()

const AudioProvider = ({children}) => {
 const {audioRef} = useGlobalContext()
 const[move, setMove] = useState(20);
 const[play, setPlay] = useState(false)
 const [duration,setDuration] = useState(0)
 

 useEffect(()=> {
  if(play){
   audioRef.current.play()
  }else{
   audioRef.current.pause()
  }
 },[play])

 return <AudioContext.Provider
 value={{
     move,
     setMove,
     play,
     setPlay,
     duration,
     setDuration,
 }}
 >{children}</AudioContext.Provider>
   
}
export const useAudioContext = () => {
  return useContext(AudioContext)
}

export { AudioContext, AudioProvider }