import React from "react";
import { Jumbotron, Image, Row, Col, Card, Media } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BrettsMedia from "./brettsMedia";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

  const logo = require("../media/logo.png");
  const brett = require("../media/brett.jpg");
  const daniel = require("../media/daniel.png");
  const pcb = require("../media/pcb.png");
  const turtle = require("../media/turtle.jpg");
  const plot = require("../media/pairplot.jpg");
  const table = require("../media/table.jpg");

  let designMedia = {
    title: "Design",
    img: pcb,
    text: `We will work with you every step of the way to make sure that your
    project reaches escape velocity. We would love the opportunity to
    immerse ourselves in the issues and assess the feasibility of all
    possible solutions.`
  };

  let deployMedia = {
    title: "Deploy",
    img: turtle,
    text: `Correct deployment is vital for your venture. We can accompany your
    deployment all the way and will assist you to the end of the
    projects lifecycle.`
  };

  let analyzeMedia = {
    title: "Analyze",
    img: plot,
    text: `Years of experience with the mathematical analyses, computational
    techniques, and front-end development makes your experience with
    your data available available anywhere in real-time.`
  };

  let affectMedia = {
    title: "Affect",
    img: table,
    text: `High quality research drives real change in government policy, 
    the marine environment, and sustainable industry. Let our engineering 
    help you lead the charge.`
  };

  let photoStyle = {width: "600px", height: "400px", objectFit: "cover"}

  return (
    <div>
      <Row>
        <Jumbotron className="banner" xs={12} fluid>
          <div>
            <h1>Engineered Research Solutions</h1>
            <p style={{padding: "10px"}}>
              A client-driven firm deploying bleeding-edge hardware, software,
              and analysis tools for researchers and conservation workers in the
              Indian Ocean.
            </p>
            <Image src={logo} fluid />
          </div>
        </Jumbotron>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Image
              loading="lazy"
              className="photo"
              src={brett}
              xs={12} sm={4}
              rounded
              fluid >
          </Image>
        </Col>
        <Col xs={12} md={4}>
          <Card className="notCard">
            <Card.Body>
              <Card.Title>
                <h2><b>Trust</b> & Experience</h2>
              </Card.Title>
              <Card.Text>
                We are accustomed to working in fast-paced environments where
                interpersonal reliability is just as important as technical
                skill. Sustainable outcomes and client growth drive our entire
                workflow: from contract structure to deliverables, your needs
                come first.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Image className="photo" src={daniel} xs={12} sm={4} rounded fluid />
        </Col>
      </Row>
      <br/>
      <BrettsMedia
        media={[designMedia, deployMedia, analyzeMedia, affectMedia]}
      ></BrettsMedia>
    </div>
  );
};

export default Home;
