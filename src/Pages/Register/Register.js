import React from "react";
import "./Register.css";
import registerLogo from "../../images/logo2.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    error,
    signInUsingGoogle,
    name,
    handleNameChange,
  } = useAuth();
  console.log(name);
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.form || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
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
          <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-4" controlId="formBasicText">
              <Form.Control
                type="text"
                onBlur={handleNameChange}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
              <div className="text-white">
                <span>{error}</span>
              </div>
            </Form.Group>
            <Button
              className="w-100 mb-4"
              variant="danger"
              type="submit"
              value="submit"
            >
              Register
            </Button>
          </Form>
        </div>
        <div className="mb-3 text-white">
          <Link to="/login">Alredy registered?</Link>
        </div>
        <Button className="btn btn-primary" onClick={handleGoogleLogin}>
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
