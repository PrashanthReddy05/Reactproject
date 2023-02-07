import {React, useState} from 'react'

export default ( props ) => 

{

    var [stateEmail, setStateEmail] = useState("prashanth@gamil.com");

    let handleStateEmail = () => {

        setStateEmail("prashanthreddy@gmail.com")
    }
  return (<>
    <div class = "container p-5">
      <h1>React Hooks UseState</h1>
      {stateEmail}
      <button onClick={handleStateEmail}>Update Email</button>
    </div>
</>)
}

