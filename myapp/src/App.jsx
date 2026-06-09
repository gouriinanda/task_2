
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
