import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import FooterLeft from './footerLeft/FooterLeft';
import FooterRight from './footerRight/FooterRight';

const Container = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 2em;
  box-shadow: 0 0 39px rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = (props) => {
  const { step } = props;
  const buttonRef = useRef();

  useEffect(() => {
    console.log(buttonRef);
    Array.from(buttonRef.current?.childNodes).forEach(((node, index) => {
      node.classList.remove('current');
      node.classList.remove('incoming');
      node.classList.remove('visited');
      if (index === step) {
        node.classList.add('current');
      } else if (index > step) {
        node.classList.add('incoming');
      } else {
        node.classList.add('visited');
      }
    }));
    // console.log(Array.from(buttonRef.current?.childNodes)[step].classList.add('current'));
    // console.log(step);
  }, [buttonRef, step]);

  return (
    <Container>
      <FooterLeft />
      <FooterRight ref={buttonRef} />
    </Container>
  );
};

Footer.propTypes = {
  /** Step of the checkout */
  step: PropTypes.number,
};

Footer.defaultProps = {
  step: 0,
};

export default Footer;
