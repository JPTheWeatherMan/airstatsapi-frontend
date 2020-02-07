import { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Background from "../components/Background";
import Header from "../components/Header";
import TextContent from "../components/TextContent";
import EmailInput from "../components/EmailInput";
import FormGroup from "../components/FormGroup";
import Axios from "axios";
import querystring from 'querystring'

const generateNewKey = (props) => {
	const [email, setEmail] = useState("");
	const config = {
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === "") {
			console.log("Please enter something");
		}
		
		Axios.post("http://Localhost:5000/user", querystring.stringify({email : email}), config)
			.then((response) => console.log(response))
			.catch((err) => console.log(err));
	};

	const emailInputOnChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<React.Fragment>
			<Layout />
			<Background />
			<Card>
				<Logo />
				<Header text='Air Stats API' />
				<TextContent>
					To generate a new API key all we need is your name and email
				</TextContent>
				<FormGroup onSubmit={onSubmit}>
					<EmailInput
						placeholder='Email'
						onChange={emailInputOnChange}
					></EmailInput>
					<Button text='Get API Key' width='25%' type='submit'></Button>
				</FormGroup>
			</Card>
		</React.Fragment>
	);
};

export default generateNewKey;
