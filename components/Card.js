import styled from 'styled-components'

const CardWrapper = styled.main`
  background-color: #fff;
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.35);
`;

const Card = (props) => {
  return (
    <CardWrapper>{props.children}</CardWrapper>
  )
}

export default Card