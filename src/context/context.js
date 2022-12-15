import React, { useState, useContext, useEffect, useRef } from 'react'
import test from '../images/chart-list.png';




const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 const [playing, setPlaying] = useState(false);
 const [tracks, setTracks] = useState([]);
 const [areaTracks, setAreaTracks] = useState([]);
 const [chart, setChart] = useState(false)
 const [sidebar, setSidebar] = useState(false)
 const [collection , setCollection] = useState([])
 const[chartTrack, setChartTrack] = useState([])
 const [background, setBackground] = useState('home')
 const [audioUrl, setaudioUrl] = useState('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav')
const [playerImg, setPlayerImg] = useState('')
const [title, setTitle] = useState('')
const [subtitle, setSubtitle] = useState('')
const [index, setIndex] = useState(0)
 
 const  audioRef = useRef(new Audio(audioUrl))
 const intervalRef = useRef()

 useEffect(()=>{
  audioRef.current.pause()
  if(playing){
    startTimer()
    audioRef.current = new Audio(audioUrl)
    audioRef.current.play()
  }else {
    clearInterval(intervalRef.current)
    audioRef.current.pause()
  }
   // eslint-disable-next-line
 },[audioUrl])
 const url = 'https://shazam-song-recognizer.p.rapidapi.com/top_country_tracks?country_code=NG&limit=36&start_from=0'

 
 
 const options = {
  method: 'GET',
  headers: {
   'X-RapidAPI-Key': 'd0f14556c4msh4c435fd90956c18p1bf1f9jsnecf79b5b7447',
   'X-RapidAPI-Host': 'shazam-song-recognizer.p.rapidapi.com'
  }
 };
const fetchApi = async (url) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    const track = data.result.tracks.filter((t) => t.images !== undefined)
    const newTrack = track.filter((t) => t.hub.actions !== undefined)
    const newRelease = newTrack.slice(0,10)
    const areaRelease = newTrack.slice(10,21)
    const chartRelease = newTrack.slice(20,30)
    const collectRelease = newTrack.slice(25,-1)

    setTracks(newRelease)
    setAreaTracks(areaRelease)
    setPlayerImg(test)
    setChartTrack(chartRelease)
    setCollection(collectRelease)
  }catch (err) {
    console.log(err)
  }
}


useEffect(()=> {
    fetchApi(url)
     // eslint-disable-next-line
},[])
useEffect(()=> {
    document.documentElement.className = background
    // eslint-disable-next-line
  }, [background])
useEffect(()=>{
      if(playing){
        audioRef.current.pause()
       setSubtitle(tracks[index].subtitle)
      setPlayerImg(tracks[index].images.coverart)
      setTitle(tracks[index].title)
      setaudioUrl('')
      setaudioUrl(tracks[index]?.hub.actions[1].uri)
      audioRef.current = new Audio(audioUrl)
      setPlaying(true)
      }
    // eslint-disable-next-line
},[index])

 const startTimer = () => {
  clearInterval(intervalRef.current)
  intervalRef.current = setInterval(() => {
     if(audioRef.current.ended){
        handleNext()
      }
  }, [1000]);
 }

  const handleNext  = () => {
    setPlaying(true)
    if(index === tracks.length -1){
      setIndex(0)
    }else {
      setIndex(index + 1)
    }
  }
  const handlePrev  = () => {
    let last = tracks.length - 1
    setPlaying(true)
    if(index === 0){
      setIndex(last)
    }else {
      setIndex(index - 1)
    }
  }


  return <AppContext.Provider 
  value={{
    handleNext,
    handlePrev,
   setSidebar,
   sidebar,
   playing,
   background,
   setBackground,
   setPlaying,
   tracks,
   audioRef,
   areaTracks,
   setaudioUrl,
   audioUrl,
   chart,
   setChart,
   setChartTrack,
   chartTrack,
   setCollection,
   playerImg,
   setPlayerImg,
   collection,
   title,
   subtitle,
   setTitle,
   setSubtitle,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
