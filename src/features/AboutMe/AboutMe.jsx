import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { AnimContext } from "../../App";
import dpImg from "../../Assets/vikum.jpg";
var ReactFitText = require("react-fittext");

export default function AboutMe({ scaleVal }) {
  const [startBox, setStartBox] = useState(false);
  const [startCover, setStartCover] = useState(false);
  const [startImage, setStartImage] = useState(false);
  const [boxHeight, setBoxHeight] = useState(
    window.innerWidth > 1080 ? 1080 * 0.45 : window.innerWidth * 0.45
  );
  const { startAnim, setStartAnim } = useContext(AnimContext);
  const imgRef = useRef(null);
  // useEffect(() => {
  //   setBoxHeight(imgRef.current.height);
  // }, [imgRef]);
  return (
    // <Jumbotron style={{ height: "50vh" }}>
    <div style={{ height: boxHeight }}>
      <div>
        <div
          style={{ visibility: startImage ? "hidden" : "visible" }}
          className={`about-me__open-box ${
            startBox ? "scale-down-hor-right" : "scale-up-hor-left"
          }`}
          onAnimationEnd={() =>
            !startBox ? setStartBox(true) : setStartCover(true)
          }></div>
        <div className="about-me__cover" style={{ position: "relative" }}>
          {
            <img
              ref={imgRef}
              src={dpImg}
              style={{
                top: 0,
                // position: "absolute",
                width: "100%",
                height: "100%",
                opacity: startImage ? 1 : 0,
              }}></img>
          }
          <div
            // style={{  }}
            style={{ position: "absolute" }}
            className={`about-me__image-cover ${
              startCover ? "scale-up-ver-top" : ""
            }
                ${startImage ? "scale-down-ver-bot" : ""}
                `}
            onAnimationEnd={() =>
              startImage
                ? setStartAnim(true)
                : startCover
                ? setStartImage(true)
                : setStartCover(true)
            }></div>
        </div>
      </div>
      <Row>
        <h2
          style={{
            opacity: 0,
            fontSize: 40 * scaleVal,
            marginRight: "5px",
            lineHeight: 1,
            width: "96%",
            textAlign: "end",
            margin: 0,
          }}
          className={`font-weight-normal ${!startBox ? "" : "about-me__hi"}`}>
          Hello! This is
        </h2>
      </Row>
      <Row>
        <h2
          style={{
            opacity: 0,
            fontSize: 160 * scaleVal,
            lineHeight: 1,
            width: "98%",
            textAlign: "end",
          }}
          className={`
            font-weight-normal display-3 m-0
            ${!startBox ? "" : "about-me__first-name"}`}>
          Vikum <span></span>
        </h2>
      </Row>

      <Row>
        <h2
          style={{
            opacity: 0,
            fontSize: 150 * scaleVal,
            lineHeight: 1,
            width: "98%",
            textAlign: "end",
          }}
          className={`
                font-weight-light display-3 
                ${!startBox ? "" : "about-me__last-name"}`}>
          Wijekoon <span></span>
        </h2>
      </Row>
    </div>
    // </Jumbotron>
  );
}
