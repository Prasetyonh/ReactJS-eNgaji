import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  faBookQuran,
  faMoon,
  faSun,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
            >
              <Nav.Link>
                <Link style={{ color: "#6f6a55" }} to={"/"}>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </Nav.Link>
              <Nav.Link className="d-none d-md-block">|| {"  "}</Nav.Link>
              <Nav.Link>
                <Link style={{ color: "#6f6a55" }} to={"/about"}>
                  <FontAwesomeIcon icon={faInfoCircle} /> About
                </Link>
              </Nav.Link>
              <Nav.Link className="d-none d-md-block">|| {"  "}</Nav.Link>

              <div className="toggle mt-2" style={{ cursor: "pointer" }}>
                {darkMode.value ? (
                  <div onClick={darkMode.toggle}>
                    <FontAwesomeIcon style={{ color: "orange" }} icon={faSun} />
                    <span style={{ color: "#6f6a55" }} className="ms-1">
                      Light
                    </span>
                  </div>
                ) : (
                  <div onClick={darkMode.toggle}>
                    <FontAwesomeIcon
                      style={{ color: "#6f6a55" }}
                      icon={faMoon}
                    />
                    <span style={{ color: "#6f6a55" }} className="ms-1">
                      Dark
                    </span>
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomponent;
