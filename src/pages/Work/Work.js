import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Work = ({ user }) => {
	return (
		<Container user={user}>
			<Card className='my-3'>
				<Card.Body>
					<Card.Title>Work Experience</Card.Title>
					<ListGroup>
						{user.work.map((work, i) => (
							<ListGroupItem key={i}>
								<Card.Subtitle>{work.position}</Card.Subtitle>
								<div>
									{work.company}
									<span>{work.location}</span>
									<span>&sdot;</span>
									<span>
										{work.start.year} to {work.end.year}
									</span>
								</div>
								<p>{work.summary}</p>
							</ListGroupItem>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Work;
