import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import TimeLinePage from "./pages/TimeLinePage";
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
			<Header user={user} />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomePage} exact />
					<Route path='/about' component={AboutPage} user={user} />
					<Route path='/timeline' component={TimeLinePage} user={user} />
					<Route path='/resume' component={ResumePage} user={user} />
					<Route path='/projects' component={ProjectsPage} user={user} />
					<Route path='/contact' component={ContactPage} user={user} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
