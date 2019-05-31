import React from 'react';
import {Navbar, Image, Row, Col} from 'react-bootstrap';
import imageInitial from './img/ship.png';
import {IconContext} from "react-icons";
import { FaFacebookSquare, FaGithubAlt, FaWhatsapp } from "react-icons/fa";
import './index.css';

const Header = () => (
    <Navbar bg="transparent" expand="lg">
            <Col sm={9} ><Navbar.Brand href="#home" className="float-left"><Image id="image-brand"src={imageInitial} alt=""/></Navbar.Brand></Col>
            <Col sm={3}>
                <Row>
                    <Col>
                        <IconContext.Provider value={{color: "blue", size: "2em"}}>
                            <div>
                                <FaFacebookSquare />
                            </div>
                        </IconContext.Provider>
                    </Col>
                    <Col>
                        <IconContext.Provider value={{color: "blue", size: "2em"}}>
                            <div>
                                <FaGithubAlt />
                            </div>
                        </IconContext.Provider>
                    </Col>
                    <Col>
                        <IconContext.Provider value={{color: "blue", size: "2em"}}>
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
