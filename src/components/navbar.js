import React from "react";
import logo from '../../content/assets/logo.png';
import { Link } from 'gatsby';
import PropTypes from "prop-types";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav
} from "reactstrap";
 
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar = () => {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
  }

  render() {
    return(
      <Container>
        <Navbar className="navigation__navbar" light expand="md">
            <NavbarBrand style={{ color: "#007acc", fontWeight: "bold" }} href="/">
            <img src={logo} alt="in home physical therapy" style={{ maxWidth: 40, maxHeight: 50, marginRight: "2%" }}/>
            Smart Moves Physical Therapy
            </NavbarBrand>
          <Container>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="mr-auto" navbar>
                  <Link
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                    className="nav-link navigation__navlinks" 
                    to="/"
                  >
                    About
                  </Link>
                  <Link
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                    className="nav-link navigation__navlinks"
                    to="/services"
                  >
                    Services
                  </Link>
                  <Link
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                    className="nav-link navigation__navlinks"
                    to="/insurance"
                  >
                    Insurance
                  </Link>
                  <Link
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                    className="nav-link navigation__navlinks"
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                  style={{ color: "black" }}
                    onClick={this.closeNavbar}
                    className="nav-link navigation__navlinks"
                    to="/contact"
                  >
                    Contact
                  </Link>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    )
  }

}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default NavBar;
