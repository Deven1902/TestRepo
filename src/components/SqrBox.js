import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import { Container } from 'react-bootstrap';
import './SqrBox.css';
import BoxImg1 from './BoxImg1.webp'; 
import BoxImg2 from './BoxImg2.jpg';

function SqrBox() {
    return (
      <Container fluid style={{position: "relative"}}>
        <div style={{marginTop: '10%', marginBottom: '10%'}}>
          <Row>
            <Col className='sqrImg'> 
            <div className='orangeImg' style={{}}>
              <img src={BoxImg1} style={{width: '50%'}} magrin></img> 
              <div className='whiteBox'>
                <h2 className='freeS' style={{fontStyle: 'italic', alignContent: 'center'}}>Free Shipping</h2> 
                <h1>World Wide</h1> 
                <h2>Shop Now</h2>
              </div>
             </div>
            </Col>
            <Col className='sqrImg'> 
              <div className="whiteImg" style={{}}> 
                <img src={BoxImg2} style={{width: '43%'}}></img> 
                <div className='whiteBox'>
                  <h2 className='freeS' style={{fontStyle: 'italic', alignContent: 'center'}}>Dont Miss <br/> </h2>
                  <h1>40% OFF YOUR</h1> 
                  <h1>Second Poster</h1>
                </div>
              </div>             
            </Col>
          </Row>
        </div>
      </Container>
    );
  } 

  export default SqrBox 