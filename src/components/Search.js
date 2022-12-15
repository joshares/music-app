import { useSearchContext } from '../context/searchContext'
import { ImCancelCircle } from 'react-icons/im'
import SearchContent from './SearchContent'


const Search = () => {
const {handleSubmit,inputs,setInputs,showbar,setShowbar,artist,setArtist} = useSearchContext()

 return (
       <div className='home-search'>
          <form onSubmit={handleSubmit}>
          <input type='text' className='search-input' 
          placeholder='🔍 search artist'
          value={inputs}
          onChange={(e)=> setInputs(e.target.value)}
          onClick={() => setShowbar(true)}
          />
          <ImCancelCircle 
          className={`${showbar ? 'clear-search' : 'clear-search hidden'}`}
          onClick={()=> {
            setInputs('')
            setShowbar(false)
            setArtist([])
          }}
          />
          </form>
          <div className={`${showbar ? 'search-results' : 'search-results hidden'}`}>
            {artist.map((art)=> {
              return (
                <SearchContent {...art}/>
              )
            })}
          </div>
        </div>
 )
}

export default Search;