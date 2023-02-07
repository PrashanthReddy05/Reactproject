
//header.js modules
import  React from 'react'

import { Link } from 'react-router-dom'
  function Header() 
 {
    return ( <>
    
        <nav class="navbar navbar-expand-lg bg-light bg-dark">
  <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"> 
       <span class="navbar-toggler-icon"></span> 
     </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-white" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




        </>)
    

 } 
 export default Header;