import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');;

*,
*::after,
*::before {
	margin: 0px;
	padding: 0px;
	box-sizing: inherit;
}

body {
	box-sizing: border-box;
	font-family: 'Open+Sans', sans-serif;
	font-size: 15px;
}
`;

const layout = () => {
	return <GlobalReset />;
};

export default layout;
