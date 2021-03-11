import React from "react";
import { Card } from "react-bootstrap";

const Contact = () => {
	return (
		<>
			<Card className='align-items-center align-baseline' id='linkedinBadge'>
				<Card.Body
					className='LI-profile-badge'
					data-version='v1'
					data-size='large'
					data-locale='en_US'
					data-type='horizontal'
					data-theme='light'
					data-vanity='jd9913'>
					<a
						className='LI-simple-link'
						href='https://www.linkedin.com/in/jd9913?trk=profile-badge'>
						<i class='fab fa-linkedin'></i> Jennifer Schlierman
					</a>
				</Card.Body>
			</Card>
		</>
	);
};

export default Contact;
