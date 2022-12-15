import React, { useState, useContext } from 'react'

const SearchContext = React.createContext()

const SearchProvider = ({children}) => {
 const [showbar , setShowbar] = useState(false)
 const [inputs, setInputs] = useState()
 const [artist, setArtist] = useState([]) 

 const url = `https://shazam-song-recognizer.p.rapidapi.com/search_artist?query=${inputs}&limit=10&start_from=0&lang=NG`



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56b9e20cb6msh7017f6f2e9db3cdp18320djsnbab82513f0e4',
		'X-RapidAPI-Host': 'shazam-song-recognizer.p.rapidapi.com'
	}
};



 const fetchApi = async (url) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    const {result} = data
    const {hits} = result
    const newArtist = hits.slice(0,5)
    setArtist(newArtist)
    console.log(hits)
  }catch (err) {
    console.log(err)
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
 fetchApi(url)
}

 return <SearchContext.Provider
 value={{
     handleSubmit,
     inputs,
     setInputs,
     showbar,
     setShowbar,
     artist,
     setArtist,
 }}
 >{children}</SearchContext.Provider>
   
}
export const useSearchContext = () => {
  return useContext(SearchContext)
}

export { SearchContext, SearchProvider }