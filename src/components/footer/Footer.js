import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef } from 'react';
import { useFormikContext } from 'formik';
import FooterLeft from './footerLeft/FooterLeft';
import FooterRight from './footerRight/FooterRight';
import { I3Url, I8Url, ModelType } from '../../constants/Models';
import Price from '../../constants/Price';
import { AccessoriesPricesByModel } from '../../constants/Accessories';

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
  const {
    step, onConfirm, primaryDisabled, onSecondary,
  } = props;
  const buttonRef = useRef();
  const formik = useFormikContext();

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translateY(-${56 * step}px)`;
      Array.from(buttonRef.current?.childNodes).forEach((item, index) => {
        // eslint-disable-next-line no-param-reassign
        item.style.visibility = index === step ? 'visible' : 'hidden';
      });
    }
  }, [step, buttonRef]);

  const imageUrl = useMemo(() => {
    if (!formik.values.models) return undefined;
    if (formik.values.models === ModelType.I3) return I3Url[formik.values.color];
    return I8Url[formik.values.color];
  }, [formik.values.color, formik.values.models]);

  const price = useMemo(() => {
    if (!formik.values.models) return 0;
    let result = Price[formik.values.models].DEFAULT;
    if (formik.values.color) {
      result += Price[formik.values.models].COLOR[formik.values.color];
    }
    formik.values.accessories.forEach((accessory) => {
      result += AccessoriesPricesByModel[formik.values.models][accessory];
    });
    return result;
  }, [formik.values.color, formik.values.models, formik.values.accessories]);

  return (
    <Container>
      <FooterLeft imageUrl={imageUrl} price={price} />
      <FooterRight
        ref={buttonRef}
        onConfirm={onConfirm}
        primaryDisabled={primaryDisabled}
        secondaryEnabled={step !== 0}
        onSecondary={onSecondary}
      />
    </Container>
  );
};

Footer.propTypes = {
  /** Step of the checkout */
  step: PropTypes.number,
  /** Callback used when primary button is clicked */
  onConfirm: PropTypes.func,
  /** Callback used when secondary button is clicked */
  onSecondary: PropTypes.func,
  /** If primary button is disabled */
  primaryDisabled: PropTypes.bool,
};

Footer.defaultProps = {
  step: 0,
  onConfirm: undefined,
  onSecondary: undefined,
  primaryDisabled: false,
};

export default Footer;
