import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import { useAudioContext } from '../context/audioContext'

const Track = ({images, subtitle,title,hub,  }) => {
 const [image, setImage] = useState([])
 const { setPlaying,audioRef,audioUrl,setaudioUrl,setPlayerImg, setSubtitle, setTitle} = useGlobalContext()
 const {setPlay} = useAudioContext()
 const {actions} = hub;

 const handleClick = (e) => {
      audioRef.current.pause()
      setSubtitle(subtitle)
      setPlayerImg(image)
      setTitle(title)
      setaudioUrl('')
      setaudioUrl(actions[1]?.uri)
      audioRef.current = new Audio(audioUrl)
      setPlaying(true)
      setPlay(true)
      console.log(e.target.id)
 }


 useEffect(()=> {
  setImage(images.coverart)
  
 },[images.coverart])
 
 return (
  <div >
   <img src={image} alt={title} 
   className='track-image'
    onClick={handleClick}
   />
   <h4 className='join-release'onClick={()=>audioRef.current.pause()}>{title}</h4>
   <p>{subtitle}</p>
  </div>
 )
}

export default Track;