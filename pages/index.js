import Layout from "../components/Layout";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Background from "../components/Background"
import Header from "../components/Header"
import TextContent from "../components/TextContent"
import CodeBlock from "../components/CodeBlock"
import Link from '../components/Link'

const index = () => {
	return (
		<React.Fragment>
			<Layout />
			<Background />
			<Card>
				<Logo />
				<Header text="Air Stats API" />
				{/* <Link link="/newkey" text="Generate New API Key" width="25%"></Link> */}
				<Link link="https://github.com/JPTheWeatherMan/Aircraft-Stats-API" target="_blank" text="Github Repo" width="25%"></Link>
				<TextContent>Air Stats API is a personal project built to give general stats about different aircraft and their respective manufacturers. Below you can see 
					some example requests.</TextContent>
				<TextContent>This project is still under construction so if you'd like an API key send me an email!</TextContent>
				<TextContent>Mobile design coming soon!</TextContent>
				<CodeBlock>GET /api/industry/:type</CodeBlock>
				<CodeBlock>GET /api/model/:model</CodeBlock>
				<CodeBlock>GET api/manufacturer/:id</CodeBlock>
				<CodeBlock>GET /api/family/:family</CodeBlock>
				<CodeBlock>GET /api/manufacturer/all</CodeBlock>
			</Card>
		</React.Fragment>
	);
};

export default index;
