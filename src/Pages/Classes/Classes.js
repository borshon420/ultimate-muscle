import React from "react";
import "./Classes.css";
import classesImg1 from "../../images/classes/1.jpg";
import classesImg2 from "../../images/classes/2.jpg";
import classesImg3 from "../../images/classes/3.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div>
      <div className="about-us-banner">
        <h1>PERSONAL TRAINING</h1>
        <h4>Explore the session...</h4>
      </div>
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
            <img src={classesImg1} alt="" />

            <h1>Gym Ball</h1>
          </div>
          <div className="class-1">
            <img src={classesImg2} alt="" />

            <h1>X Blast</h1>
          </div>
          <div className="class-1">
            <img src={classesImg3} alt="" />

            <h1>Surge</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Classes;
