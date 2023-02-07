
import React, {Component} from 'react'
import axios from 'axios'

const url = `http://localhost:3001/users`

export default class Signup extends Component{

    constructor (props) {
         super(props);

         this.state =
         {
             uname:'',
             email: '',
             phone: '',
             textConformation: ''
         }
    }
// name.input textbox
unameHandling=(e)=>
{
    this.setState({uname: e.target.value})
}
  
// email.input textbox
emailHandling=(e)=>
{
    this.setState({email: e.target.value})
}

// phone.input textbox
phoneHandling=(e)=>
{
    this.setState({phone: e.target.value})
}

submitHandler = (e) =>{

e.preventDefault();

var FormData =
{
     "name":this.state.uname,
     "email":this.state.email,
     "phone":this.state.phone


}
    alert(JSON.stringify(FormData));


/*
    axios.post(url, formdata)
    .then(()=>window.alert("...CREATED..."))
   .catch(()=> window.alert("ERROR"));
*/

/*
     axios.post(url, Formdata)
  .then(()=>window.setState({txtConformation:'Accounted Created....'}))
    .catch(()=> window.setState({txtConformation:'Accounted Failed....'}))
*/

//redirect
axios.post(url, FormData)
.then(()=> {
    window.alert("Created");
    this.props.history.push('/restapi')

 });



}
render() {

console.log(this.props)
//destructuring
        var { uname, email, phone,txtConformation } =this.state

        return(<>
            <div  className="container p-3">

                <h4 className="py-3 text-center">USER REGISTRATION</h4>

             <div className="container w-50">


    <form  onSubmit={this.submitHandler.bind(this)}>
                
            <div className="mb-3">
                <label  className="form-label">Name </label>
                <input type="text" className="form-control" 
                value={uname} 
                onChange ={this.unameHandling.bind(this)} />
                
            </div>

    
        <div className="mb-3">
            <label  className="form-label">Email </label>
            <input type="email" className="form-control"
            value={email} 
            onChange ={this.emailHandling.bind(this)} />
                            
        </div>  


        <div className="mb-3">
           <label  className="form-label">Phone </label>
           <input type="Number" className="form-control" 
           value={phone} 
           onChange ={this.phoneHandling.bind(this)} />
      
        </div>

    
        <div className="mb-3">
        
         <button type="Submit" className="btn btn-primary">CREATE ACCOUNT</button>
 </div>  
      
      <p className="text-primary">{txtConformation}</p>
                    
    </form>

            </div>

            </div>
        </>)

}

}



