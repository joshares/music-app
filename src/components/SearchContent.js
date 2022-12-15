import React from 'react'
import { useSearchContext } from '../context/searchContext'


const SearchContent = ({artist}) => {
 const {setInputs,setShowbar,setArtist} = useSearchContext()
 const {name, avatar, weburl} = artist

 const handleClick = (url) => {
        window.open(url,'_blank')
        setInputs('')
        setShowbar(false)
        setArtist([])
 }

 return (
    <div className='search-list'>
     <li onClick={()=> handleClick(weburl)}>
      <img alt='img-small' src={avatar} className='search-img'/>
      <p>{name}</p>
     </li>
    </div>
 )
}

export default SearchContent;