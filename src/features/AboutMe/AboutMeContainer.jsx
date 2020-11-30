import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import AboutMeDetails from "./AboutMeDetails";

export default function AboutMeContainer() {
  const [scaleVal, setScaleVal] = useState(0);
  useEffect(() => {
    const scale = window.innerWidth / 1080 > 1 ? 1 : window.innerWidth / 1080;
    setScaleVal(scale);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#037ef3",
        height: "100vh",
        display: "flex",
        width: "100vw",
      }}>
      <div
        className="p-2"
        style={{
          maxWidth: 1080,
          margin: "auto",
        }}>
        <AboutMe scaleVal={scaleVal}></AboutMe>
        <AboutMeDetails></AboutMeDetails>
        <div className="w-100 text-center" style={{ opacity: "0.7" }}>
          <i class="fas fa-arrow-down pt-3 "></i>
          {"  "}
          <span>Scroll Down </span>
        </div>
      </div>
    </div>
  );
}
