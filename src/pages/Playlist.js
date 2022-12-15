import React from "react";
import { useGlobalContext } from "../context/context";
import Collection from '../components/Collection';
import music from '../images/music.png'
import sideMenu from '../images/m-sidemenu.png'
import Search from "../components/Search";



const Playlist = () => {
const {collection, setSidebar} = useGlobalContext()


 return (
  
  <main className="play-list home-main">
      <div className='m'>
      <div className='m-side'>
        <img alt='menu'className='m-img' src={sideMenu} onClick={() => setSidebar(true)} />
      <img alt='menu' className='m-img' src={music} />
      </div>
      <Search/>
    </div>
   <div className="collection-title">
     <p className="yellow">My Collection</p>
     <p>  Likes  </p>
   </div>
   <div className="playlist-img">  
      {collection.map((track)=> {
      return (
          <Collection {...track}/>
      )
       })}
   </div>
  </main>
 )
}

export default Playlist;