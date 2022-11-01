import React from "react";
import { Button } from "react-bootstrap";
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subcribe and stay on top of our latest news and promotions 
                </p>
                
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Enter your email here" className="footer-input" /> 
                        <Button buttonStyle = 'btn--outline'>Subcribe</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer 