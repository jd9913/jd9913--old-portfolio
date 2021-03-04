import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Me from "./Me";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pages = ({ user }) => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Me user={user} />
				</Route>
				<Route path='/projects'>
					<Projects user={user} />
				</Route>
				<Route path='/work'>
					<Work user={user} />
				</Route>
				<Route path='/education'>
					<Education user={user} />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default Pages;
