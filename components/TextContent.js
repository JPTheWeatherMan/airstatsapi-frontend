import styled from 'styled-components'

const StyledTextContext = styled.p`
  font-size: 1.5rem;
  margin: 20px auto;
  padding: 20px;
`

const TextContent = (props) => {
return <StyledTextContext>{props.children}</StyledTextContext>
}

export default TextContent