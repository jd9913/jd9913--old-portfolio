import React from "react";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function AboutPage() {
	return (

<Container>
<Row>
	<Col xs={6} md={4}>
		<Image className="image" src="../public/logo512.png" roundedCircle alt="placeholder image" />
	</Col>
</Row>
<Card>
  <Card.Body>
    <Card.Title>All About Me</Card.Title>
    <Card.Text>
      Full Stack Developer with extensive Emergency Management Experience
    </Card.Text>
	<LinkContainer to='/'>
    <Button variant="primary">Go somewhere</Button>
	</LinkContainer>
  </Card.Body>
</Card>
</Container>
	);
}

export default AboutPage;
