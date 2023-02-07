
//header.js modules
import React from 'react'

import {  NavLink} from 'react-router-dom';

  function Header() 
 {

  var MenuNames = ["Home","About", "Services", "Itservices", "Contact", "Myclass","Lifecycle", "Restapi"]


    return (<>

    {/* Links for menu*/}

    <nav className="navbar navbar-expand-lg navbar-light"
    style={
      {
        backgroundcolor:'#12151c',
        borderBottom:'0.5px white solid',
        borderTop:'0.5px dark solid'
      }

    }>
    
      
  <div className="container-fluid">
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"> 
       <span className="navbar-toggler-icon"></span> 
     </button>


    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">



      {/*
       <ul className="navbar-nav">

        <li className="nav-item">
        <NavLink className="nav-link active text-white"  to="/home">Home</NavLink>
        </li>

        <li className="nav-item">
        <NavLink activestyle={{backgroundColor:'black'}} activeClassName="nav-link text-white" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
        <NavLink activestyle={{backgroundColor:'black'}} activeClassName="bg-dark" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link text-white "activeClassName="bg-dark" to="/services">Services</NavLink>
       </li>
  </ul>
  */}
  

     <ul className="navbar-nav">

{
  MenuNames.map((data,i)=>
  
  <li className="nav-item px-1" key={i}>
  <NavLink activeClassName="bg-blue"  
  className="nav-link text-dark"

  to={`/${data.toLowerCase()}`}>

  {data}
  </NavLink>
  </li>)
   
}

      </ul>

{/*
<ul className="navbar-nav"></ul>

<li className="nav-item px-1" >
<NavLink activeClassName="bg-green" 
className="nav-link text-dark" to="/home">Home</NavLink> 
</li>

<li className="nav-item px-1" >
<NavLink activeClassName="bg-green" 
className="nav-link text-dark" to="/about">About</NavLink> 
</li>

<li className="nav-item px-1" >
<NavLink activeClassName="bg-green" 
className="nav-link text-dark" to="/services">Services</NavLink> 
</li>

<li className="nav-item px-1" >
<NavLink activeClassName="bg-blue" 
className="nav-link text-dark" to="/itservices">Itservices</NavLink> 
</li>

<li className="nav-item px-1" >
<NavLink activeClassName="bg-blue" 
className="nav-link text-dark" to="/contact">Contact</NavLink> 
</li>
*/}

</div>
</div>
</nav>

{/* Links for menu*/}

    </>)
    

 } 
 export default Header;