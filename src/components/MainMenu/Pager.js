import React from 'react'

export default  (props) => {
    //undefined array
    var numbers = []

    var {totalpostsInAPI, maxDisplayrecordsPerButton, getButtonNumber} = props

    var numberOfButtons = totalpostsInAPI / maxDisplayrecordsPerButton;

    for(let i=1;i<=numberOfButtons;i++){
        numbers.push(i)//defined array
    }
    return (<>
    <div className="container p-5">
        <ul class = "pagination">
        {
             numbers.map((bno, i)=> <li class="page-item">
            <a class="page-link" href="#" onClick={()=>getButtonNumber(bno)}>{bno}</a>
            </li> )
            }
        
        </ul>
      
    </div>
    </>)

  
}
