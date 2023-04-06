import React from "react";
import Banner from "../images/Banner.jpg";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const Header = () => {
  return (
    <div class="page-content">
      <div
        style={{
          display: "flex",
          minHeight: 600,
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundImage: `url(${Banner})`,
          //   opacity: 0.8,
        }}
        src={Banner}
        alt="Banner Image"
      >
        <div className="container col-lg-9">
          <div className="Row text-center">
            <h2 className="title px-3">The Easiest Way to Get Your New Job</h2>
            <h3 className="sub-title">
              Find Jobs, Employment & Career Opportunities
            </h3>
            <Form className="input-group mx-3">
              <InputGroup className="mb-3">
                <Form.Control placeholder="Job Title, Keywords Or Company Name" />
                <Form.Control placeholder="City, Province Or Region" />
                <Button variant="primary" className="px-4">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
