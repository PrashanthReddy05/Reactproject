//Services.js-modules
import React from 'react'

//create About Component
function Services() {

var our_Services = ["Mobile","WebApplication-Apps","Advertising","services","offers"]


    return (<div>
    
        <h1>Services Component</h1>
    
        <p class ="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h3>our services are: </h3>
        
    
       {/*<ul>
            <li>{our_services1}</li>
            <li>{our_services2}</li>
            <li>{our_services3}</li>
        </ul>
    */}
    
<h2>listing
</h2>
       <ul>
        {
            our_Services.map((res,i) =><li key={i}> {i+1}.{res} </li>)
        }
       </ul>
       


        
    </div>)
    
}

export default Services;