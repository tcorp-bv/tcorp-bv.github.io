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

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col, Media, NavItem
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footers/Footer.js";

class Contact extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <Navbar/>
                <main ref="main">
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <Container className="pt-lg-7">
                            <Row className="justify-content-center">
                                <Col lg="6">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardHeader className="bg-white pb-5">
                                            <div className="text-center">Contact Us</div>
                                            <div className="text-muted text-center mb-3">
                                                <small>As a partner</small>
                                            </div>
                                            <Container>
                                                <Row>
                                                    <Col className="col-sm">
                                                        <div className="text-center">
                                                        <Button
                                                            className="btn-sm"
                                                            color="secondary"
                                                            type="button"
                                                            href="mailto:admin@tcbv.be"
                                                            target="_blank">
                                                            <span className="btn-inner--icon"><i className="fa fa-envelope mr-2"/></span>
                                                            <span className="btn-inner--text">admin@tcbv.be</span>
                                                        </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>

                                        </CardHeader>
                                        <CardBody className="px-lg-5 py-lg-5">
                                            <div className="text-center text-muted mb-3">
                                                <small>As a customer</small>
                                            </div>
                                            <Container>
                                                <Row>
                                                    <Col className="col-md">
                                                    <div className="text-center">
                                                    <Button
                                                        className="btn-sm"
                                                        color="secondary"
                                                        type="button"
                                                        href="https://www.bol.com/nl/klantenservice/index.html"
                                                        target="_blank">
                                                        <span className="btn-inner--icon"><i className="fa fa-arrow-right mr-2"/></span>
                                                        <span className="btn-inner--text">Bol.com service</span>
                                                    </Button>
                                                </div>
                                                    </Col>
                                                    <Col className="col-md">
                                                        <div className="text-center">
                                                            <Button
                                                                className="btn-sm"
                                                                color="secondary"
                                                                type="button"
                                                                href="mailto:contact@tcbv.be"
                                                                target="_blank">
                                                                <span className="btn-inner--icon"><i className="fa fa-envelope mr-2"/></span>
                                                                <span className="btn-inner--text">contact@tcbv.be</span>
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Contact;
