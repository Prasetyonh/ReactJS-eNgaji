import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  faBookQuran,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";

const Navbarcomponent = (props) => {
  const darkMode = useDarkMode(false);

  return (
    <div className="mb-5">
      <Navbar expand="lg" className="navbar fixed-top shadow-sm navbar-light">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faBookQuran} />{" "}
            <strong className="text-lg">e-Ngaji</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="" />
          <Navbar.Collapse id="">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faHome} /> Beranda
              </Nav.Link>
              <Nav.Link className="d-none d-md-block">|| {"  "}</Nav.Link>
              <Nav.Link href="/about">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Nav.Link>
              <Nav.Link className="d-none d-md-block">|| {"  "}</Nav.Link>

              <Toggle
                className="toggle"
                checked={darkMode.value}
                onChange={darkMode.toggle}
              ></Toggle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomponent;
