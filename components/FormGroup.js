import styled from 'styled-components'

const StyledFormGroup = styled.form`
  margin: 10px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormGroup = (props) => {
return <StyledFormGroup onSubmit = {props.onSubmit}>{props.children}</StyledFormGroup>
}

export default FormGroup