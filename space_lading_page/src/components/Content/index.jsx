import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import './index.css';

const Content = () => (
    <Row>
        <Col>

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
