import React, { useState } from "react";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");

	const submitRequest = async (e) => {
		e.preventDefault();
		console.log({ name, email, message });
		const response = await fetch("/contact", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});
		const resData = await response.json();
		if (resData.status === "success") {
			alert("Message Sent.");
			this.resetForm();
		} else if (resData.status === "fail") {
			alert("Message failed to send.");
		}
	};

	return (
		<form onSubmit={submitRequest}>
			<div>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					id='name'
					onChange={(e) => setName(e.target.value)}
					value={name}
					required
				/>
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					required
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<div>
				<label htmlFor='message'>Message:</label>
				<textarea
					id='message'
					type='text'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					required
				/>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ContactForm;
