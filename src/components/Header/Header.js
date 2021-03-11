import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = ({ user }) => {
	console.log(user);

	const picture = user.basics.picture;
	const name = user.basics.name;
	const region = user.basics.region;
	const username = user.basics.username;
	const label = user.basics.label;

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Image
								className='Avatar'
								src={picture}
								alt={name}
								style={{ height: 100 }}
							/>
							<div className='UserInfo-name'>{name}</div>
							<a
								href={`https://gitconnected.com/${username}`}
								target='_blank'
								rel='noreferrer noopener'>
								@{username}
							</a>
							<p>{label}</p>
							<p>Coding in {region}</p>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/projects'>
								<Nav.Link>Projects</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/timeline'>
								<Nav.Link>Timeline</Nav.Link>
							</LinkContainer>
							<LinkContainer
								to='http://gitconnected.com/jd9913'
								target='_blank'
								rel='noopener noreferrer'>
								<Nav.Link> View Resume</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/contact'>
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
