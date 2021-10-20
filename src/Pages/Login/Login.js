import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginLogo from "../../images/logo2.png";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    error,
    user,
    processLogin,
    name,
    email,
    password
    
  } = useAuth();
  // console.log(user);
  // console.log(email);
  // console.log(password);
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
            src={LoginLogo}
            alt=""
          />
        </Link>
        <div className="form-container mx-auto">
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Your Password"
                required
              />
              <div className="text-white">
                <span>{error}</span>
              </div>
            </Form.Group>
            <input onClick={(e)=> {e.preventDefault();
processLogin()}} value="Log in" className="w-100 mb-4" variant="danger" type="submit" />
              
          </Form>
        </div>
        <div className="mb-3">
          <Link to="/register">New Here?</Link>
        </div>
        <Button className="btn btn-primary" onClick={handleGoogleLogin}>
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
