import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Container = styled.div`
  //@keyframes fade-in {
  //  70% {
  //    opacity: 1;
  //    transform: translateX(20%);
  //  }
  //  100% {
  //    opacity: 1;
  //    transform: translateX(0%);
  //  }
  //}
  height: 100%;
  width: 100%;
  //opacity: 0;
  //transform: translateX(50%);
  //transition: opacity .5s ease;
  //animation: fade-in 1s forwards;
`;

const FadeContent = (props) => {
  const {
    children,
  } = props;
  console.log(children);

  console.log();

  return (
    <CSSTransition
      in
      unmountOnExit
      classNames="alert"
      onEnter={() => console.log('enter')}
      onExited={() => console.log('exit')}
    >
      <Container>
        Ciao a tutti
      </Container>
    </CSSTransition>

  );
};

FadeContent.propTypes = {
  // /** Index of the content */
  // index: PropTypes.number,
  // /** Current selected index of the content */
  // selectedIndex: PropTypes.number,
  // /** Content */
  children: PropTypes.any,
};

FadeContent.defaultProps = {
  // index: undefined,
  // selectedIndex: undefined,
  children: undefined,
};

export default FadeContent;
