import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef } from 'react';
import { useFormikContext } from 'formik';
import FooterLeft from './footerLeft/FooterLeft';
import FooterRight from './footerRight/FooterRight';
import { I3Url, I8Url, ModelType } from '../../constants/Models';
import Price from '../../constants/Price';

const Container = styled.div`
  height: 100px;
  width: 100vw;
  padding: 0 2em;
  box-shadow: 0 0 39px rgb(0 0 0 / 10%);
  //position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.WHITE};
`;

const Footer = (props) => {
  const { step, onConfirm, primaryDisabled } = props;
  const buttonRef = useRef();
  const formik = useFormikContext();

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translateY(-${56 * step}px)`;
    }
  }, [step, buttonRef]);

  const imageUrl = useMemo(() => {
    if (!formik.values.models) return undefined;
    if (formik.values.models === ModelType.I3) return I3Url[formik.values.color];
    return I8Url[formik.values.color];
  }, [formik.values.color, formik.values.models]);

  const price = useMemo(() => {
    if (!formik.values.models) return 0;
    let result = 0;
    if (formik.values.models === ModelType.I3) {
      result += Price.I3.DEFAULT;
      if (formik.values.color) {
        result += Price.I3.COLOR[formik.values.color];
      }
    } else {
      result += Price.I8.DEFAULT;
      if (formik.values.color) {
        result += Price.I8.COLOR[formik.values.color];
      }
    }
    return result;
  }, [formik.values.color, formik.values.models]);

  return (
    <Container>
      <FooterLeft imageUrl={imageUrl} price={price} />
      <FooterRight ref={buttonRef} onConfirm={onConfirm} primaryDisabled={primaryDisabled} />
    </Container>
  );
};

Footer.propTypes = {
  /** Step of the checkout */
  step: PropTypes.number,
  /** Callback used when primary button is clicked */
  onConfirm: PropTypes.func,
  /** If primary button is disabled */
  primaryDisabled: PropTypes.bool,
};

Footer.defaultProps = {
  step: 0,
  onConfirm: undefined,
  primaryDisabled: false,
};

export default Footer;
