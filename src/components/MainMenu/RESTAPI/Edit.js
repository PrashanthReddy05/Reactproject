import axios from 'axios';
import React, {Component} from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'


//globel variable for restapi
const url = `http://localhost:3001/users`
 var idno;


 export default class View extends Component
{

constructor(props) {
    super(props);

    this.state ={
      
        name:'',
        email: '',
        phone: '',
        txtConformation: ''
    }
       
}
// name.input textbox
unameHandling=(e)=>
{
    this.setState({name: e.target.value})
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
     'name':this.state.name,
     'email':this.state.email ,
     'phone':this.state.phone


}

alert(JSON.stringify(FormData));

  //redirect
axios.put(`${url}/${idno}`, FormData)
.then(()=>{
  window.alert("updated");
 this.props.history.push('/restapi')
});

}

    render()
    {
        idno=this.props.match.params.idno

//history match location 
        console.log(idno)

        var{ name, email, phone, txtConformation} = this.state

        return(<>

                  <div className="container p-5">

                    <h4 className="text-center">EDIT compoment PAGE</h4>

          <form onSubmit={this.submitHandler.bind(this)}>
   {/*       
  <div className="mb-3">
  <label  className="form-label">Id </label>
  <input type="id" className="form-control" 
  value={id} 
  onChange ={this.idHandling.bind(this)} />
  </div>
        */}
  

  <div className="mb-3">
<label  className="form-label">Name </label>
<input type="text" className="form-control" 
value={name} 
onChange ={this.unameHandling.bind(this)} />
</div>

<div className="mb-3">
<label  className="form-label">Email</label>
<input type="email" className="form-control" 
value={email} 
onChange ={this.emailHandling.bind(this)} />
</div>

<div className="mb-3">
<label  className="form-label">phone</label>
<input type="number" className="form-control" 
value={phone} 
onChange ={this.phoneHandling.bind(this)} />
</div>


  </form>

<Link className="btn btn-success mx-2" to="/restapi">GOTOBACK</Link>

<button  type="submit" className="btn btn-warning text-white" value="Update">Update</button>

     </div>
   

    </>)
   }
  

   //RESTAPI calls
   componentDidMount(){
   
    axios.get(`${url}/${idno}`).then((result)=>  this.setState(result.data));

   }
  }
  






    
    
    
    
    
    
    
    
    

    
    
    

