//Routings.js-modules

import React from 'react'


//components _ nesting _into Routings

import Header from './MainMenu/Header.js'


import Footer from './MainMenu/Footer.js'

import Home from './MainMenu/Home.js'

import About from './MainMenu/About.js'

import Contact from './MainMenu/Contact.js'

import Services from './MainMenu/Services.js'

import Amb from './Amb.js'



 //router_package
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


// Routings_setup

function Routings(){

    return (<BrowserRouter>
{/* nav bar links */}
<Header/>

{/* Links for Menu 
      {/*<a href="home.html">home</a>

<Link to="/Home">Home</Link> &nbsp;&nbsp;

<Link to="/About">About</Link>&nbsp;&nbsp;

<Link to="/Contact">Contact</Link>&nbsp;&nbsp;

<Link to="/Services">Services</Link>&nbsp;&nbsp;*/}
    

<br/><br/>


 <Routes>
    <Route exact path="/" component={Home} />

   
        {/*<Home>*/}
    <Route exact path ="/Home" element={<Home/>} />

    {/*<Contact /> */}
    < Route path="/contact" element={<Contact/>} />



     {/*<Services /> */}
    <Route path ="/Services" element={<Services/>} />


   {/*<About /> */}
    <Route path= "/About" element={<About/>} />

   

    {/*<pagenotfound /> */}
 <Route path="*" element= {<Amb/>} />
 </Routes>
   


   {/* footer section  */}

         <Footer />
     {/* footer section  */}

    </BrowserRouter>)


    
    
}

export default Routings;