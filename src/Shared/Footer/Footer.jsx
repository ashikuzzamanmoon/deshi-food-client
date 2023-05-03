import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="bg-dark text-white py-5">
                <Container>
                    <Row>
                        <Col md={3}>
                            <h5>About Us</h5>
                            <p>We are a team of food enthusiasts who love to share our passion for cooking and eating with others.</p>
                        </Col>
                        <Col md={3}>
                            <h5>Categories</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Appetizers</a></li>
                                <li><a href="#">Main Dishes</a></li>
                                <li><a href="#">Desserts</a></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5>Contact Us</h5>
                            <address>
                                <p>Asfia Tower, Rd No. 11</p>
                                <p>Dhaka 1213, Bangladesh</p>
                                <p>Phone: (555) 555-1212</p>
                            </address>
                        </Col>
                        <Col md={3}>
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#"> <span> <AiFillFacebook></AiFillFacebook> </span> </a> Facebook</li>
                                <li><a href="#"> <span> <AiFillTwitterSquare></AiFillTwitterSquare> </span> </a> Twitter</li>
                                <li><a href="#"> <span> <AiFillInstagram></AiFillInstagram> </span> </a> Instagram</li>
                            </ul>
                        </Col>
                    </Row>
                    <hr />
                    <p className="text-center">&copy; {new Date().getFullYear()} Deshi Food</p>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;