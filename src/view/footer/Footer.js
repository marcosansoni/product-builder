import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useFormikContext } from 'formik';
import FooterLeft from './footerLeft/FooterLeft';
import FooterRight from './footerRight/FooterRight';
import MediaQuerySelector from '../../theme/MediaQuerySelector';
import useImageUrl from '../../hooks/useImageUrl';
import usePrice from '../../hooks/usePrice';

const enter = keyframes`
  from {
    opacity: 0;
    height: 56px;
    transform: translateY(56px);
  }
  to {
    opacity: 1;
    height: 56px;
    transform: translateY(0);
  }
`;

const leave = keyframes`
  100% {
    opacity: 0;
    height: 0;
    transform: translateY(56px);
  }
  0% {
    opacity: 1;
    height: 56px;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  height: 100px;
  width: 100vw;
  padding: 0 2em;
  box-shadow: 0 0 39px rgb(0 0 0 / 10%);
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.WHITE};

  ${MediaQuerySelector.SMALL_AND_MEDIUM} {
    opacity: 0;
    transform: translateY(56px);
    height: 0;
    animation: ${(p) => (p.visible ? css`${enter} 0.2s ease-in forwards` : css`${leave} 0.2s ease-in forwards`)};
    padding: 0;
  }
`;

const Footer = (props) => {
  const {
    step, onConfirm, primaryDisabled, onSecondary, dataTest,
  } = props;
  const formik = useFormikContext();
  const { models } = formik.values;

  const imageUrl = useImageUrl();
  const price = usePrice();

  const dt = useMemo(() => `${dataTest}-footer`, [dataTest]);

  return (
    <Container visible={!!models} data-test={dt} data-visible={!!models}>
      <FooterLeft imageUrl={imageUrl} price={price} dataTest={dt} />
      <FooterRight
        dataTest={dt}
        step={step}
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
  /** data-test attr */
  dataTest: PropTypes.string,
};

Footer.defaultProps = {
  step: 0,
  onConfirm: undefined,
  onSecondary: undefined,
  dataTest: undefined,
  primaryDisabled: false,
};

export default Footer;
