import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AboutPage = (props) => {
	const { basics } = props.user;
	console.log(basics);

	return (
		<Container>
			<Card className='my-3'>
				<Card.Body>
					<Card.Title>All About Me</Card.Title>

					<Card.Text>{basics.headline}</Card.Text>
					<LinkContainer to='/resume'>
						<Button variant='primary'>See more about me</Button>
					</LinkContainer>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default AboutPage;
