import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

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
`;

const FadeContent = (props) => {
  const {
    children,
    visible,
    landing,
  } = props;

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      if (!visible) {
        // return css`animation: ${exit} 1s ease-in forwards`;
        ref.current.classList.add('not-visible');
        ref.current.classList.remove('visible');
        ref.current.classList.remove('visible-first');
        return;
      }
      if (landing) {
        ref.current.classList.add('visible-first');
        ref.current.classList.remove('visible');
        ref.current.classList.remove('not-visible');
        return;
      }
      ref.current.classList.add('visible');
      ref.current.classList.remove('visible-first');
      ref.current.classList.remove('not-visible');
    }
  }, [visible]);

  return (
    <Container visible={visible}>
      <Content ref={ref}>
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
