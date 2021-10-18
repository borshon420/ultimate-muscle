import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="not-found-page">
        <Container className="d-flex align-items-center justify-content-center">
        <div className="not-found-text">
          <h1>OH NO</h1>
          <h1>PAGE 404 FOUND</h1>
          <p>This probably not what you are looking for......</p>
          <Link to="/home">
              <Button variant="light">Back to Home</Button>
          </Link>
        </div>
        
        </Container>
      </div>
    </div>
  );
};

export default NotFound;
