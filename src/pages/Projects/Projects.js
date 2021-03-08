import React from "react";
import {
	Container,
	Card,
	Badge,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";

const Projects = ({ user }) => {
	return (
		<Container user={user}>
			<Card className='my-3'>
				<Card.Body>
					<Card.Title>Projects</Card.Title>

					<ListGroup>
						{user.projects.map((project, i) => (
							<ListGroupItem key={i}>
								<Card.Subtitle className='bg-success'>
									{project.name}
								</Card.Subtitle>
								<p>{project.summary}</p>
								<div>
									{[...project.languages, ...project.libraries].map(
										(item, j) => (
											<Badge key={j}>{item}</Badge>
										)
									)}
								</div>
							</ListGroupItem>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Projects;
