import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Add from './Components/Add'
import Nav from './Components/Nav'
//import Routes from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Nav/> 
    <Routes>
   
   <Route path='/' element={<Home />}></Route>
   <Route path='/add' element={<Add/>}></Route>

    </Routes>
  
 </>
   
  )
}

export default App

