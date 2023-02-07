//Services.js-modules
import React from 'react'
import ServiceData from './../../assets/json/Services.json'

//styles
var bgc={ backgroundColor:'pink' }






//create About Component
function Services() 
{

    return (<>

    <div className="container-fluid" style={bgc}>
        <div className="container p-5 text-container">

            <h1 className="pt-2 pb-5 text-white">SERVICES</h1>

            <div className="row">
                {

                ServiceData.map((data,i)=> {
                    return(
                        <div className="col-lg-4">
<div className="card text-ceter text-white p-3" style={bgc}>
    <div className="card-body">
    <h3 className="py-3">{data.title}</h3>
    <p className="text-justify">{data.description}</p>
    </div>
    </div>
   </div>
                    )

                })
            }
                

          
            <div className="col-lg-4">

            <div className="card text-ceter text-white p-3" style={bgc}>
           
                <div className="card-body">
                <h3 className="py-3">UI/UX DESIGN</h3>
                <p className="text-justify">In publishing and graphics designvssgj akdhkahddjkshj hfgjg</p>
                </div>
                </div>
               </div>
             
             

             <div className="col-lg-4">
<div className="card text-ceter text-white p-3" style={bgc}>
<i className="fab fa-adobe text-weight-bold-success"></i>
    <div className="card-body">
    <h3 className="py-3">Markating</h3>
    <p className="text-justify">In publishing and graphics designvssgj akdhkahddjkshj hfgjg</p>
    </div>
      </div>
    </div>

    <div className="col-lg-4">
 <div className="card text-ceter text-white p-3" style={bgc}>
 <i className="fab fa-adobe text-weight-bold-success"></i>
     <div className="card-body">
     <h3 className="py-3">UI/UX DESIGN</h3>
     <p className="text-justify">In publishing and graphics designvssgj akdhkahddjkshj hfgjg</p>
     </div>
     </div>
     </div>


     <div className="col-lg-4">
<div className="card text-ceter text-white p-3" style={bgc}>
<i className="fab fa-adobe text-weight-bold-success"></i>
    <div className="card-body">
    <h3 className="py-3">Markating</h3>
    <p className="text-justify">In publishing and graphics designvssgj akdhkahddjkshj hfgjg</p>
    </div>
      </div>
    </div>


    <div className="col-lg-4">
<div className="card text-ceter text-white p-3" style={bgc}>
<i className="fab fa-adobe text-weight-bold-success"></i>
    <div className="card-body">
    <h3 className="py-3">Markating</h3>
    <p className="text-justify">In publishing and graphics designvssgj akdhkahddjkshj hfgjg</p>
    </div>
      </div>
    </div>
    <div className="col-lg-4">
<div className="card text-ceter text-white p-3" style={bgc}>
<i className="fab fa-adobe text-weight-bold-success"></i>
    <div className="card-body">
    <h3 className="py-3">Markating</h3>
    <p className="text-justify">In publishing and graphics designvssgj akdhkahddjkshj hfgjg</p>
    </div>
      </div>
    </div>
        
     </div>
     </div>
     </div>




   </>)
    
}

export default Services;