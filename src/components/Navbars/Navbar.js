/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class TCorpNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <span style={{fontWeight: "bold", marginLeft: "16px", fontSize: "16px"}}> TCorp BV</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <span style={{fontWeight: "bold", marginLeft: "16px", fontSize: "18px"}}> TCorp BV</span>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media disabled
                          className="d-flex align-items-center"
                          href="contact"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media  body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Supply Chain Visualisation
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              The supply chain-network is highly optimized and digitized, allowing for exceptional
                              cost-based competition.<br/> <span className="font-weight-bold"> Learn about how this is done here.</span>
                            </p>
                          </Media>
                        </Media>
                        <Media disabled
                               className="d-flex align-items-center"
                               href="contact"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media  body className="ml-3">
                            <h6 className="heading text-warning mb-md-1">
                              The Platform
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn about the platform.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Markets</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                            className="d-flex align-items-center"
                            href="https://www.bol.com/nl/v/tcorp-bv/1449663"
                            target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <span style={{fontWeight:"bold"}}>BOL</span>
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              bol.com
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Bol.com is a webshop with over 11 million active customers in the Netherlands and offers general merchandising products.
                            </p>
                          </Media>
                        </Media>
                        <Media
                            className="d-flex align-items-center"
                            href="https://amazon.co.uk"
                            target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <img
                                alt="..."
                                src={require("assets/img/icons/amazon.png")}
                            />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-warning mb-md-1">
                              Amazon Europe ( Coming Soon )
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                               Amazon is one of the biggest ecommerce companies in Europe, especially in the United Kingdom
                              and Germany.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem nav>
                    <NavLink href={"#contact"}>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/company/tcorp-bv/"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/tcorp-bv"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://supplier.tcbv.be/"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-truck mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        PARTNER ACCESS
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default TCorpNavbar ;
