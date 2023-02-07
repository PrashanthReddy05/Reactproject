import React, {Component} from 'react'

 class Lifecycle extends Component{
 constructor(props)
 {
    super(props);
    this.state ={}
    console.log(`*****Constructor_is Mounting_Method*****`)
 }


 UNSAFE_componentWillMount(){
    console.log(`**********componentwillmount is mounting method********`)
 }



    //Render is MOunting MEthod
    render()
    {
        console.log(`*******Render _is Mounting_Method*******`)

        return (<>
            <div className="p-5 text-center">

                 <h2>Reacr class component life cycle process</h2>

            </div>
        </>)
    }
//restApi
componentDidMount()
{
    console.log(`*******component is mounting metgod*******`)
}



}

export default Lifecycle;