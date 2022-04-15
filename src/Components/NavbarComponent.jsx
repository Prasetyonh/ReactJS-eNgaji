import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav } from "react-bootstrap";
import { faBookQuran } from "@fortawesome/free-solid-svg-icons";

const Navbarcomponent = (props) => {
  return (
    <div className="mb-5">
      <Navbar expand="lg" className="navbar fixed-top mb-5 shadow-sm">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faBookQuran} />{" "}
            <strong className="text-lg">e-Ngaji</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Beranda</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomponent;
