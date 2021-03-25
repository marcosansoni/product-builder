import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import ButtonType from '../../button/constants/ButtonType';
import Button from '../../button/Button';
import Palette from '../../../theme/Palette';
import AngleLeftIcon from '../../../icon/AngleLeftIcon';
import AngleRightIcon from '../../../icon/AngleRightIcon';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledSecondaryButton = styled(Button)`
  width: 56px;
  margin-right: 11px
`;

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPrimaryButton = styled(Button)`
  width: 194px;
  display: flex;
  align-items: flex-start;
`;

const Item = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
    onPrevious, onConfirm, first,
  } = props;

  const ref = useRef();
  return (
    <Container>
      {first && (
        <StyledSecondaryButton type={ButtonType.SECONDARY} onClick={onPrevious}>
          <IconContainer><AngleLeftIcon color={Palette.GRAY} /></IconContainer>
        </StyledSecondaryButton>
      )}
      <StyledPrimaryButton onClick={onConfirm}>
        <ContainerItems ref={ref}>
          <Item>0</Item>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </ContainerItems>
        <IconContainer><AngleRightIcon /></IconContainer>
      </StyledPrimaryButton>
    </Container>
  );
};

FooterRight.propTypes = {
  /** Callback when click on back button */
  onPrevious: PropTypes.func,
  /** Callback when click on primary button */
  onConfirm: PropTypes.func,
  /** True when we land on first tab */
  first: PropTypes.bool,
};

FooterRight.defaultProps = {
  onPrevious: undefined,
  onConfirm: undefined,
  first: false,
};

export default FooterRight;
