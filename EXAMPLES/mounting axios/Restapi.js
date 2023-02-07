import React, {Component } from 'react'

import axios from 'axios';



//globel variable rest api _url
const url = `https://jsonplaceholder.typicode.com/users`


class Restapi extends Component{


    constructor(Props){
        super(Props)

        this.state =
        {
            userData: [] //empty array
        }
    }

    render(){

        return(<>
            <div className="container p-5">

                <h3 class="text-center">Fetch Restapi using globel url/clint</h3>

                <table className="table table-dark table-bordered my-5">

                     <thead className="table table-light">
                    <tr>
                        <th>Id</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>WEBSITES</th>
                        
                        <th colspan="3" className="text-center">ACTION</th>
                    </tr>
                     </thead>


                <tbody>

               {
                this.state.userData.map( (res,i)=>{
                    return(<tr key={i}>

                               <td>{res.id}</td>
                               <td>{res.name}</td>
                               <td>{res.email}</td>
                               <td>{res.website}</td>
                               <td>
                                <button className="btn-btn-primary">VIEW</button>
                               </td>

                               <td>
                                  <button className="btn-btn-danger">EDIT</button>
                                </td>

                                <td>
                                    <button className="btn-btn-warning">DELETE</button>
                                </td>


                    </tr>)
                })

               }
               </tbody>
               
        </table>

            </div>
       </> )
    }

//restapi calls
componentDidMount()
{
    axios.get(url).then( (result)=>this.setState({ userData:result.data}));
}


}
export  default Restapi;































































































