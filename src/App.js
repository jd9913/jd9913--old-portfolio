import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "react-tsparticles";

import "./App.css";
import particlesOptions from "./particles.json";
import Footer from "./components/Footer";

import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { Container } from "react-bootstrap";
import axios from "axios";

function App() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchResume = async () => {
			const { data } = await axios.get(
				"https://gitconnected.com/v1/portfolio/jd9913"
			);
			setUser(data);
		};
		fetchResume();
	}, []);
	console.log(user);
	return (
		<Router>
			<Particles options={particlesOptions} />
			<Header user={user} />
			<main>
				<Container>
					<Route path='/' render={() => <AboutPage user={user} />} exact />
				</Container>
			</main>
			<Footer style={{ height: "75vh" }} />
		</Router>
	);
}

export default App;
