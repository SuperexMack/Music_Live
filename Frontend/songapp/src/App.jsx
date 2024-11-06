import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './LandingPage/LandingPage';
import { Song } from './SongPlay/Song';
import { Authorization } from './Auth/Authorization';
import { AuthSecond } from './Auth/AuthSecond';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/go' element={<Song></Song>}></Route>
      <Route path='/register' element={<Authorization></Authorization>}></Route>
      <Route path='/login' element={<AuthSecond></AuthSecond>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
