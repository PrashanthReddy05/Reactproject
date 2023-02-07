import React from'react';
import  ReactDOM  from "react-dom";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Import Routings.js
import Routings from './components/Routings.js'


import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render( <Provider store = {store}>
<Routings/>
</Provider>,document.getElementById('root'))