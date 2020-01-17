import styled from 'styled-components'

const StyledLogo = styled.img`
	height: 100px;
	width: 100px;
	position: relative;
	left: 45%;
	top: -50px;
	border-radius: 5px;
	rotate: 45deg;
`;

const Logo = () => {
	return <StyledLogo src="/Logo.png" />;
};

export default Logo;
