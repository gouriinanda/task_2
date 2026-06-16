
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import StudReg from './component/StudReg'
import EmpReg from './component/EmpReg'
import HosReg from './component/HosReg'
import JobApp from './component/JobApp'
import EventReg from './component/EventReg'
import ColAdm from './component/ColAdm'
import Navbar from './component/Navbar'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/studreg' element={<StudReg/>}/>
      <Route path='/empreg' element={<EmpReg/>}/>
      <Route path='/hosreg' element={<HosReg/>}/>
      <Route path='/jobapp' element={<JobApp/>}/>
      <Route path='/eventreg' element={<EventReg/>}/>
      <Route path='/colgadm' element={<ColAdm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
