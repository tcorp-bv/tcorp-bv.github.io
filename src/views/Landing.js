import React from "react";

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

import Navbar from "components/Navbars/Navbar.js";
import Footer from "../components/Footers/Footer";

const linkSupplierPlatform = "https://supplier.tcbv.be";
const linkCustomerService = "https://www.bol.com/nl/klantenservice/index.html";
const linkCE = "https://europa.eu/youreurope/business/product-requirements/labels-markings/ce-marking/index_en.htm";
const linkRoHS = "https://ec.europa.eu/growth/single-market/european-standards/harmonised-standards/restriction-of-hazardous-substances_en";

class Landing extends React.Component {
    state = {};

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
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="12">
                                            <h1 className="display-3 text-white">
                                                Digital hub for logistics and distribution{" "}
                                                <span
                                                    className="display-4">and your gateway to the European market.</span>
                                            </h1>
                                            <p className="lead text-white">
                                                TCorp provides a highly integrated supply-chain from China to Europe.
                                                Leveraging technology, the platform mitigates traditional
                                                challenges with exporting to European marketplaces.
                                            </p>
                                            <div className="btn-wrapper">
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    href={linkSupplierPlatform}
                                                    target="_blank"
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-arrow-circle-o-right"/>
                          </span>
                                                    <span className="btn-inner--text">I'm a Partner</span>
                                                </Button>
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                    color="default"
                                                    href={linkCustomerService}
                                                    target="_blank"
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-arrow-circle-o-right"/>
                          </span>
                                                    <span className="btn-inner--text">
                            I'm a customer
                          </span>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    <section className="section section-lg pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold"/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Product Compliance and Quality Control
                                                    </h6>
                                                    <p className="description mt-3">
                                                        To ensure compliance, we collect <span className="font-weight-bold"><a href={linkCE} target="_blank">CE</a> and <a href={linkRoHS}>RoHS</a> certificates</span>.
                                                        Partners can access these directly on the platform. Together with the
                                                        supplier, <span className="font-weight-bold">Quality Assurance (QA)</span> procedures
                                                        are set up. Within the local hubs, QA is done for each shipment.
                                                        Problems are caught early and customers remain satisfied.

