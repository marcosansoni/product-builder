import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ButtonType from '../../button/constants/ButtonType';
import Button from '../../button/Button';
import Palette from '../../../theme/Palette';
import AngleLeftIcon from '../../../icon/AngleLeftIcon';
import AngleRightIcon from '../../../icon/AngleRightIcon';
import MediaQuerySelector from '../../../theme/MediaQuerySelector';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    position: relative;
    width: 100%;
    justify-content: flex-end;
  }
`;

const StyledSecondaryButton = styled(Button)`
  width: 56px;
  margin-right: 11px;
  opacity: ${(p) => (p.secondaryEnabled ? '1' : '0')};
  transition: opacity 0.3s ease-in;
  overflow: hidden;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: ${(p) => (p.secondaryEnabled ? '50%' : '0')};
    transition: width 0.3s ease-in;
    border-radius: 0;
    background-color: ${(p) => p.theme.WHITE};
    
    :hover{
      background-color: ${(p) => p.theme.WHITE};
    }
  }
`;

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.secondary && '100%'};

  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    width: ${(p) => p.secondary && 'auto'};
  }
`;

const StyledPrimaryButton = styled(Button)`
  width: 194px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    border-radius: 0;
    width: ${(p) => (p.secondaryEnabled ? '50%' : '100%')};
    transition: width 0.3s ease-in;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  ${MediaQuerySelector.SMALL_AND_MEDIUM}{
    justify-content: center;
  }
`;

const ContainerItems = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 1s;
`;

const FooterRight = (props) => {
  const {
    onConfirm, secondaryEnabled, primaryDisabled, onSecondary, step,
  } = props;

  const primaryRef = useRef();
  const secondaryRef = useRef();

  useEffect(() => {
    if (primaryRef.current) {
      primaryRef.current.style.transform = `translateY(-${56 * step}px)`;
    }
  }, [step, primaryRef]);

  useEffect(() => {
    if (secondaryRef.current) {
      if (step === 1) {
        secondaryRef.current.style.transform = 'translateY(29px)';
      } else {
        secondaryRef.current.style.transform = `translateY(-${56 * (step - 1) - 29}px)`;
      }
    }
  }, [step, secondaryRef]);

  return (
    <Container>
      <StyledSecondaryButton
        type={ButtonType.SECONDARY}
        onClick={onSecondary}
        secondaryEnabled={secondaryEnabled}
      >
        <IconContainer secondary><AngleLeftIcon color={Palette.GRAY} /></IconContainer>
        <ContainerItems ref={secondaryRef}>
          <Item />
          <Item>MODELS</Item>
          <Item>COLORS</Item>
          <Item>ACCESSORIES</Item>
        </ContainerItems>
      </StyledSecondaryButton>
      <StyledPrimaryButton
        secondaryEnabled={secondaryEnabled}
        onClick={onConfirm}
        disabled={primaryDisabled}
      >
        <ContainerItems ref={primaryRef}>
          <Item>COLORS</Item>
          <Item>ACCESSORIES</Item>
          <Item>SUMMARY</Item>
          <Item>BUY NOW</Item>
        </ContainerItems>
        <IconContainer><AngleRightIcon /></IconContainer>
      </StyledPrimaryButton>
    </Container>
  );
};

FooterRight.propTypes = {
  /** Step of the checkout */
  step: PropTypes.number,
  /** Callback when click on primary button */
  onConfirm: PropTypes.func,
  /** Callback when click on secondary button */
  onSecondary: PropTypes.func,
  /** Secondary button is showed if true */
  secondaryEnabled: PropTypes.bool,
  /** If primary button is disabled */
  primaryDisabled: PropTypes.bool,
};

FooterRight.defaultProps = {
  step: 0,
  onSecondary: undefined,
  onConfirm: undefined,
  secondaryEnabled: false,
  primaryDisabled: false,
};

export default FooterRight;
