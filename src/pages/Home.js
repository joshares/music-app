import React from 'react'
import frame from '../images/Frame .png'
import mFrame from '../images/m-frame.png'
import music from '../images/music.png'
import sideMenu from '../images/m-sidemenu.png'
import Track  from '../components/Track'
import tomorrow from '../images/tomorrow.png'
import homeLove from '../images/home-love.png'
import homeTomorrow from '../images/tomorrow-home.png'
import love from '../images/love.png'
import ragae from '../images/golden-age.png'
import goldenAge from '../images/regae.png'

import smallMusic from '../images/small-music.png'
import smallPlay from '../images/small-play.png'
import AreaTrack from '../components/AreaTrack'
import { useGlobalContext } from '../context/context'
import Chart from '../components/Charts'
import Search from '../components/Search'



const Home = () => {
  const {tracks,areaTracks, chart, setChart, chartTrack,setBackground,setSidebar} = useGlobalContext();

  if(chart) {
    return (
      
      <main className='home-main'>
        <div className='m'>
      <div className='m-side'>
        <img alt='menu'className='m-img' src={sideMenu} onClick={() => setSidebar(true)} />
      <img alt='menu' className='m-img' src={music} />
      </div>
      <Search/>
    </div>
        <div className='chart-head'>
          <div>
            <img src={tomorrow} className='chart-bigimg' alt='img'/>
          </div>
          <div className='chart-notes'>
            <h1>Tomorrow's Tune</h1>
            <p>Mad tunes from the future that sets  the dance floor rolling in every party. Toughest sound out there</p>
            <p>10 songs ~1hr+</p>
            <div className='chart-details'>
              <p><span><img alt='img-small' src={smallPlay}/></span>  Play all</p>
              <p><span><img alt='img-small' src={smallMusic}/></span> Add to collection</p>
              <img src={love} alt='img' className='color-love' />
            </div>
          </div>
        </div>
        <div className=''>
          {chartTrack.map((track)=>{
        return <Chart {...track}/>
       })}
        </div>
      </main>
    )
  }
 
 return (
  <main className='home-main'>
    <div className='m'>
      <div className='m-side'>
        <img alt='menu'className='m-img' src={sideMenu} onClick={() => setSidebar(true)} />
      <img alt='menu' className='m-img' src={music} />
      </div>
      <Search/>
    </div>
    <section className='home-one'>
    <div className='home-big-img' >
     <img src={frame} alt='frame' className='big-frame'/>
    </div>
    <div className='home-big-img' >
     <img src={mFrame} alt='frame' className='m-frame'/>
    </div>
    <div className='home-top-charts' >
     <h3>Top charts</h3>
     <div className='home-charts'>
      
     <div className='home-chart' onClick={() => {
          setBackground('chart')
           setChart(true)}} >
      <div className='home-flex'>
        <img src={goldenAge} alt='golden' className='charts-img' />
      <div className='home-chart-details'>
       <h4>Golden age of 80's</h4>
       <p className='join'>Sean swadder</p>
       <p className='num'>2:35:06</p>
      </div>
      </div>
      <div className='love-circle'><img className='homeLove' src={homeLove} alt='img'/></div>
     </div>
     <div className='home-chart'  onClick={() => {
          setBackground('chart')
           setChart(true)}} >
      <div className='home-flex'>
        <img src={ragae} alt='golden' className='charts-img'/>
      <div className='home-chart-details'>
       <h4>Reggae “n” blues</h4>
       <p className='join'>Dj YK mule</p>
       <p className='num'>1:05:06</p>
      </div>
      </div>
      <div className='love-circle'><img className='homeLove' src={homeLove} alt='img'/></div>
     </div>
     <div className='home-chart'  onClick={() => {
          setBackground('chart')
           setChart(true)}} >
      <div className='home-flex'>
        <img src={homeTomorrow} alt='golden' className='charts-img' />
      <div className='home-chart-details'>
       <h4>Tomorrow's tune</h4>
       <p className='join'>obi datti</p>
       <p className='num'>2:05:06</p>
      </div>
      </div>
      <div className='love-circle'><img className='homeLove' src={homeLove} alt='img'/></div>
     </div>
     </div>
    </div>
   </section>
   <section className='new-releases'>
    <div><h3>New releases</h3></div>
     <div className='release-slider'>
       {tracks.map((track)=>{
        return <Track {...track}/>
       })}
     </div>
   </section>
   <section>
    <div><h3>popular in your area</h3></div>
    <div className='release-slider'>
       {areaTracks.map((track)=>{
        return <AreaTrack {...track}/>
       })}
     </div>
   </section>
   
   
    
  </main>
 )
}

export default Home;