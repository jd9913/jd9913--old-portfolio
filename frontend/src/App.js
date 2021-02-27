import React from "react";
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

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' conponent={HomePage} exact />
					<Route path='/about' component={AboutPage} />
					<Route path='/timeline' component={TimeLinePage} />
					<Route path='/resume' component={ResumePage} />
					<Route path='/projects' component={ProjectsPage} />
					<Route path='/contact' component={ContactPage} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
