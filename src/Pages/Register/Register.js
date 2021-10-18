import React from 'react';
import './Register.css';
import registerLogo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className="login-container">
      <div className="login-content">
        <Link to="/home">
          <img
            style={{ height: "100px", marginBottom: "50px" }}
            src={registerLogo}
            alt=""
          />
        </Link>
        <div className="form-container mx-auto">
          <Form>
            <Form.Group className="mb-4" controlId="formBasicText">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="w-100 mb-4" variant="danger" type="submit">
              Register
            </Button>
          </Form>
        </div>
        <div className="mb-3 text-white">
        <Link to="/login">Alredy registered?</Link>
        </div>
      </div>
    </div>
    );
};

export default Register;