import React from "react";
import ContactImg from './ContactImg.webp'; 
import { Container, Row, Col } from "react-bootstrap";


function Contact() {
    return (
        <Container fluid style={{position: 'relative'}}>
            <div>
                <Row>
                    <img src={ContactImg} style={{width: '100%'}}></img>
                    <div className="contactInfo">
                        {/* <p>
                        500 Terry Francois Street <br />
                        San Francisco, CA 94158
                        </p>
                        <hr></hr> */}

                        <Col>
                            <div className="address">
                            500 Terry Francois Street <br /> <br />
                            San Francisco, CA 94158 

                            <hr />

                            Tel: 123-456-7890    <br /> <br />
                            Email: info@mysite.com
                            </div>
                        </Col>

                        <Col> 
                            <div className="openingHours">
                                <h3>Opening Hours</h3>
                                <hr />
                                Mon - Fri: 9am - 8pm <br />
                                ​​Saturday: 9am - 7pm <br />
                                Sunday: 10am - 6pm  <br /> 
                            </div>
                        </Col>

                        <Col className="contactForm">
                        <form>      
                            <input className="feedback-input" name="Name" type={Text} placeholder="Name"></input>
                            <input className="feedback-input" name='email' type={"email"} placeholder="E-mail"></input>
                            <input className="feedback-input" name='phone' type={"phone"} placeholder="Phone"></input>
                            <input className="feedback-input" name='message' type={Text} placeholder="Write your Message here"></input>
                            <input type={SubmitEvent} className="feedback-input" placeholder="Submit"></input>
                        </form>
                        </Col>
                    </div>
                </Row>
            </div>
            <div>
                <Row>
                    {/* insert map here... idk how to? */}
                </Row>
            </div>
        </Container>
    )
}

export default Contact 