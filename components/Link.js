import styled from "styled-components"

const StyledLink = styled.a`
	text-decoration: none;
	width: ${props => props.width};
	border: 1px #009ddc solid;
	border-radius: 5px;
	font-weight: 700;
	margin: 20px auto;
	padding: 0.75rem 2rem;
	color: black;
  text-align: center;
	cursor: pointer;

  &:hover{
    background: #009ddc;
		color: #fff;
  }
`;

const Link = (props) =>{
return <StyledLink href={props.link} width={props.width}>{`${props.text}`}</StyledLink>
}

export default Link