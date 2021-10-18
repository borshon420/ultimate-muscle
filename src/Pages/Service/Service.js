import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, description, id } = service;
  return (
    <div>
      <div className="service-container">
        <Container>
          <div className="card">
            <img style={{height: '250px'}} src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {description.slice(0, 100)}
              </p>
              <Link to={`/serviceDetails/${id}`}>
                    <Button variant="dark">Join Me</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Service;
