import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const enter = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const exit = keyframes`
  to {
    opacity: 0;
    transform: translateX(-10px);
  }
  from {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const animation = (visible, landing) => {
  if (!visible) {
    return css`animation: ${exit} 1s ease-in forwards`;
  }
  if (landing) {
    return css`animation: ${enter} 1s ease-in forwards`;
  }
  return css`animation: ${enter} 1s ease-in 1s forwards`;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  z-index: ${(p) => !p.visible && '-1'};

  .visible-first {
    animation: ${enter} 1s ease-in forwards;
  }

  .visible {
    animation: ${enter} 1s ease-in 1s forwards
  }

  .not-visible {
    animation: ${exit} 1s ease-in forwards
  }
`;

const Content = styled.div`
  display: flex;
  opacity: 0;
  overflow: hidden;
  justify-content: space-between;
  max-width: 1000px;
  padding: 70px 0 40px;
  height: fit-content;
  height: -moz-fit-content; /* Firefox/Gecko */
  height: -webkit-fit-content;
  transition: opacity 0.3s ease-in;
  ${(p) => animation(p.visible, p.landing)};
`;

const FadeContent = (props) => {
  const {
    children,
    visible,
    landing,
  } = props;

  return (
    <Container visible={visible}>
      <Content visible={visible} landing={landing}>
        {children}
      </Content>
    </Container>
  );
};

FadeContent.propTypes = {
  /** Content */
  children: PropTypes.any,
  /** True if the content is current visible */
  visible: PropTypes.bool,
  /** If true the enter animation will not be delayed */
  landing: PropTypes.bool,
};

FadeContent.defaultProps = {
  children: undefined,
  landing: false,
  visible: false,
};

export default FadeContent;
