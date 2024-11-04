import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './LandingPage/LandingPage';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
