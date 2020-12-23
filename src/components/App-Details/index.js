import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const AppDetails = ({ details }) => {

  

  return (
    <Card>
      <Card className="grid-item">
        <Card.Img
          id="app"
          variant="top"
          src={require(`../../assets/images/apps/${details.filename}`).default}
          alt={details.alt}
          style={{ width: "25%" }}
        />
        <Card.Body>
          <Card.Title className="card-title">{details.name}</Card.Title>
          <Card.Text>{details.desc}</Card.Text>
          </Card.Body>
          <Card.Body>
          <Card.Link href={details.repoInd}>Individual Repository</Card.Link><br/>
          <Card.Link href={ details.repoTeam }>Team Repository</Card.Link><br/>
          <Card.Link href={details.deploy}>Live website deployment</Card.Link><br/>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default AppDetails;
