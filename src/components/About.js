import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const About = () => {
	return (
		<Container>
			<Card className='my-3'>
				<Card.Body>
					<Card.Title>All About Me</Card.Title>
					<Card.Text>
						Full Stack Developer with extensive Emergency Management Experience
					</Card.Text>
					<LinkContainer to='/'>
						<Button variant='primary'>Go somewhere</Button>
					</LinkContainer>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default About;
