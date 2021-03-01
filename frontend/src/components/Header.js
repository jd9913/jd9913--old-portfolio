import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = ({ user }) => {
	console.log(user);
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Image src={user.basics.image} style={{ height: 100 }} />
							{user.basics.name}
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/about'>
								<Nav.Link>About Me</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/projects'>
								<Nav.Link>Projects</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/timeline'>
								<Nav.Link>Timeline</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/resume'>
								<Nav.Link>Resume</Nav.Link>
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
