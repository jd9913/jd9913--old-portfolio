import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";
import Pages from "./pages";

function App() {
	const [user, setUser] = useState(null);

	const git_url = "https://gitconnected.com/v1/portfolio/jd9913";
	useEffect(() => {
		fetch(git_url)
			.then((res) => res.json())
			.then((user) => {
				setUser(user);
			});
	}, []);

	if (!user) {
		return <div />;
	}
	return (
		<>
			<Pages user={user} />;
			<Particles options={particlesOptions} />
		</>
	);
}

export default App;
