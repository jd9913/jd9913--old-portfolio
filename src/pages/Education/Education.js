import React from "react";
import { Container, Card, ListGroupItem, ListGroup } from "react-bootstrap";

const Education = ({ user }) => {
	<Container user={user}>
		<Card className='my-3'>
			<Card.Body>
				<Card.Title>My Education</Card.Title>
				<Card.Text>
					<ListGroup>
						{user.education.map((education, i) => (
							<ListGroupItem key={i}>
								{education.position}
								<div>
									{education.studyType}, {education.area} <span>&sdot;</span>
									<span>{education.end.year}</span>
								</div>
								<p>{education.description.replace("\n\n", "\n")}</p>
							</ListGroupItem>
						))}
					</ListGroup>
				</Card.Text>
			</Card.Body>
		</Card>
	</Container>;
};

export default Education;
