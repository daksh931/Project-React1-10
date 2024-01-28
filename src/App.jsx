import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import HomePage from './Components/Homepage';
import GamePage from './Components/GamePage';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
         
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
