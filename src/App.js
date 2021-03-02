import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "react-tsparticles";

import "./App.css";
import particlesOptions from "./particles.json";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";

function App() {
	return (
		<Router>
			<Particles options={particlesOptions} />
			<Header />
			<main>
				<Container>
					<Route path='/' component={HomePage} exact />
				</Container>
			</main>
			<Footer style={{ height: "75vh" }} />
		</Router>
	);
}

export default App;
