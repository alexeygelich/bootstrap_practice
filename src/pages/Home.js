import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slider from "../components/Slider";
import JamboTron from "../components/JamboTron";

import img1 from "../images/pexels-photo-3548379.jpeg";
import img2 from "../images/pexels-photo-3873607.jpeg";
import img3 from "../images/pexels-photo-4802876.jpeg";
import img4 from "../images/pexels-photo-5596458.jpeg";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Slider style={{ margin: 20 }} />
      <Container style={{ paddingTom: 20, paddingBottom: 20 }}>
        <Row>
          <Col>
            <Card>
              <Card.Img src={img1} alt="img1" style={{ height: 300 }} variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Title</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={img2} alt="img2" style={{ height: 300 }} variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Title</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={img3} alt="img3" style={{ height: 300 }} variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Title</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <JamboTron />
    </>
  );
};

export default Home;
