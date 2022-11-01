import React from "react";
import Footer from "../Footer";
import { Container, Row, Col} from "react-bootstrap";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";
import AboutImg from './AboutImg.webp';

function About() {
    return (
        <Container fluid style={{position:"relative"}}>
            <div style={{ backgroundColor: "#CDF0EA", marginTop: '8%', marginBottom: '8%'}}>
                <Row>
                    <Col>
                        <img src={AboutImg} style={{width: '100%'}}></img>
                    </Col>

                    <Col>
                        <h2 className="hello">Hello</h2>
                        <h1>My Name is Nora</h1> 

                        <p>
                        I'm a paragraph. Click here to add your own text 
                        and edit me. It’s easy. Just click “Edit Text” 
                        or double click me to add your own content and 
                        make changes to the font. Feel free to drag and 
                        drop me anywhere you like on your page. I’m a 
                        great place for you to tell a story and let your 
                        users know a little more about you.
                        
                        This is a great space to write long text about your 
                        company and your services. You can use this space to
                        go into a little more detail about your company. 
                        Talk about your team and what services you provide.
                        </p>
                    </Col>
                </Row>
                <Row>
                    insert dynamic map hereS
                </Row>
            </div>
        {/* <Footer /> */}
        </Container>
    )
}

export default About