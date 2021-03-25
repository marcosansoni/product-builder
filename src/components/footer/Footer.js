import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import FooterLeft from './footerLeft/FooterLeft';

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
    if (buttonRef.current) {
      console.log(buttonRef.current);
      console.log(`translateY(-${56 * step})`);
      buttonRef.current.style.transform = `translateY(-${56 * step}px)`;
    }
  }, [step, buttonRef]);

  return (
    <Container>
      <FooterLeft />
      {/* <FooterRight ref={buttonRef} /> */}
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
