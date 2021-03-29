import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MediaQuerySelector from '../../theme/MediaQuerySelector';

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
    return css`animation: ${exit} 0.3s ease-in forwards`;
  }
  if (landing) {
    return css`animation: ${enter} 0.3s ease-in forwards`;
  }
  return css`animation: ${enter} 0.3s ease-in 0.3s forwards`;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: ${(p) => (p.visible ? 'auto' : 'hidden')};
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

const Flex = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  opacity: 0;
  overflow: hidden;
  justify-content: space-between;
  max-width: calc(1000px + 10%);
  padding: 70px 5% 40px;
  height: fit-content;
  height: -moz-fit-content; /* Firefox/Gecko */
  height: -webkit-fit-content;
  transition: opacity 0.3s ease-in;
  ${(p) => animation(p.visible, p.landing)};

  ${MediaQuerySelector.SMALL_AND_MEDIUM} {
    padding-top: 0;
  }
`;

const FadeContent = (props) => {
  const {
    children,
    visible,
    landing,
    style,
    className,
    dataTest,
  } = props;

  return (
    <Container visible={visible}>
      <PerfectScrollbar options={{ suppressScrollX: true }} style={{ width: '100vw' }}>
        <Flex>
          <Content
            visible={visible}
            landing={landing}
            style={style}
            className={className}
            data-test={`${dataTest}-content`}
            data-visible={visible}
          >
            {children}
          </Content>
        </Flex>
      </PerfectScrollbar>
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
  /** Style used for being styled from parent */
  style: PropTypes.object,
  /** Classname */
  className: PropTypes.string,
  /** data-test attr */
  dataTest: PropTypes.string,
};

FadeContent.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
  dataTest: undefined,
  landing: false,
  visible: false,
};

export default FadeContent;
