import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import transparentLove from '../images/transparent-love.png'
import elipses from '../images/elipses.png'
import { useAudioContext } from '../context/audioContext'


const Chart = ({images, subtitle,title,hub}) => {
  const { setPlaying,audioRef,audioUrl,setaudioUrl,setPlayerImg, setSubtitle, setTitle} = useGlobalContext()
 const {setPlay} = useAudioContext()
  const [image, setImage] = useState([])
  const {actions} = hub

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
 return (
  <main>
    <div className='chart-list s-chart' onClick={handleClick}>
   <img className='chart-list-img' src={image} alt='img'/>
   <img className='trans-love' src={transparentLove} alt='img'/>
   <div className='chart-correct'><p>{title}</p></div>
   <p>single</p>
   <p>3:50</p>
   <img src={elipses} alt='img'/>
  </div>
  <div className='chart-list m-chart' onClick={handleClick}>
    <img className='chart-list-img' src={image} alt='img'/>
   
   <div className='chart-correct m-flex'>
    <p>{title}</p>
    <p className='m-join'>single</p>
    </div>
   <div className='m-flex'>
   <img src={elipses} alt='img'/>
    <p className='mo-join'> 3:50</p>
   </div>
  </div>
  </main>
 )
}

export default Chart;