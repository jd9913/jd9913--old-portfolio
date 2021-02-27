import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Projects from "../components/Projects";

const ProjectsPage = () => {
	const [key, setKey] = useState("home");

	return (
		<Tabs
			id='controlled-tab-example'
			activeKey={key}
			onSelect={(k) => setKey(k)}>
			<Tab eventKey='home' title='Home'>
				<Projects />
			</Tab>
			<Tab eventKey='profile' title='Profile'>
				<Projects />
			</Tab>
			<Tab eventKey='contact' title='Contact'>
				<Projects />
			</Tab>
		</Tabs>
	);
};

export default ProjectsPage;
