import React from "react";
import { Container } from "react-bootstrap";
import About from "../components/About";

const AboutPage = (props) => {
	const { basics } = props.user;
	console.log(basics);

	return (
		<Container>
			<About />
		</Container>
	);
};

export default AboutPage;
