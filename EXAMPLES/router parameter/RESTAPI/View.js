import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';





//globel variable for restapi
//const url = `http://localhost:3001/users`
 var idno;


class View extends Component
{

constructor(props){
    super(props)

    this.state ={
       // viewdata:{}

    }
}

    render(){
       const idno=this.props.match.params.idno

//history match location 
        console.log(idno)

        var{id,name, email, phone} =this.state

        return(
           
            <div className="container p-5">

                  <h2> VIEW COMPONET PAGE</h2>
                  <p>
                  (this.props.match.params.idno) th Record data
                  </p>


                 <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{phone}</li>
                
                 </ul>

                  <Link className="btn btn-success" to="/restapi">GOTO BACK</Link>

            </div>)  
         }
//restapi calls
componentDidMount()
{
    const url = `http://localhost:3001/users/${idno}`


         axios.get(url).then( (result)=>this.setState(result.data ));
      }


}
export default View;