import React from 'react';
import './Footer.css';
import footerLogo from '../../../images/logo2.png';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
            <Container className="footer-container-2">
            <div>
                <img style={{height: '100px'}} src={footerLogo} alt="" />
            </div>
            <div>
                <p>Pricing</p>
                <p>Classes</p>
                <p>Timetable</p>
            </div>
            <div>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms and Conditions</p>
            </div>
            </Container>
            </div>
        </div>
    );
};

export default Footer;