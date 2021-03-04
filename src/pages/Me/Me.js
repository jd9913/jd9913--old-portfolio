import React from "react";
import {
	Container,
	Card,
	Badge,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";

const Me = ({ user }) => {
	return (
		<Container user={user}>
			<Card className='my-3'>
				<Card.Body>
					<Card.Title>About Me</Card.Title>
					<Card.Subtitle>Skills</Card.Subtitle>
					<div>
						{user.skills.map((skill) => (
							<Badge pill variant='primary' key={skill.name}>
								{skill.name}
							</Badge>
						))}
					</div>
					<Card.Text>
						<p>{user.basics.summary}</p>
					</Card.Text>
					<ListGroup>
						Profiles
						{user.basics.profiles.map((profile, i) => (
							<ListGroupItem key={profile.network}>
								{i !== 0 && "|"}
								<a href={profile.url} target='_blank' rel='noreferrer noopener'>
									{profile.network}
								</a>
							</ListGroupItem>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Me;
