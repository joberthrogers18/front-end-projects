import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import './index.css';
import { GoGraph, GoArrowBoth, GoBrowser } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import {IconContext} from "react-icons";

const Content = () => (
    <Row className="ml-3 mr-3">
        <Col className="margin-buttons">
            <Row >
                <Col> 
                    <Row className="float-left">
                        <Col className="ml-5 mx-auto">
                            <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                                <div>
                                    <GoGraph />
                                </div>
                            </IconContext.Provider>
                        </Col>
                        <Col >
                            <p className="general-fonts">Tokenize</p>
                        </Col>
                    </Row>
                </Col>
                <Col > 
                    <Row className="float-left">
                        <Col className="ml-5 mx-auto">
                            <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                                <div>
                                    <GoArrowBoth />
                                </div>
                            </IconContext.Provider>
                        </Col>
                        <Col >
                            <p className="general-fonts" >Sketing</p>
                        </Col>
                    </Row>
                </Col>
                <Col> 
                    <Row className="float-left">
                        <Col className="ml-5 mx-auto">
                            <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                                <div>
                                    <GoBrowser />
                                </div>
                            </IconContext.Provider>
                        </Col>
                        <Col>
                            <p className="general-fonts" >Leding</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="float-left mt-4 container-text">
                <Col>
                    <h1 className="text-light text-left">P2P Multi-funcional <br/> Plataform</h1>
                </Col>
            </Row>
            <Row className="container-text border border-dark rounded bg-dark">
                <Col className="mt-3">
                    <p className="text-light text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <form>
                    <div className="form-group">
                        <Row>
                            <Col >
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light" id="addon-wrapping"><IoMdMail /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Your email address"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">Get Notified</button>
                                    </div>
                                </div>
                            </Col >
                        </Row>
                    </div>
                </form>
            </Row>
            <Row>
                <Col>
                    <small className="general-fonts float-left">Subscribe for updates and latest developments</small>
                </Col>
            </Row>
        </Col>
        <Col className="row d-flex justify-content-center" id="card-hour">
            <Card bg="dark" text="white" style={{ width: '28rem' }}>
                <Card.Header>Registre-se agora e ganhe 10% de desconto</Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <Row className="ml-2 mr-2">
                            <Col ><Row className="font-hour">04</Row><Row >Dias</ Row></Col>
                            <Col className="font-hour">:</Col>
                            <Col ><Row className="font-hour">15</Row><Row >Horas</ Row></Col>
                            <Col className="font-hour">:</Col>
                            <Col ><Row className="font-hour">36</Row><Row >Minutos</ Row></Col>
                            <Col className="font-hour">:</Col>
                            <Col ><Row className="font-hour">00</Row><Row >Segundos</ Row></Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default Content;