                                                    </p>
                                                    {/*<div>*/}
                                                    {/*    <Badge color="primary" pill className="mr-1">*/}
                                                    {/*        Inspections*/}
                                                    {/*    </Badge>*/}
                                                    {/*    <Badge color="primary" pill className="mr-1">*/}
                                                    {/*        Complaint tracking*/}
                                                    {/*    </Badge>*/}
                                                    {/*</div>*/}
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        href="#pablo"
                                                        disabled
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul"/>
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Fully digitized Supply Chain
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Providing a supply chain as lean as ours is only possible due to the
                                                        level of <span className="font-weight-bold">integration with our partners</span>.
                                                        The platform automatically shares information between suppliers,
                                                        hubs, customer service, forwarders and the TCorp management.
                                                        Manual management is minimized while oversight over the supply-network
                                                        is maximized.
                                                    </p>
                                                    {/*<div>*/}
                                                    {/*    <Badge color="success" pill className="mr-1">*/}
                                                    {/*        Aggregation*/}
                                                    {/*    </Badge>*/}
                                                    {/*    <Badge color="success" pill className="mr-1">*/}
                                                    {/*        Palletization-at-source*/}
                                                    {/*    </Badge>*/}
                                                    {/*</div>*/}
                                                    <Button
                                                        className="mt-4"
                                                        color="success"
                                                        href="#pablo"
                                                        disabled
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet"/>
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        Consumer-facing Distribution
                                                    </h6>
                                                    <p className="description mt-3">
                                                        The supply chain design is optimized to <span className="font-weight-bold">efficiently pool products in hubs</span> within China.
                                                        After preprocessing (QA, labelling, palletization and containerization) is done,
                                                        containers are sent to buffer warehouses in Europe.
                                                        Finally, consumer marketplaces are supplied pallet-by-pallet which allows for <span className="font-weight-bold">minimal
                                                        retail stock</span> within the marketplace warehouses.
                                                    </p>
                                                    {/*<div>*/}
                                                    {/*    <Badge color="warning" pill className="mr-1">*/}
                                                    {/*        Customer support*/}
                                                    {/*    </Badge>*/}
                                                    {/*    <Badge color="warning" pill className="mr-1">*/}
                                                    {/*        Return logistics*/}
                                                    {/*    </Badge>*/}
                                                    {/*</div>*/}
                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        href="#pablo"
                                                        disabled
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        src={require("assets/img/theme/promo-1.png")}
                                    />
                                </Col>
                                <Col className="order-md-1" md="6">
                                    <div className="pr-md-5">
                                        <div
                                            className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                            <i className="ni ni-settings-gear-65"/>
                                        </div>
                                        <h3>One platform for all TCorp suppliers</h3>
                                        <p>
                                            As a supplier, you want full transparency in the supply-chain. Traditional
                                            distributors almost never provide this. Within the TCorp panel, each supplier can access
                                            a wide variety of insights (including competition details) on their product.
                                            Accessing quotes history, order and compliance documents is also trivial.
                                            </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-settings-gear-65"/>
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Learn from sales insights
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-html5"/>
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">Track customer complaints</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-satisfied"/>
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            One place for all orders, legal documents and historical quotes.
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-default shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={require("assets/img/theme/img-1-1200x1000.jpg")}
                                            top
                                        />
                                        <blockquote className="card-blockquote">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="svg-bg"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 583 95"
                                            >
                                                <polygon
                                                    className="fill-default"
                                                    points="0,52 583,95 0,95"
                                                />
                                                <polygon
                                                    className="fill-default"
                                                    opacity=".2"
                                                    points="0,42 583,95 683,0 0,95"
                                                />
                                            </svg>
                                            <h4 className="display-3 font-weight-bold text-white">
                                                Partner System
                                            </h4>
                                            <p className="lead text-italic text-white">
                                                Suppliers of TCorp can opt-in to become a partner. Partners can access
                                                dozens of insights.

                                            </p> <div className="text-center">
                                                <Button
                                                    block

                                                    className="btn-warning"
                                                    color="warning"
                                                    href="#contact"
                                                    size="lg"
                                                >
                                                    Contact us to learn more
                                                </Button>

