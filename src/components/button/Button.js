import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ButtonType from './constants/ButtonType';

const backgroundColorHover = (type, disabled) => {
  if (disabled) {
    return css`background-color: ${(p) => p.theme.GRAY_TRANSPARENT}`;
  }
  if (type === ButtonType.SECONDARY) {
    return css`background-color: ${(p) => p.theme.GRAY_SUPER_LIGHT}`;
  }
  // Primary
  return css`background-color: ${(p) => p.theme.PRIMARY_LIGHT}`;
};

const backgroundColor = (type, disabled) => {
  if (type === ButtonType.SECONDARY) {
    return css`background-color: ${(p) => p.theme.GRAY_LIGHT}`;
  }
  // Primary
  if (disabled) {
    return css`background-color: ${(p) => p.theme.GRAY_TRANSPARENT}`;
  }
  return css`background-color: ${(p) => p.theme.PRIMARY}`;
};

const Container = styled.div`
  outline: 0;
  height: 56px;
  padding: 0 16px;
  border-radius: 2em;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => (p.type === ButtonType.PRIMARY ? p.theme.WHITE : p.theme.GRAY)};
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  border: 0;
  position: relative;
  ${(p) => backgroundColor(p.type, p.disabled)};

  :hover {
    ${(p) => backgroundColorHover(p.type, p.disabled)};
  }
`;

const Button = (props) => {
  const {
    disabled, style, className, children, type, onClick, dataTest,
  } = props;

  return (
    <Container
      data-test={`${dataTest}-button`}
      disabled={disabled}
      style={style}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  /** Disabled state of the button */
  disabled: PropTypes.bool,
  /** Style used for being styled from parent */
  style: PropTypes.object,
  /** Classname */
  className: PropTypes.string,
  /** Label into button */
  children: PropTypes.any,
  /** Content of the button */
  type: PropTypes.oneOf(['SECONDARY', 'PRIMARY']),
  /** Callback when onClick */
  onClick: PropTypes.func,
  /** data-test attr */
  dataTest: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  style: undefined,
  className: undefined,
  children: undefined,
  onClick: undefined,
  dataTest: undefined,
  type: ButtonType.PRIMARY,
};

export default Button;
