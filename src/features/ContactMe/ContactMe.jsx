import React, { useState } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import ScrollDown from "../ScrollDown";
import ScrollUp from "../ScrollUp";
import db from "./firebase";
export function handleChange(type) {
  return (value) => {
    const finalVal = value
      ? value.currentTarget
        ? value.currentTarget.value
        : value
      : null;
    this.setState({ [type]: finalVal });
  };
}
export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FFC100",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}>
      <ScrollUp></ScrollUp>
      <div
        className="p-2 w-100"
        style={{
          maxWidth: 1080,
        }}>
        <Container fluid="lg" className="w-100">
          <span className="display-4 " style={{ color: "#212529" }}>
            Contact Me
          </span>
          <Form className="w-100">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.currentTarget.value);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                db.collection("contacts")
                  .add({
                    name: name,
                    email: email,
                    message: message,
                  })
                  .then(function (docRef) {
                    setSubmitted(true);
                  })
                  .catch(function (error) {
                    console.error("Error adding document: ", error);
                  });
              }}>
              Submit
            </Button>
          </Form>
          <div className="py-2" style={{ opacity: submitted ? 1 : 0 }}>
            Contact Details Submitted
          </div>
        </Container>
      </div>
      <div style={{ opacity: 0 }}>
        <ScrollDown></ScrollDown>
      </div>
    </div>
  );
}
