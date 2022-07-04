import React from 'react'
import "./Components/Pages/Burger.css"
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Discover from './Components/Pages/Discover'
import Makeburger from './Components/Pages/Makeburger'
import Footer from './Components/Layout/Footer'
import Burger from './Components/Burger'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Discover />}/>
        <Route exact path='/Makeburger' element={<Makeburger />}/>
        <Route exact path ='/burger' element ={<Burger/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App