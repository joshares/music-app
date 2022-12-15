import React from 'react'
import home from '../images/home.svg'
import playlist from '../images/play-list-logo.svg'
import radio from '../images/radio-logo.png'
import media from '../images/media-logo.png'
import music from '../images/music.png'
import profile from '../images/profile.png'
import logout from '../images/Logout-logo.png';
import { NavLink,Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'


const Sidebar = () => {
  const { setChart, setBackground,sidebar ,setSidebar} = useGlobalContext();



 return (
  <main>
    <aside className='aside'>
   <div >
    <img src={music} alt='music'/>
   </div>
   <section className='sidebar-one'>
    <div className='one-div'>
    <NavLink to='/music-app' > <img src={home} alt='home' className='sidebar-img img-home' onClick={() => { 
    setBackground('home')
      setChart(false)}} /></NavLink>
     <NavLink to='/playlist'> <img src={playlist} alt='home' className='sidebar-img likes-img ' onClick={()=> setBackground('home')} /></NavLink>
     <Link><img src={radio} alt='home' className='sidebar-img'  /></Link>
     <Link><img src={media} alt='home' className='sidebar-img'  /></Link>
    </div>
    <div className='two-div'>
      <img src={profile} alt='home' className='sidebar-img'  />
       <img src={logout} alt='home' className='sidebar-img'  />
    </div>
   </section>
  </aside>
  <aside className={`${sidebar ? 'm-aside' : ' hidden m-aside '}`}>
    <NavLink to='/' className='side-flex' onClick={() => { 
    setBackground('home')
    setSidebar(false)
      setChart(false)}}>
      <img src={home} alt='img' className='sidebar-img img-home'/>
      <p>Home</p>
    </NavLink>
    <NavLink to='/playlist' className='side-flex' onClick={() => { 
    setBackground('home')
    setSidebar(false)
     }}>
      <img src={playlist} alt='img' className='sidebar-img' 
      
      />
      <p>My Collection</p>
    </NavLink>
    <Link className='side-flex' onClick={()=> setSidebar(false)}>
      <img src={radio} alt='img' className='sidebar-img'/>
      <p>Radio</p>
    </Link>
    <Link className='side-flex' onClick={()=> setSidebar(false)}>
      <img src={media} alt='img' className='sidebar-img'/>
      <p>Music videos</p>
    </Link>
    <Link className='side-flex' onClick={()=> setSidebar(false)}>
      <img src={profile} alt='img' className='sidebar-img'/>
      <p>Profile</p>
    </Link>
    <Link className='side-flex' onClick={()=> setSidebar(false)}>
      <img src={logout} alt='img' className='sidebar-img'/>
      <p>Logout</p>
    </Link>
  </aside>
  </main>
 )
}

export default Sidebar;