import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const pages = [
  ({ style, children }) => <animated.div style={{ ...style, overflowX: 'hidden' }}>{children}</animated.div>,
  ({ style, children }) => <animated.div style={{ ...style, overflowX: 'hidden' }}>{children}</animated.div>,
  ({ style, children }) => <animated.div style={{ ...style, overflowX: 'hidden' }}>{children}</animated.div>,
];

const FadeInContent = (props) => {
  const { index, onClick, renderPage } = props;
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return (
    <Container className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props: transitionProps, key }) => {
        const Page = pages[item];
        const children = renderPage[index]();
        return <Page key={key} style={transitionProps}>{children}</Page>;
      })}
    </Container>
  );
};

FadeInContent.propTypes = {
  /** Array of all renderPage */
  renderPage: PropTypes.array,
  /** Value of selected page index */
  index: PropTypes.number,
  /** Callback triggered at on click on tab item */
  onClick: PropTypes.func,
};

FadeInContent.defaultProps = {
  renderPage: [],
  onClick: undefined,
  index: undefined,
};

export default FadeInContent;
