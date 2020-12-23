import React from "react";
import selfImage from "../../assets/images/self/self-portrait.jpg";
import "./about.css";
import Quotes from "../Quotes";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <section className="grid-container" id="about">
      <h1>About Me</h1>
        <Card className="grid-item">
          <Card.Img
            id="self-image"
            variant="top"
            src={selfImage}
            alt="self-import"
            style={{ width: "25%" }}
          />
          <Card.Body>
            <Card.Title 
            className="card-title"
             id="about">
              About Me
            </Card.Title>
            <Card.Text className="quotation card-text">
              <Quotes />
            </Card.Text>
          </Card.Body>
        </Card>
      
    </section>
  );
}

export default About;
