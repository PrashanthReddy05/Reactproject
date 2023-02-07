
//index.js ->Root module for entire project
import React from 'react'
import  ReactDOM  from "react-dom"

//ipmort home  module
import Home from './Home.js'

//import Extranal css to React
import './assets/css/custom.css';


ReactDOM.render(<Home/>, document.getElementById('root'))