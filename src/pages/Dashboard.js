import React from "react";
import NavBar from "../components/Navbar";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Dashboard Page</h1>
      </Container>
    </>
  );
};

export default Dashboard;
