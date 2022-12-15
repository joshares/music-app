import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Sidebar from './components/Sidebar';
import AudioPlayer from './components/AudioPlayer'


function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='playlist' element={<Playlist/>} />
    </Routes>
    <AudioPlayer/>
    </BrowserRouter>
  );
}

export default App;
