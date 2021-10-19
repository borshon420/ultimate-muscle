import React from "react";
import Services from "../Services/Services";
import "./Home.css";
import homeAboutSectionImg1 from "../../images/about-us/1.jpg";
import homeAboutSectionImg2 from "../../images/about-us/2.jpg";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classesImg1 from "../../images/classes/1.jpg";
import classesImg2 from "../../images/classes/2.jpg";
import classesImg3 from "../../images/classes/3.jpg";

const Home = () => {
  return (
    <div>
      <div className="header-section">
        <h1>
          YOU DON'T GET <span>WHAT YOU WISH FOR</span>
          <br /> YOU GET WHAT <span>YOU WORK FOR</span>
        </h1>
      </div>
      {/* service section */}
      <Services></Services>
      {/* about section */}
      <div className="classes-text">
        <h1 className="mt-3">ABOUT US</h1>
        <hr />
      </div>
      <Container>
        <div className="about-us-container">
          <div className="img-content">
            <img src={homeAboutSectionImg1} alt="" />
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
            <Link to="/about">
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
            <Link to="/about">
              <Button variant="dark">Join Now</Button>
            </Link>
          </div>
          <div className="img-content">
            <img src={homeAboutSectionImg2} alt="" />
          </div>
        </div>
      </Container>
      {/* classes section  */}
      <div className="classes-text">
        <h5>
          In every cardio games session our fun and unique challenges are always
          <br /> guaranteed to provide you with an effective full body workout.
        </h5>
        <hr />
        <h1 className="mt-3">ALL CLASSES</h1>
        <h5>Of Personal Training</h5>
      </div>
      <Container>
        <div className="classes-img">
          <div className="class-1">
            <Link to="/classes">
              <img src={classesImg1} alt="" />
            </Link>
            <h1>Gym Ball</h1>
          </div>
          <div className="class-1">
            <Link to="/classes">
              <img src={classesImg2} alt="" />
            </Link>
            <h1>X Blast</h1>
          </div>
          <div className="class-1">
            <Link to="/classes">
              <img src={classesImg3} alt="" />
            </Link>
            <h1>Surge</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
