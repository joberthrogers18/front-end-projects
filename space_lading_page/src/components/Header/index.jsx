import React from 'react';
import {Navbar, Image, Row, Col} from 'react-bootstrap';
import imageInitial from './img/ship.png';
import {IconContext} from "react-icons";
import { FaFacebookSquare, FaGithubAlt, FaWhatsapp } from "react-icons/fa";
import './index.css';

const Header = () => (
    <Navbar bg="transparent" expand="lg">
            <Col sm={10} ><Navbar.Brand href="#home" className="float-left"><Image id="image-brand"src={imageInitial} alt=""/></Navbar.Brand></Col>
            <Col sm={2}>
                <Row>
                    <Col>
                        <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                            <div>
                                <FaFacebookSquare />
                            </div>
                        </IconContext.Provider>
                    </Col>
                    <Col>
                        <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                            <div>
                                <FaGithubAlt />
                            </div>
                        </IconContext.Provider>
                    </Col>
                    <Col>
                        <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                            <div>
                                <FaWhatsapp />
                            </div>
                        </IconContext.Provider>
                    </Col>    
                </Row>
            </Col>  
    </Navbar>
);

export default Header;
