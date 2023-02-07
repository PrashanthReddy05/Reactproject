//about.js-modules
import React from 'react'

import profile from './../../assets/images/profile.jpg'


//var styles
var h={ height: '20px'}

//create About Component

function About() 
{

    return (<>

    


    <div className="container-fluid" style={{backgroundColor:'grey'}}>

<div className="container p-5 w-75 text-center">
<h1 className=" display-4 text-white fw-weight-bold py-3">About US</h1>

<p className="text-white pb-3">
    metrolabs is the one of the top most company in the  overall India 
</p>

<div className="jumbotron text-white" style={{ borderRadius:'10px'}}/>

    <div className="row">
        <div className="col-lg-6">

            <div className="container w-100">
                <table className="table table-borderless text-white">


<tbody>
        <tr>
           <th></th>
           <td>
            <img
             src ={profile}
             style={{borderRadius:'20px', width:'35%', height:'60px'} } alt="" />
            </td>
         </tr>

            <tr>
               <th>Full Name</th> 
               <td>Arun Kumar</td>
           </tr>

           <tr>
            <th>Birthday </th>
            <td>10/06/1996</td>
           </tr>

           <tr>
            <th> mobile No</th>
                <td>966143638</td>
            
           </tr>

           <tr>
            <th>Email id</th>
            <td>Arukumar@gmail.com</td>
           </tr>

           </tbody>

                </table>
            </div>
                 
            </div>
                 <div className="col-lg-6">

                 <h4 >SKILLS</h4>
<p className="text-left  ">HTML&css3</p>
<div className="progress" style={h}>
  <div className="progress-bar bg-success"  style={{ width: '95%'}} >95% </div>
</div>

<p className="text-left ">Bootstarp</p>
<div className="progress" style={h}>
<div className="progress-bar bg-success"  style={{ width: '90%'}}>90%</div>
</div>

<p className="text-left ">JAVA Script</p>
<div className="progress" style={h}>
<div className="progress-bar bg-success"  style={{ width: '85%'}} >85% </div>

</div>
<p className="text-left pt-4 ">React</p>
<div className="progress" style={h}>
<div className="progress-bar bg-success" style={{ width: '80%'}}>80% </div>
</div>


</div>
</div>
</div>
</div>

   </>) 
}

export default About;