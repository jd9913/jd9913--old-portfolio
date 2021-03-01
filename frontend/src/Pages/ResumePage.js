import React, { useState, useEffect } from "react";
import axios from "axios";

const ResumePage = () => {
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
		<div>
			This is my resume page
			<p>some content here</p>
		</div>
	);
};

export default ResumePage;
