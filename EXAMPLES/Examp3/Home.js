
//Services.js-modules
import React from 'react'

//Nested components fom this main components
import About from './About.js'

import Services from './Services.js'

import Contact from './Contact.js'







//create About Component
function Home() {
    return (<div>
        <h1>Home Component</h1>
        <h3>Home component</h3>
        <p class ="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no
into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         
        </p>
        
        
        
        
        
        <hr/>

<About/>
<hr/>

<Contact/>
<hr/>

<Services/>





    </div>
    )
}

export default Home;