import React, { useEffect } from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listResume } from "../actions/resumeActions";

const Header = () => {
	const dispatch = useDispatch();
	const resumeList = useSelector((state) => state.resumeList);
	// const { name, image, locationAsString } = resumeList.resumeList.basics;

	console.log(resumeList.resumeList.basics);
	// const { name } = resumeList.resumeList.basics;

	useEffect(() => {
		dispatch(listResume());
	}, [dispatch]);

	const name = "Jennifer";
	const locationAsString = "Phoenix AZ";
	const image = "image here";

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Image src={image} style={{ height: 100 }} />
							<p>{name} </p>
							<p>{locationAsString}</p>
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
