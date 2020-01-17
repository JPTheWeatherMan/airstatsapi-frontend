import styled from 'styled-components'

const StyledInput = styled.input`
	transition: all 0.30s ease-in-out;
	outline: none;
	box-sizing: border-box;
	width: 50%;
	background: #fff;
	border: 1px solid #ccc;
	padding: 0.25rem;
	color: #555;
  margin: 10px 25%;

  &:focus{
    box-shadow: 0 0 5px #009ddc;
	  padding: 0.25rem;
	  border: 1px solid #009ddc;
  }

  &:hover{
    background: #009ddc;
  }
`

const Input = (props) => {
  return <StyledInput placeholder={props.placeholder} onChange={props.onChange}></StyledInput>
}

export default Input