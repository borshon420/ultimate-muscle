import React from "react";
import "./AboutUs.css";
import aboutUsImage1 from "../../images/about-us/1.jpg";
import aboutUsImage2 from "../../images/about-us/2.jpg";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-banner">
        <h1>ABOUT US</h1>
      </div>
      <Container>
        <div className="about-us-container">
          <div className="img-content">
            <img src={aboutUsImage2} alt="" />
          </div>
          <div className="text-content-1">
            <h1>Personal Training</h1>
            <p>
              As a multi-faceted fitness and health company which is encompassed
              by the talents of many diversely skilled professionals, we have
              sought to. it is these values which every new client will see come
              to life when their training journey begins, as they drive us as
              trainers each day to achieve the positive results that everyone.
            </p>
            <Link to="/services">
              <Button variant="dark">Join Now</Button>
            </Link>
          </div>
        </div>
        <div className="about-us-container">
          <div className="text-content">
            <h1>Our Philosophy</h1>
            <p>
              Multi-faceted fitness and health company which is encompassed by
              the talents of many diversely skilled professionals, we have
              sought to. it is these values which every new client will see come
              to life when their training journey begins, as they drive us as
              trainers each day to achieve the positive results that everyone.
            </p>
            <Link to="/services">
              <Button variant="dark">Join Now</Button>
            </Link>
          </div>
          <div className="img-content">
            <img src={aboutUsImage1} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
