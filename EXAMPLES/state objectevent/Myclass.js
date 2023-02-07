import  React from 'react'

//globel varaible
//var MobileNo=5659129801

class Myclass extends React.Component
{

    //id=109;
    //email="venkatesh@gmail.com"


    //constructor
    constructor(props)
    {

        super(props);
//step-1 staate object initilization
          this.state =
          {

                 email:'venkat@gmail.com',
                 Phone: 5659129801
                 

          }

    }

    stateChanges=()  =>
    {
        this.setState({
           email: 'ch.venky@gmail.com' ,
           Phone: 7207237892
        })
        
    }

//prepare the input
//render is a class method
render()
{

return (<>
    
<div className="container p-5">

<h1>REACT CLASS COMPONENT &  STATE & EVENTS</h1>
{/* step-2 access state object properties from jsx*/}
  <p>Email is: {this.state.email}</p>
  <button onClick={()=>this.setState({email:'venkatesh@gmail.com'})}>Change My Email</button>

<br/><br/>
<p>phone is: {this.state.Phone}</p>

<button onClick={()=>this.setState({Phone:5659129801})}>Change My Phone</button>

  {/* step-3 change state object data by setstates */}


<br/><br/>


<button onClick={()=> this.stateChanges()}>Update All states properties</button>
</div>


</>);
}
}

export default Myclass;
