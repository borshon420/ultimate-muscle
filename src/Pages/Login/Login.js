import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginLogo from "../../images/logo2.png";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-container">
      <div className="login-content">
        <Link to="/home">
          <img
            style={{ height: "100px", marginBottom: "50px" }}
            src={LoginLogo}
            alt=""
          />
        </Link>
        <div className="form-container mx-auto">
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Your Password" />
            </Form.Group>
            <Button className="w-100 mb-4" variant="danger" type="submit">
              Log in
            </Button>
          </Form>
        </div>
        <div className="mb-3">
        <Link to="/register">New Here?</Link>
        </div>
        <Button className="btn btn-primary" onClick={signInUsingGoogle}>
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
