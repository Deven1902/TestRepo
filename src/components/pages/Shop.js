import React from "react";
// import Navbar from "../Navbar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container }  from "react-bootstrap";
import './Shop.css'; 
import Simg1 from'./Simg1.webp';
import Simg2 from'./Simg2.webp';
import Simg3 from'./Simg3.webp';
import Simg4 from'./Simg4.webp';
import Simg5 from'./Simg5.webp';
import Simg6 from'./Simg6.webp';
import Simg7 from'./Simg7.webp';
import Simg8 from'./Simg8.webp';
import Simg9 from'./Simg9.webp';


function Shop() {
    return(
        <div>
        <Container fluid className="shop"> 
        <h1>Our <br/> Products</h1>
        <Row className="shopRow">
            <Col className="shopCol"><img src={Simg1} style={{width:"50%"}}></img></Col>
            <Col className="shopCol"><img src={Simg2} style={{width:"50%"}}></img></Col>
            <Col className="shopCol"><img src={Simg3} style={{width:"50%"}}></img></Col>
        </Row>
        <Row className="shopRow">
            <Col className="shopCol"><img src={Simg4} style={{width:"50%"}}></img></Col>
            <Col className="shopCol"><img src={Simg5} style={{width:"50%"}}></img></Col>
            <Col className="shopCol"><img src={Simg6} style={{width:"50%"}}></img></Col>
        </Row>
        <Row className="shopRow">
            <Col className="shopCol"> <img src={Simg7} style={{width:"50%"}}></img></Col>
            <Col className="shopCol"><img src={Simg8} style={{width:"50%"}}></img></Col>
            <Col className="shopCol"><img src={Simg9} style={{width:"50%"}}></img></Col>
        </Row>
        </Container>
        </div>
    )
}

export default Shop 