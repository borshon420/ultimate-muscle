import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="my-5">
      <div className="classes-text">
        <h5>
          In every cardio games session our fun and unique challenges are always
          <br /> guaranteed to provide you with an effective full body workout.
        </h5>
        <hr />
        <h1 className="mt-3">OUR SERVICES</h1>
        <h5>Of Professional Training</h5>
      </div>
      <Container>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
