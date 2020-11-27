import React, { useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import dpImg from "../../Assets/vikum.jpg";
export default function AboutMe() {
  const [startBox, setStartBox] = useState(false);
  const [startCover, setStartCover] = useState(false);
  const [startImage, setStartImage] = useState(false);
  return (
    // <Jumbotron style={{ height: "50vh" }}>
    <Container style={{ maxWidth: "720px" }}>
      <div
        style={{ visibility: startImage ? "hidden" : "visible" }}
        className={`about-me__open-box ${
          startBox ? "scale-down-hor-right" : "scale-up-hor-left"
        }`}
        onAnimationEnd={() =>
          !startBox ? setStartBox(true) : setStartCover(true)
        }></div>
      <div className="about-me__cover" style={{ position: "relative" }}>
        {startImage ? (
          <img
            src={dpImg}
            style={{
              top: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
            }}></img>
        ) : null}
        <div
          // style={{  }}
          style={{ position: "absolute" }}
          className={`about-me__image-cover ${
            startCover ? "scale-up-ver-top" : ""
          }
            ${startImage ? "scale-down-ver-bot" : ""}
            `}
          onAnimationEnd={() =>
            startCover ? setStartImage(true) : setStartCover(true)
          }></div>
      </div>
      <Row>
        <h5
          style={{ opacity: 0 }}
          className={`font-weight-normal  ${!startBox ? "" : "about-me__hi"}`}>
          Hello! This is
        </h5>
      </Row>
      <Row>
        <h2
          style={{ opacity: 0 }}
          className={`
          font-weight-light display-3 
          ${!startBox ? "" : "about-me__first-name"}`}>
          Vikum <span></span>
        </h2>
      </Row>

      <Row>
        <Col>
          <h2
            style={{ opacity: 0 }}
            className={`
              font-weight-light display-3 
              ${!startBox ? "" : "about-me__last-name"}`}>
            Wijekoon <span></span>
          </h2>
        </Col>
      </Row>
      <Row></Row>
    </Container>
    // </Jumbotron>
  );
}
