import React, {Component} from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'


//globel variable for restapi
//const url = `http://localhost:3001/users`
 var idno;


 export default class View extends Component
{

constructor(props){
    super(props)

    this.state ={
       // viewdata:{}

    }
}

    render()
    {
        idno=this.props.match.params.idno

//history match location 
        console.log(idno)

        var{id, name, email, phone} = this.state

        return(<>

                  <div className="container p-5">

                    <h4 className="text-center">EDIT compoment PAGE</h4>

          <form>
  <div class="mb-3">
  <label  class="form-label">Id </label>
  <input type="email" class="form-control" value={id} />
  </div>

  <div class="mb-3">
<label  class="form-label">Name </label>
<input type="email" class="form-control" value={name} />
</div>

<div class="mb-3">
<label  class="form-label">Email</label>
<input type="email" class="form-control" value={email} />
</div>

<div class="mb-3">
<label  class="form-label">phone</label>
<input type="email" class="form-control" value={phone} />
</div>


          </form>

<Link className="btn btn-success mx-2" to="/restapi">GOTOBACK</Link>

<button  type="sun=bmit" class="btn btn-warning text-white" value="Update">Update</button>

     </div>

    </>)
   }

}


    
    
    
    
    
    
    
    
    

    
    
    

