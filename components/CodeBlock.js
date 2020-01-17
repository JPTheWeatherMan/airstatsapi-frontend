import styled from 'styled-components'

const StyledCodeBlock = styled.section`
  background-color: #666666;
  color: #fff;
  border: 2px solid #009ddc;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
`

const CodeBlock = (props) => {
return <StyledCodeBlock>{props.children}</StyledCodeBlock>
}

export default CodeBlock