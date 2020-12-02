import React, { useContext } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { AnimContext } from "../../App";
import ScrollDown from "../ScrollDown";

export default function AboutMeDetails() {
  const { startAnim } = useContext(AnimContext);
  return (
    <Container
      className={`${startAnim ? "fade-in" : ""}`}
      style={{ opacity: 0 }}>
      <Row className="justify-content-md-center m-auto">
        <Col className="py-2" sm={6} style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.2rem" }}>
            I am a Software Developer specializing in Front End Development and
            Machine Learning. Well-versed in React.js, Bootstrap and Javascript
            as well as TensorFlow, Python and OpenCV.{" "}
          </p>
        </Col>
        <Col className="py-1" sm={6} style={{ textAlign: "center" }}>
          {/* <Row>
            <Col xs={3} style={{ textAlign: "end" }}>
              Name
            </Col>
            <Col>Vikum Wijekoon</Col>
          </Row> */}
          <Row className="py-1">
            <Col xs={3} style={{ textAlign: "center" }}>
              <span>Age</span>
            </Col>
            <Col>
              <strong>23</strong>
            </Col>
          </Row>
          <Row className="py-1">
            <Col xs={3} style={{ textAlign: "center" }}>
              <span>Email</span>
            </Col>
            <Col>
              <strong>vikumwijekoon97@gmail.com</strong>
            </Col>
          </Row>
          <Row className="py-1">
            <Col xs={3} style={{ textAlign: "center" }}>
              <span>Phone</span>
            </Col>
            <Col>
              <strong>+94771022135</strong>
            </Col>
          </Row>
          <Row className="py-1">
            <Col xs={3} style={{ textAlign: "center" }}>
              <span>GitHub</span>
            </Col>
            <Col>
              <a href="https://github.com/Vizorous" target="_blank">
                <strong>www.github.com/Vizorous</strong>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <ScrollDown></ScrollDown>
    </Container>
  );
}
