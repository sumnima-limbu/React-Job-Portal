import React, { useState } from "react";
import loginImg from "../images/background/loginbg.jpg";
import { Button, Form } from "react-bootstrap";
import useLocalStorage from "../components/useLocalStorage";
import { Navigate, useNavigate } from "react-router-dom";

const DEFAULT_EMAIL = "admin@gmail.com";
const DEFAULT_PASSWORD = "admin";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const { getLocalData, setLocalData } = useLocalStorage();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (state.email === DEFAULT_EMAIL && state.password === DEFAULT_PASSWORD) {
      setLocalData("isLoggedIn", true);
      navigate("/dashboard");

      console.log(state);
      console.log("isLoggedIn", isLoggedIn);
    }
  };

  if (getLocalData("isLoggedIn")) {
    return <Navigate to="/dashboard" />;
  }

  console.log(DEFAULT_EMAIL, DEFAULT_PASSWORD);
  console.log(state);

  return (
    <div className="page-content">
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${loginImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          {/* Login Page */}
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="text-white offset-md-1 py-4">
                <h3 className="py-4">JOBS2RIDE</h3>
                <h2 className="mb-3">Login To You Know</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  <br />
                  typesetting industry has been the industry.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login bg-light col-lg-8 offset-md-3">
                <Form>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <p className="text-muted">
                      If you have an account with us, please log in.
                    </p>

                    <Form.Label className="fw-semibold">
                      E-Mail address*
                    </Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="fw-semibold">Password*</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
            <div className="h-400"></div>
            <div className="col-lg-12 p-4">
              <hr className="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
