import Button from 'react-bootstrap/Button'
import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import email from '../../images/email.png'

import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <Container className="my-3">
            <Row>
                <Col xs={12} md={9}>
                    <Form className="w-50 mx-auto shadow p-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={12} md={3}>
                    <Row className="flex-column my-5">
                        <h6>Or Sign in instead using</h6>
                        <Col className="my-2" xs={6} md={4}>
                            <button onClick={signInUsingGoogle} className="border-0 bg-transparent">
                                <Image className="img-fluid" src={google} rounded />
                            </button>
                        </Col>
                        <Col className="my-2" xs={6} md={4}>
                            <button className="border-0 bg-transparent">
                                <Image className="img-fluid" src={email} roundedCircle />
                            </button>
                        </Col>
                        <Col className="my-2" xs={6} md={4}>
                            <button className="border-0 bg-transparent">
                                <Image className="img-fluid" src={facebook} thumbnail />
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;