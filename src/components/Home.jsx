import React from 'react'
// import { useState } from 'react';
import "./Home.css"
import {Route, Routes } from 'react-router-dom'
import Home1 from './Home1'
import About from './About'
import Login from './Login'
import Registration from './Registration'
import FunCounter from './FunCounter'
import ResponsiveAppBar from './ResponsiveAppBar';
// import Datafetch from './Datafetch';
import Userdata from './Userdata';
import WeatherFetch from './Weatherfetch';
// import SignIn from './SignIn'

const Home = () => {
  // const [isMobile, setIsMobile] = useState(false);
  return (
 

    <div className='container'>
         <div className='header'>
          <ResponsiveAppBar/>
          {/* <div className="logo">
            <h1>LoGo</h1>
          </div>
          <nav className={`nav-links ${isMobile ? 'mobile' : ''}`}>
          <ul>
          <li><Link to={'/'}>Home</Link> </li>
          <li> <Link to={'/About'}>About  </Link>  </li>
          <li>  <Link to={'/Login'}>Login</Link></li>
          <li> <Link to={'/Register'}>Register</Link></li>
          <li> <Link to={'/FunCounter'}>Counter</Link> </li>
          </ul>
         </nav>
         <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
         &#9776; {/* Hamburger icon 
        </div> */}

    </div> 
          

         <div className='lsb'>LSB</div> 
         <div className='main'>
          <Routes>
             <Route path='/' element={<Home1></Home1>}></Route>
             <Route path='/About' element={<About></About>}></Route>
             <Route path='/Login' element={<Login></Login>}></Route>
             <Route path='/Registration' element={<Registration></Registration>}></Route>
             <Route path='/FunCounter' element={<FunCounter></FunCounter>}></Route>
             {/* <Route path='/Datafetch' element={<Datafetch></Datafetch>}></Route> */}
             <Route path='/Userdata' element={<Userdata></Userdata>}></Route>
             {/* <Route path='/SignIn' element={<SignIn></SignIn>}></Route> */}
             <Route path='/Weatherfetch' element={<WeatherFetch></WeatherFetch>}></Route>

          </Routes>
          
          
          </div> 
         <div className='footer'>FOOTER</div> 


    </div>
  )
}

export default Home

