import styled from 'styled-components'
import background from '../public/pattern.png'

const StyledBackground = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  position: absolute;
  height: 140vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -10;
`;

const Background = () => {
	return <StyledBackground />;
};

export default Background;
