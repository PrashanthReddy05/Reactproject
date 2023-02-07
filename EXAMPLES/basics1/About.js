//about.js-modules
import React,{Fragment} from 'react'


//import Extranal css to React
import './assets/css/custom.css';
//import { Fragment } from 'react'//

// varianle
var cname ="About COMPONENT"

//js array object
var empdata =[
    {
        id:1,
        name:'kumar'
    },
    {
        id:2,
        name:'venky'
    },
    {
        id:3,
        name:'kiran'
    },

];



//create About Component

function About() 
{
    return (<Fragment>

        <h1 className="text-center text-primary">About Component</h1>

        <p className="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no
into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

{/*<h1 style={styles}>{cname}</h1>*/}
{
    empdata.map((res, i) =>
    {
        return(<ul key={i}>
            <li>{res.id}</li>
            <li>{res.name}</li>
        </ul>)
    })
}
       
         
    </Fragment>)
    
}

export default About;