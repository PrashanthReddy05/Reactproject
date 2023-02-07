
import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

//Global variable for Rest_api url
//const url = `https://jsonplaceholder.typicode.com/users` 
const url = `http://localhost:3001/users`

class Restapi extends Component{
  constructor(props){
        super(props);

        this.state=
        {
            userData:[]  //Empty Array
        }
   }



   //our own function for code reusability
   getData = (id)=>{
     axios.get(url).then((result)=>this.setState({userData:result.data}))
   }

   //Delete data
   DeleteHandler=(id)=>{
     if(window.confirm(`Delete this record number is ${id}?`))
     {
      //This is used for  Delete
      axios.delete(`${url}/${id}`)//http://localhost:3001/users/1
   
      //fetch the remaing data after delete the particular data and display that remain data
       this.getData()
     }
   }
   
   
    render(){
        return(<>
          <div className='container p-5'>
            <h3 className='text-center'>FETCH REST API DATA USING LOCAL URL/CLIENT</h3>
            <table className='table table-dark table-borderd my-5'>
               <thead className='table table-light'>
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th colSpan='3' className='text-center'>ACTION</th>
                </tr>
               </thead>
               <tbody>
                  {
                  this.state.userData.map((result,i)=>{
                    return(<tr key={i}>
                            <td>{i+1}</td>
                            <td>{result.name}</td>
                            <td>{result.email}</td>
                            <td>{result.phone}</td>
                            <td>
                              <Link to={`/restapi/view/${result.id}`} className='btn btn-primary'>View</Link>
                            </td>

                            <td>
                              <Link to={`/restapi/edit/${result.id}`} className='btn btn-warning'>Edit</Link>
                            </td>

                            <td> 
                               <button onClick={()=>this.DeleteHandler(result.id)} className='btn btn-danger'>Delete</button> 
                           </td> 

                        

                    </tr>)
                  })
                }
               </tbody>

            </table>
          </div>
        
        </>)
    }
    //Rest API calls
    
componentDidMount()
{
    this.getData();
}
   
}
export default Restapi;
























































































