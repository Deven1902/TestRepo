import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Cards.css';
import CardImg1 from './CardImg1.webp';
import { Container } from 'react-bootstrap';

// function Cards() {
//   return (
//     <Row xs={1} md={2} className="grid">
//         <Col>
//           <Card>
//             <Card.Img variant="top" src={CardImg1} />
//           </Card>
//         </Col>
//     </Row> 
//   );
// }

// export default Cards

export default function Cards() {
  return (
    <Container fluid style={{position:"relative"}} >
      <div style={{ backgroundColor: "#CDF0EA" }}>
        {/* <Row>
          <Col> <img src={CardImg1}></img></Col>
          <Col> 
          <div  style={{backgroundColor:"pink"}}>
            ,bb,b,b
          </div>
          </Col>
        </Row> */}
        <Row>
          <Col><img src={CardImg1} style={{ width: "100%" }}></img></Col>
          <Col>
          <div className='InnerCont'>
            <h4 style={{fontStyle: "italic" }}>New Collection</h4> 

            <h1>Style Your Walls</h1>
          </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}