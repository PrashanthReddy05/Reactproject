
import React, {Component} from 'react'
import axios from 'axios';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//import  Container from 'react-bootstrap/Container';

//import  Row from 'react-bootstrap/Row';

//import  Col from 'react-bootstrap/col';

//import  Card from 'react-bootstrap/Card';

//mport  Button from 'react-bootstrap/Button';


//globel varible for restapi
const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=20`


 class  ReactBootstrap extends Component{
   

       constructor(props){
           super(props);
           this.state = {

            photos:[]  //Empty Array

           }
       }


        render(){
       return(<>
          <div className="container text-center">
            <h4 class="py-3">ReactBootstrap UI package</h4>

          <Container>
                  <Row>


                      {
                        this.state.photos.map((res, i)=>
                        {
                          return(<Col lg={4} md={4} sm={6} xs={12}>
              
<Card classNmae="my-2">
     
<Card.Img variant="top" className="w-50 mx-auto my-2" src="res.thumbnail" />
<Card.Body>
    <Card.Title>{res.title}</Card.Title>
<a class="btn btn-primary" herf={res.url} target="_blank" >Visit Site </a>
</Card.Body>
</Card>                   
                                
     </Col>)

        })
     }    
     
     </Row>

          </Container>

          </div>

          </> )
        }

componentDidMount()
{
    axios.get(url).then( (result)=>this.setState({ photos:result.data}));
}


} 
export default ReactBootstrap;