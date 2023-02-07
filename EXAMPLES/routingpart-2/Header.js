
//header.js modules
import React from 'react'

import {  NavLink} from 'react-router-dom';

  function Header() 
 {

  var MenuNames = ["Home","About", "Services","Contact", "React","Metrolabs","Designs"]


    return (<>

    {/* Links for menu*/}

    <nav className="navbar navbar-expand-lg navbar-light"
    style={
      {
        backgroundcolor:'orange',
        borderBottom:'0.5px pink solid',
        borderTop:'0.5px blue solid'
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
        <NavLink className="nav-link active text-white"  to="/Home">Home</NavLink>
        </li>

        <li className="nav-item">
        <NavLink activestyle={{backgroundColor:'black'}} activeClassName="nav-link text-white" to="/About">About</NavLink>
        </li>

        <li className="nav-item">
        <NavLink activestyle={{backgroundColor:'black'}} activeClassName="bg-dark" to="/About">Contact</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link text-white "activeClassName="bg-dark" to="/Services">Services</NavLink>
       </li>
  </ul>
  */}

     <ul className="navbar-nav">

{
  MenuNames.map((data,i)=>
  
  <li className="nav-item px-1" key={i}>
  <NavLink activeClassName="bg-dark"  
  className="nav-link text-dark"

  to={`/${data.toLowerCase()}`}>

  {data}
  </NavLink>
  </li>)
  
  
   
}

      </ul>
    
</div>
</div>
</nav>

{/* Links for menu*/}

    </>)
    

 } 
 export default Header;