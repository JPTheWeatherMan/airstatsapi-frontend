import styled from "styled-components";

const StyledHeader = styled.h1`
	@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
	font-family: Pacifico;
	text-align: center;
`;

const Header = (props) => {
	return <StyledHeader>{`${props.text}`}</StyledHeader>;
};

export default Header;
