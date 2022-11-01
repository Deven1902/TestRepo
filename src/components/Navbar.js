import React, {useState, useEffect} from "react";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import './Navbar.css'; 
import Cards from "./Cards";
import Shop from "./pages/Shop";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        PosterGal
                    </Link>
                    <div className="menu-icon" onClick={handleClick}> </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="item">
                            <Link to={Shop} className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item"> 
                            <Link 
                                to='./Shop'
                                className="nav-links"
                                onClick={closeMobileMenu} >
                                    Shop
                            </Link>
                        </li>
                        <li className="nav-item"> 
                            <Link 
                                to='/about'
                                className="nav-links"
                                onClick={closeMobileMenu} >
                                    About
                            </Link>
                        </li>

                        <li>
                            <Link to='/contact' className="nav-links-mobile" onClick={closeMobileMenu} >
                                Conatct
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Conatct</Button>}
                </div>
            </nav>
        </div>
    );
}

export default Navbar