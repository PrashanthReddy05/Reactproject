import {React, useEffect } from 'react'
import { connect, Connect } from 'react-redux';
import EmpAction from './../../actions/empAction.js';
import empAction from './../../actions/empAction.js'
import UsersAction from './../../actions/usersAction.js'
import StudentAction from './../../actions/studentsAction'

import { bindActionCreators } from 'redux';

let HooksRedux = (props) => {
  useEffect(() =>{
      props.EmpAction();
      props.UsersAction();
      props.StudentAction();
    },[]);
  
  return (<>
      <div className='container py-2'>
           <h2 className='text-center'>ReactReduxConnection Example</h2>
            <h3>Synchronous Data from Redux_Actions</h3>
  
           {
            props.empdata.map((res,i)=>
            {
              return(<ul key = {i}>
                <li>{res.id}</li>
                <li>{res.Name}</li>
                <li>{res.email}</li>
              </ul>)
            })
           }
           
    <h3>ASynchronous Data[Global_REST API] from Redux_Actions</h3>
  
  {
   props.userdata.map((res,i)=>
   {
     return(<ul key = {i}>
       <li>{res.id}</li>
       <li>{res.name}</li>
       <li>{res.email}</li>
     </ul>)
   })
  }
    <h3>ASynchronous Data[Local_REST API] from Redux_Actions</h3>
  
  {
  props.studentdata.map((res,i)=>
   {
     return(<ul key = {i}>
       <li>{res.id}</li>
       <li>{res.name}</li>
       <li>{res.email}</li>
     </ul>)
   })
  }
        
  </div>
  </>)
  
}

const mapStateToProps = (state) => {

  console.log(state)

  return({
    empdata: state.empReducer,
    userdata: state.userReducer,
    studentdata: state.studentReducer
  })

}
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators ({EmpAction,UsersAction, StudentAction}, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(HooksRedux)