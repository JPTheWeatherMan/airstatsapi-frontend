import styled from 'styled-components'

const StyledButton = styled.button`
	text-decoration: none;
	width: ${props => props.width};
	border: 1px #009ddc solid;
	border-radius: 5px;
	font-weight: 700;
	margin: 20px auto;
	padding: 0.75rem 2rem;
	color: black;
	cursor: pointer;

	&:focus{
    box-shadow: 0 0 5px #009ddc;
	  padding: 0.25rem;
	  border: 1px solid #009ddc;
  }

  &:hover{
    background: #009ddc;
		color: #fff;
  }
`;

const Button = (props) => {
 return <StyledButton type="button" width={props.width} onClick={props.onClick} type={props.type}>{`${props.text}`}</StyledButton>
}
 export default Button