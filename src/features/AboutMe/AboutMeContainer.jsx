import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";

export default function AboutMeContainer() {
  const [scaleVal, setScaleVal] = useState(0);
  useEffect(() => {
    const scale = window.innerWidth / 1080 > 1 ? 1 : window.innerWidth / 1080;
    console.log(scale);
    setScaleVal(scale);
  }, []);
  return (
    <div className="p-2" style={{ maxWidth: 1080, margin: "auto" }}>
      <AboutMe scaleVal={scaleVal}></AboutMe>
    </div>
  );
}
