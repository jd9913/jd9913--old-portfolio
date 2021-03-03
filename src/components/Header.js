import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = (props) => {
	console.log(props);
	// const { basics } = props.user;

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							{/* <Image src={basics.picture} style={{ height: 100 }} />
							<p>{basics.name} </p>
							<p>{basics.locationAsString}</p> */}
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
