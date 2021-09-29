import Button from "react-bootstrap/Button";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/Logo.png";
import backImage from "../../images/background-image.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-style px-5">
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-success">
              <Nav.Link className="text-success" href="#features">
                Overview
              </Nav.Link>
              <Nav.Link className="text-success" href="#pricing">
                Contagion
              </Nav.Link>
              <Nav.Link className="text-success" href="#pricing">
                Symptom
              </Nav.Link>
              <Nav.Link className="text-success" href="#pricing">
                Prevention
              </Nav.Link>
              <Nav.Link className="text-success" href="#pricing">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row">
        <div className=" header-text col-md-6 my-auto">
          <h4 className="fw-bolder text-danger">COVID-19 Alert</h4>
          <h1 className="fw-bold my-4 text-success">Stay at Home quarantine To stop Corona virus</h1>
          <p className="fw-bold my-4 text-secondary">
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </p>
          <button className="btn btn-danger">Let us help</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={backImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
