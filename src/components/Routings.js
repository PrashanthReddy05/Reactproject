//Routings.js-modules

import React from 'react'

//router_package
import { BrowserRouter, Route,Switch } from 'react-router-dom';


// functional components _ nesting _into Routings

import Header from './MainMenu/Header.js'


import Footer from './MainMenu/Footer.js'

import Home from './MainMenu/Home.js'

import About from './MainMenu/About.js'

import Contact from './MainMenu/Contact.js'

import Services from './MainMenu/Services.js'
 
import Itservices from './MainMenu/Itservices.js'

import Amb from './Amb.js'

//functional ccomponnents

//class componts 
import Myclass from './Myclass'
import Lifecycle from './MainMenu/Lifecycle'
import Restapi from './MainMenu/Restapi.js'
import View from './MainMenu/RESTAPI/View'
import Edit from './MainMenu/RESTAPI/Edit'
import ReactBootstrap from './MainMenu/ReactBootstrap.js'
import Signup from './MainMenu/Signup'
import ReactReduxConnection from './MainMenu/ReactReduxConnection.js';
import RHuseState from './MainMenu/UseStateHooks.js';
import RHuseEffect from './MainMenu/UseEffectHooks.js';
import Pagination from './MainMenu/Pagination.js';
import Hooksuser from './HooksAPI/hooksUser.js'
import Hooksedit from './HooksAPI/hooksEdit.js'
import Hooksview from './HooksAPI/hooksView.js'
import Hookssignup from './HooksAPI/hooksSignup.js'
import HooksRedux from './HooksRedux/HooksRedux.js'



// Routings_setup

function Routings()
{
    return (
    <React.Fragment>
    <BrowserRouter>
{/* nav bar links */}

<Header/>

{/* Links for Menu 
      {/*<a href="home.html">home</a>

<Link to="/Home">Home</Link> &nbsp;&nbsp;

<Link to="/About">About</Link>&nbsp;&nbsp;

<Link to="/Contact">Contact</Link>&nbsp;&nbsp;

<Link to="/Services">Services</Link>&nbsp;&nbsp;*/}
    

<br/><br/>

<Switch>

<Route exact path="/" component={Home} />

   
{/*<Home>*/}
<Route exact path ="/home" component={Home} />

{/*<Contact /> */}
< Route path="/contact" component={Contact} />

{/*<Myclass /> */}
<Route path="/myclass" component={Myclass} />

{/*<Lifecycle /> */}
< Route path="/lifecycle" component={Lifecycle} />

{/*<Restapi /> */}
<Route exact path="/restapi" component={Restapi} />

{/*<view /> with router parameter */}
<Route  path="/restapi/view/:idno" component={View} />


{/*<EDIT /> with router parameter */}
<Route  path="/restapi/edit/:idno" component={Edit} />




{/*<Reacrt bootstarap /> */}
 <Route path ="/rb" component={ReactBootstrap} />

{/*<Signup  /> */}
<Route exact path ="/signup" component={Signup} />
{/*<Rrc  /> */}
<Route exact path ="/rrc" component={ReactReduxConnection} />

{/*< rhuseState /> */}
<Route exact path ="/rhuseState" component={RHuseState} />
{/*< rhuseEffect /> */}
<Route exact path ="/rhuseEffect" component={RHuseEffect} />
{/*< pagination /> */}
<Route exact path ="/pagination" component={Pagination} />
{/*< hooksuser /> */}
<Route exact path ="/hooksuser" component={Hooksuser} />
{/*< hooksview /> */}
<Route exact path ="/hooksuser/view/:idno" component={Hooksview} />
{/*< hooksedit /> */}
<Route exact path ="/hooksuser/edit/:idno" component={Hooksedit} />
{/*< hookssignup /> */}
<Route exact path ="/hookssignup" component={Hookssignup} />
{/*< hooksredux /> */}
<Route exact path ="/hooksredux" component={HooksRedux} />

{/*<Services /> */}
<Route path ="/services" component={Services} />
{/*<Itservices /> */}
 <Route path ="/itservices" component={Itservices} />
{/*<About /> */}
<Route path= "/about" component={About} />
{/*<pagenotfound /> */}
 <Route path="*" component= {Amb} />
</Switch>
{/* footer section  */}
<Footer />
{/* footer section  */}
</BrowserRouter>
</React.Fragment>)
}

export default Routings;