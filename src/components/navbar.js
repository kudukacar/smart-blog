import React from "react";
import logo from '../../content/assets/logo.png';
import { Navbar, Nav } from "react-bootstrap"
 
class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        bg="light"
        expand="lg"
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        <Navbar.Brand style={{ color: "#007acc", fontWeight: "bold" }} href="/">
          <img
            src={logo}
            alt="in home physical therapy"
            style={{ maxWidth: 40, maxHeight: 50, marginRight: "2%" }}
          />
          Smart Moves Physical Therapy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <span className="navbarlink">
              <Nav.Link href="/" style={{ color: "#007acc" }}>
                About
              </Nav.Link>
            </span>
            <span className="navbarlink">
              <Nav.Link href="/services" style={{ color: "#007acc" }}>
                Services
              </Nav.Link>
            </span>
            <span className="navbarlink">
              <Nav.Link href="/insurance" style={{ color: "#007acc" }}>
                Insurance
              </Nav.Link>
            </span>
            <span className="navbarlink">
              <Nav.Link href="/blog" style={{ color: "#007acc" }}>
                Blog
              </Nav.Link>
            </span>
            <span className="navbarlink">
              <Nav.Link href="/contact" style={{ color: "#007acc" }}>
                Contact
              </Nav.Link>
            </span>
            <span className="navbarlink">
              <Nav.Link href="/covid" style={{ color: "#007acc" }}>
                COVID-19 Response
              </Nav.Link>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

export default NavBar;
