import {React, useState, useEffect} from 'react'
import axios from 'axios';
import { textHeight } from 'fontawesome';
const apiurl = "https://fakestoreapi.com/products"

export default ( props ) => 

{

    var [products, setStateProducts] = useState([]);

    
    useEffect(() => 
    {
        axios.get(apiurl).then((result) => setStateProducts(result.data))
    },[])

  return (<>
    <div class = "container p-5">
      <h1 class = "text-center h4">React UseEffect Hooks for API calls</h1>
     <div className="row">
     {
        products.map( (res,i)=> {
            return(<div className="col-lg-3" key = {i}>
                <div class="card" >
                 <img src={res.image} className="card-img-topw-100 mx-auto my-2" style ={{height:'200px'}} />
                    <div className="card-body text-center">
                      <h6 className="card-title">{res.title}</h6>
                      <h6 className="card-title">${res.price}</h6>
                        <p className="card-text">{res.description.slice(0,30)}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                 </div>
         </div>
                
                
            </div>)
        })
      }
     </div>

    </div>
</>)
}
