import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import ScrollDown from "../ScrollDown";
import ScrollUp from "../ScrollUp";

const CardDetails = [
  {
    name: "AIESEC in USJ Opportunity Viewer",
    desc:
      "A tool that can be used to search the Exchange Opportunities of AIESEC in University of Sri Jayewardenepura",
    tech: "React, GraphQL,TypeScript, Bootstrap",
    projectLink: "https://usj-opportunity-viewer.web.app/",
    codebase: "https://github.com/Vizorous/opportunity-viewer",
  },

  {
    name: "oGT Image Generator",
    desc: "An Image Generation Tool made to quickly design posters on the go",
    tech: "React",
    projectLink: "https://ogetimagemaker.firebaseapp.com/",
    codebase: "https://github.com/Vizorous/ogetimagemaker",
  },
  {
    name: "Non-Downloadable Video Player ",
    desc: `Non-Downloable Video Player and a Node.js
Video processing server for Sipwin Institute `,
    tech: "MPEG-DASH, Node.js",
  },
  //   {
  //     name: "myPartner.lk UI Redesign",
  //     desc: `Redesigned the User Interface of mypartner.lk under 15ntap
  //     Solutions.`,
  //     tech: "figma",
  //   },
];
export default function Projects() {
  return (
    <div
      className="py-2"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FB3640",
        display: "flex",
        flexDirection: "column",
      }}>
      <ScrollUp></ScrollUp>
      <div
        className="p-2"
        style={{
          maxWidth: 1080,
          margin: "auto",
        }}>
        <span className="display-4">Projects</span>
        {CardDetails.map((item, index) => {
          return (
            <Card className="my-1" key={`${index}`} bg={"danger"} text="white">
              <Card.Body>
                <Card.Title className="mb-1 ">{item.name}</Card.Title>
                <Card.Subtitle className="mb-1" style={{ opacity: "0.5" }}>
                  {item.tech}
                </Card.Subtitle>
                <Card.Text>{item.desc}</Card.Text>
                {item.projectLink && (
                  <Button
                    className="mx-1"
                    variant="light"
                    href={item.projectLink}
                    target="_blank">
                    View Project
                  </Button>
                )}
                {item.codebase && (
                  <Button
                    className="mx-1"
                    variant="light"
                    href={item.codebase}
                    target="_blank">
                    View Codebase
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <ScrollDown></ScrollDown>
    </div>
  );
}
