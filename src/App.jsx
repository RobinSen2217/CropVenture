import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Components/Navbar'
import Landing from './Components/Landing';
import Consult from './Components/Consult';
import Submitted from './Components/Submitted';
import About from './Components/About';
import Farmer from './Components/Farmer';
import Retailer from './Components/Seller';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Landing  title='Home'/>}/>
      <Route exact path='/consult' element={<Consult title='Consult Us'/>}/>
      <Route exact path='/Submitted' element={<Submitted/>}/>
      <Route exact path='/about' element={<><About title='About Us'/><Footer/></>}/> 
      <Route exact path='/farmer' element={<><Farmer title='Become an Associated Farmer'/><Footer/></>}/>
      <Route exact path='/retailer' element={<><Retailer title='Become an Associated retailer'/><Footer/></>}/>
    </Routes>
    </>
    </Router>
  )
}

export default App
