
//Home.js-modules
import React from 'react'

import profile from './../../assets/images/profile.jpg'

import wallpaper from './../../assets/images/back1.jpg'


var styles=
{
    backgroundImage:`url(${wallpaper})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
}

//create About Component
function Home() {

         
        return (<>

<div className="jumbotron text-white p-5" style={styles}>
            <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <h1 className="h1 pt-5 mt-5">Iam Venky Challa</h1>
            <h5 className="bg-success p-2 mt-3 w-75 text-center">Frontend Developer & Instructor</h5>
            </div>

            <div className="col-lg-6">
                <img src={profile} className="w-75 mx-auto img-thumbnail" alt=""/>
       
            </div>
            </div>
          </div>
          </div>
    

            </>
            
    
        )
}
        

export default Home;