                                        </div>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">
                                        <div
                                            className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                            <i className="ni ni-settings"/>
                                        </div>
                                        <h3>Hubs</h3>
                                        <p>Our local hub model allow us to pool smaller manufacturers in cost-efficient shipments.
                                        They allow suppliers to transact with our Chinese partner,
                                            instead of worrying about export logistics. All preprocessing is done in the hubs,
                                        allowing suppliers to focus on their product instead of marketplace compliance.</p>
                                        <p className="lead">
                                            Yiwu, China
                                        </p>
                                        <p>
                                            Our main hub partner is located in Yiwu, China. Recently upgraded in size,
                                            it is able to process over ten 40FT containers per week.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section pb-0 bg-gradient-warning">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-lg-2 ml-lg-auto" md="6">
                                    <div className="position-relative pl-md-5">
                                        <img
                                            alt="..."
                                            className="img-center img-fluid"
                                            src={require("assets/img/ill/ill-2.svg")}
                                        />
                                    </div>
                                </Col>
                                <Col className="order-lg-1" lg="6">
                                    <div className="d-flex px-3">
                                        <div>
                                            <div
                                                className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                                <i className="ni ni-building text-primary"/>
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h4 className="display-3 text-white">Customer Service</h4>
                                            <p className="text-white">
                                                TCorp does all the customer service, as a supplier you never have to talk to a European customer.
                                                The customer service focuses on customer satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div
                                                        className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-satisfied"/>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Customer Support
                                                    </h5>
                                                    <p>
                                                        Our Customer Support is done by locals that natively speak the customer language, Dutch,
                                                        and understand the local expectations.
                                                    </p>
                                                    {/*<a*/}
                                                    {/*    className="text-success"*/}
                                                    {/*    href="#pablo"*/}
                                                    {/*    onClick={e => e.preventDefault()}*/}
                                                    {/*>*/}
                                                    {/*    Learn more*/}
                                                    {/*</a>*/}
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div
                                                        className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-active-40"/>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-warning">
                                                        Return Logistics
                                                    </h5>
                                                    <p>
                                                        TCorp Customer Service actually keeps track of the defects
                                                        it receives. At first, as a supplier, you may be contacted but over
                                                        time, the customer service learns to solve problems and even repair products.
                                                    </p>
                                                    {/*<a*/}
                                                    {/*    className="text-warning"*/}
                                                    {/*    href="#pablo"*/}
                                                    {/*    onClick={e => e.preventDefault()}*/}
                                                    {/*>*/}
                                                    {/*    Learn more*/}
                                                    {/*</a>*/}
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="justify-content-center text-center mb-lg">
                                <Col lg="8">
                                    <h2 className="display-3">The Team</h2>
                                    <p className="lead text-muted">
                                        At its core, TCorp is a one-person beast. As the sole founder and only non-contracted employee, Toon is
                                        in charge of all financial, legal and technological aspects of TCorp BV.
                                    </p>
                                    <p className="lead text-muted">
                                        Apart from this, the success of the platform is defined by its partners: The amazing suppliers, hub,
                                        forwarders and consultants are essential to the cost-effective operation of the
                                        supply-network.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-5 mb-lg-0" lg="12" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/team/ts.jpg")}
                                            style={{width: "200px"}}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Toon Sevrin</span>
                                                <small className="h6 text-muted">Founder, CEO</small>
                                            </h5>
                                            <div className="mt-3">
                                                <Button
                                                    className="btn-icon-only rounded-circle ml-1"
                                                    color="warning"
                                                    href="https://www.linkedin.com/in/toonsevrin/"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-linkedin"/>
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="warning"
                                                    href="https://github.com/toonsevrin"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fa fa-github"/>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg pt-0">
                        <Container>
                            <Card className="bg-gradient-warning shadow-lg border-0">
                                <div className="p-5">
                                    <Row className="align-items-center">
                                        <Col lg="8">
                                            <h3 className="text-white">
                                                Want to join TCorp?
                                            </h3>
                                            <p className="lead text-white mt-3">
                                                We're always looking for new suppliers, forwarders and hubs to work with.
                                            </p>
                                        </Col>
                                        <Col className="ml-lg-auto" lg="3">
                                            <Button
                                                block
                                                className="btn-white"
                                                color="default"
                                                href="#contact"
                                                size="lg"
                                            >
                                                Contact us now
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Container>
                    </section>
                    <section className="section section-lg bg-gradient-default pb-300">
                        <Container className="pt-lg pb-300">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">The numbers...</h2>
                                    <p className="lead text-white">
                                        TCorp is young, but it is planning to grow quickly!
                                    </p>
                                </Col>
                            </Row>
                            <Row className="row-grid mt-5">
                                <Col lg="4">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="fa fa-globe text-primary"/>
                                    </div>
                                    <h5 className="text-white mt-3">Countries</h5>
                                    <p className="text-white mt-3">
                                        Currently TCorp sources from 1 country: China. It is active in 2 countries: Belgium and The Netherlands.
                                        We plan to increase our presence in Europa over time.
                                    </p>
                                </Col>
                                <Col lg="4">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="ni ni-ruler-pencil text-primary"/>
                                    </div>
                                    <h5 className="text-white mt-3">Products</h5>
                                    <p className="text-white mt-3">
                                        TCorp has listed and managed over 35 products from popular brands like QCY, Creality and Doglemi.
                                    </p>
                                </Col>
                                <Col lg="4">
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="ni ni-atom text-primary"/>
                                    </div>
                                    <h5 className="text-white mt-3">Customer Satisfaction</h5>
                                    <p className="text-white mt-3">
                                        Most customers are surprised by the quality of our customer service. This shows itself
                                        in our rating of 9.1/10 on bol.com as of writing this.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5 text-center">
                                            <h4 className="mb-4">Want to work with us?</h4>

                                            <Button
                                                className="btn-warning"
                                                color="warning"
                                                href="#contact"
                                                size="lg"
                                            >
                                                Contact us to learn more
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Landing;
