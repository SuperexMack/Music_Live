import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './LandingPage/LandingPage';
import { Song } from './SongPlay/Song';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/go' element={<Song></Song>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
