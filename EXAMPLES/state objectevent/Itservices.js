
import React from 'react'

//nested Component
import WebApplication from './IT_SERVICES/WebApplications';

import MobileApplication from './IT_SERVICES/MobileApplications';

import  {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

var services=[
  {
    title:'Web Application',
    routeName :'/web-app'
  },

  {
    title:'Mobile Application',
    routeName :'/mobile-app'
  },
  {
    title:'UI-UX Design',
    routeName :'/ui-ux'
  },
  {
    title:'Project Support',
    routeName :'/project-support'
  }
]




//creaate Itservices component
function Itservices(){


return(<>
<BrowserRouter>



<div class="container-fluid p-4">

<h2>IT SERVICES</h2>
<p>
IT services refers to the application of business and technical expertise to enable organizations in the creation, management and optimization of or access to information and business processes.

The IT services market can be segmented by the type of skills that are employed to deliver the service (design, build, run). There are also different categories of service: business process services, application services and infrastructure services.

If these services are outsourced, they are referred to as business process outsourcing (BPO), applications outsourcing (AO) and infrastructure outsourcing.

</p>

</div>

<div class="container my-5">

  <div class="Row">

    <div class="col-lg-3"> 






{/*}
  <ul class="list-group ">

       <li class="list-group-item">
             <Link to="/itservices/webapp">WebApplication SERVICES</Link>
       </li>
        
         <li class="list-group-item"> 
         <Link to="/itservices/mobileapp">Mobile Application SERVICES</Link>
        </li> 
 
       <li class="list-group-item"> 
              <Link to="/itservices/ui-ux">UI-UX Design SERVICES</Link> 
       </li> 

     <li class="list-group-item"> 
             <Link to="/itservices/support">Project Support SERVICES</Link>
       </li> 
  
 
  </ul>
  */}

  <ul class="list-group">
              {

                 services.map((data,i)=>{
                  return(
                  <li class="list-group-item"> 
                  <Link to={`/itservices${data.routeName}`}>
                   {data.title}
                    </Link>
            </li> )
                 })
              }


  </ul>

    </div>


    <div class="col-lg-9">

      {/*nested router*/}

      
           <Switch>
               <Route exact path="/itservices"component={WebApplication} />

               <Route path="/itservices/web-app"component={WebApplication} />
               <Route path="/itservices/mobile-app"component={MobileApplication} />
              
      
          </Switch>
      



      {/*nesting router*/}
</div>
</div>
</div>

</BrowserRouter>
</>)
}

 export default Itservices;