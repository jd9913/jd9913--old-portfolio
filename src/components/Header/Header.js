import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image, NavItem } from "react-bootstrap";

const Header = ({ user }) => {
	console.log(user);

	const picture = user.basics.picture;
	const name = user.basics.name;
	const region = user.basics.region;
	const username = user.basics.username;
	const label = user.basics.label;

	return (
		<header>
			<Navbar bg='dark' variant='light' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar>
							<Navbar.Brand className='text-primary'>
								<Image
									className='Avatar'
									src={picture}
									alt={name}
									style={{ height: 100 }}
								/>
								{"  "}
								<div className='UserInfo-name'>{name}</div>
							</Navbar.Brand>
						</Navbar>
					</LinkContainer>

					<Navbar>
						<Navbar.Brand className='text-primary'>
							<a
								href={`https://gitconnected.com/${username}`}
								target='_blank'
								rel='noreferrer noopener'>
								@{username}
							</a>
							<p>{label}</p>
							<p>Coding in {region}</p>
						</Navbar.Brand>
					</Navbar>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Container>
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='ml-auto'>
								<LinkContainer to='/projects'>
									<Nav.Link className='text-primary'>Projects</Nav.Link>
								</LinkContainer>
								{/* <LinkContainer to='/timeline'>
								<Nav.Link className='text-primary'>Timeline</Nav.Link>
							</LinkContainer> */}
								<LinkContainer to='/contact'>
									<Nav.Link className='text-primary'>Contact</Nav.Link>
								</LinkContainer>
								<NavItem className=' py-2'>
									<a
										href='http://gitconnected.com/jd9913'
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary'>
										<span>Resume</span>
									</a>
								</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
