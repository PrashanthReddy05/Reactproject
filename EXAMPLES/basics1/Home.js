
//Services.js-modules
import React,{Fragment} from 'react'

//Nested components fom this main components
import About from './About.js'

import Services from './Services.js'

import Contact from './Contact.js'


//import Images
import Reactimg from './assets/images/reactimg.webp'
import Images from './assets/images/images.jpg'
import React12 from './assets/images/react12.webp'




//internal css
var styles=
{
    textAlign:'center',
    color:'red',
    backgroundcolor:'blue',
    Reactimg:'center'
}

var emp={id:101,name:'kumar'}


//create About Component
function Home() {

    //variable
    var cname ="HOME COMPONENT"
    var cname ="Introduce React"

    
           var msg = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
         
        return (<Fragment>

            <h1 style={styles}>{cname}</h1>
            <h3 style={styles}>{cname}</h3>

            

            <img src={Reactimg}  style={ {width:"40%", height:"250px" , align:"center"} }/>

           {/*<img src={Reactimg} width="40%" height="250px"/>
            <img src={Images} width="40%" height="250px"/>
            <img src={React12} width="40%" height="25 0px"/>
        */}
        

            <p className="para">{msg}</p>

<br/><br/>
{emp.id}-{emp.name}
            
            <hr/>

            <About/>
            <hr/>
            <Contact/>
            <hr/>
            <Services/>
            
            </Fragment>
            
    
        )
}
        





export default Home;