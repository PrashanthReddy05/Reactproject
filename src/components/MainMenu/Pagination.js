import {React, useState, useEffect} from 'react'
import axios from 'axios';
import Pager from './Pager.js';


const apiurl = "https://jsonplaceholder.typicode.com/posts"

export default ( props ) => 

{
     //state object implememted by Hooks
    var [posts, setStatePosts] = useState([]);

     // displat max_display posters per action
    var [DefaultMaxDisplayposts] = useState(10);
   //firstButtonNumber
    var[DefaultButton,setStateDefaultButton] =useState(1);

    //lastindex
    var lastindex = DefaultButton*DefaultMaxDisplayposts
    var FirstIndex = lastindex-DefaultMaxDisplayposts

   //total_posts from API
    var  totalPosts = posts.length

    //API calls by HOOKS
    useEffect(() => 
    {
        axios.get(apiurl).then((result) => setStatePosts(result.data))
    },[])

    //var DisplayDefaultButtonPosts = posts.slice(FirstIndex, lastindex)
    let handleButtonNumberChanges = (btnNumber) => {
        setStateDefaultButton(btnNumber)
    }
    return (<>
    <div class = "container p-5">
      <h1 className = "text-center py-4">React Hooks Pagination</h1>
      <h5>Showing {FirstIndex+1} - {lastindex} of {totalPosts}results for "Posts"</h5>
      
      <Pager totalpostsInAPI = {totalPosts} 
      maxDisplayrecordsPerButton = {DefaultMaxDisplayposts}
      getButtonNumber={(bno)=>handleButtonNumberChanges(bno)}/>
      
      {
        posts.slice(FirstIndex, lastindex).map( (res,i)=> {
            return(<ul key = {i}>
               <li>
                <h4>{res.id}.{res.title}</h4>
                <p>{res.body}</p>
               </li>
                
                
            </ul>)
        })
      }
     </div>

    
</>)
}
