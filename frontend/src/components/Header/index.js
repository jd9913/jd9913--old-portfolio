import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='/'>Jennifer Davey Schlierman</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/projects'>Projects</Nav.Link>
						<Nav.Link href='/resume'>Resume</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Header;
