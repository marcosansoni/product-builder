import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPrimaryButton = styled(Button)`
  width: 194px;
  display: flex;
  justify-content: space-between;
`;

const FooterRight = (props) => {
  const { onPrevious, onConfirm, first } = props;

  return (
    <Container>
      {first && (
        <StyledSecondaryButton type={ButtonType.SECONDARY} onClick={onPrevious}>
          <IconContainer><AngleLeftIcon color={Palette.GRAY} /></IconContainer>
        </StyledSecondaryButton>
      )}
      <StyledPrimaryButton onClick={onConfirm}>
        <span>Ciao</span>
        <AngleRightIcon />
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
