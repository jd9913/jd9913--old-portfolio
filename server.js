//code used is adapted from https://github.com/ishan-me/React_node_email

import express from "express";
import dotenv from "dotenv";
import path from "path";

import cors from "cors";
import nodemailer from "nodemailer";

import config from "./backend/secret.js";

let emailAddress = config.emailAddress;
let emailPassword = config.emailPassword;

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

const contactEmail = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: emailAddress,
		pass: emailPassword,
	},
});

transporter.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log("server is ready for messages");
	}
});

router.post("/contact", (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	const content = `name: ${name} \n email: ${email} \n message: ${message}`;
	const subject = "Contact form Submission";

	const mail = {
		from: name,
		to: emailAddress,
		subject: subject,
		text: content,
	};
	transporter.sendMail(mail, (error, data) => {
		if (error) {
			res.json({ status: "fail" });
		} else {
			res.json({ status: "success" });
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
