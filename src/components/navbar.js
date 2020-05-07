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
  Nav,
  NavItem,
  NavLink
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink 
                    style={{ color: "black" }} 
                    onClick={this.closeNavbar}
                    >
                    <Link to="/" exact path="/">About</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                  >
                    <Link to="/services">Services</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                  >
                    <Link to="/insurance">Insurance</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                  >
                    <Link to="/blog">Blog</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                  >
                    <Link to="/contact">Contact</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ color: "black" }}
                    onClick={this.closeNavbar}
                  >
                    <Link to="/covid">COVID-19 Response</Link>
                  </NavLink>
                </NavItem>
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
