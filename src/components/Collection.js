import React from 'react'
import { BsFillPlayCircleFill} from 'react-icons/bs';
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import { useAudioContext } from '../context/audioContext';


const Collection = ({images, subtitle,title,hub}) => {
 const { setPlaying,audioRef,audioUrl,setaudioUrl,setPlayerImg, setSubtitle, setTitle} = useGlobalContext()
 const {setPlay} = useAudioContext()
 const [image, setImage] = useState([])
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
 }

 useEffect(()=> {
  setImage(images.coverart)
 },[images.coverart])

 return(
  <div 
  className="collection-img"
  
  >
          <img className="collect-img" 
              onClick={handleClick}
              alt={title}
             src={image}
          />
          <div className="collection-details">
            <h3>{title}</h3>
            <p className='join'>{subtitle}</p>
            <div className='flex'>
            <p>2.3m/likes</p>
            <BsFillPlayCircleFill className='collect-play-btn '
              onClick={handleClick}
            />
            </div>
          </div>
  </div>
 )
}

export default Collection;