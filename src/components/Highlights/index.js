import React, { useState } from "react";
import AppDetails from "../App-Details";
import "./highlights.css";

function Highlights() {
	const [detailsList, setDetails] = useState([
		{
			name: "cutting edge",
			filename: "cuttingEdge.gif",
			alt: "cutting edge app",
			desc:
				"This project was a team project done as part of a bootcamp assignment.  It is an appointment scheduling application for a small hair salon.  It had some significant challenges for us to overcome while working on this Full stack project.",
			repoInd: "https://github.com/jd9913/cutting-edge",
			repoTeam: "https://github.com/terahje/cutting-edge",
			deploy: "https://the-cutting-edge-20.herokuapp.com/",
		},
		{
			name: "Cutting Edge--the Final cut",
			filename: "cuttingEdgeFinalCut.gif",
			alt: "The Cutting Edge--Final Cut",
			desc:
				"This project was the final group project during the bootcamp. We chose to refactor our previous attempt at a scheduling application for a small hair salon.  This app was created using the MERN stack and we overcame some significant challenges to complete it in the timeframe we had.  We plan on continuing to work on this application moving forward.",
			repoInd: "https://github.com/jd9913/the-cutting-edge-final-cut",
			repoTeam: "https://github.com/terahje/the-cutting-edge-final-cut",
			deploy: "https://the-cutting-edge-final-cut800.herokuapp.com",
		},

		{
			name: "weather",
			filename: "weather.png",
			alt: "weather app",
			desc:
				"This project started as an assignment for a bootcamp class. This was the assignment where the javascript finally began to make sense to me.  I had to figure out how to fetch data from an API, take a specific piece of that data and feed it to a different API and then get the weather data back out from the second API.  It was working through that process, that I finally began to see the logic behind the Javascript and how the computer looks at it.  While there are problems with this web app,  I'm very proud of the work I did with it.  It was challenging and I had to think in different ways than I was accustomed to, but I was able to turn in a semi-workable product in the end.",
			repoInd: "https://github.com/jd9913/weather-dashboard",
			deploy: "https://jd9913.github.io/weather-dashboard/",
		},
		{
			name: "Wizier",
			filename: "Wizier.jpg",
			alt: "Wizier app",
			desc:
				"This project started as an assignment for a bootcamp class. This was the assignment where the javascript finally began to make sense to me.  I had to figure out how to fetch data from an API, take a specific piece of that data and feed it to a different API and then get the weather data back out from the second API.  It was working through that process, that I finally began to see the logic behind the Javascript and how the computer looks at it.  While there are problems with this web app,  I'm very proud of the work I did with it.  It was challenging and I had to think in different ways than I was accustomed to, but I was able to turn in a semi-workable product in the end.",
			repoInd: "https://github.com/jd9913/group-assignment",
			repoTeam: "",
			deploy: "https://jd9913.github.io/group-assignment/",
		},
	]);

	return (
		<section className='grid-container'>
			<h1>Project Highlights</h1>
			<div id='highlight'>
				{detailsList.map((details, index) => {
					return <AppDetails details={details} key={index} />;
				})}
			</div>
		</section>
	);
}

export default Highlights;
