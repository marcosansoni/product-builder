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
  justify-content: flex-end;
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

// const Label = styled.span`
//   position: absolute;
//   padding-left: 2.3em;
//   top: 0;
//   left: 0;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   transform: translateY(+200%);
//   // transform: ${(p) => (p.current && 'translateY(0)')};
//   // transform: ${(p) => (p.previous && 'translateY(-200%)')};
//   // transform: ${(p) => (p.following && 'translateY(+200%)')};
//   transition: transform .3s, -webkit-transform .3s;
//
//   //:hover{
//   //  transform: translateY(-200%);
//   //}
// `;

const Button = (props) => {
  const {
    disabled, style, className, children, type, onClick,
  } = props;

  // const classNameGenerator = (index) => {
  //   if (index === step) return 'current';
  //   if (index > step) return 'visited';
  //   return '';
  // };

  return (
    <Container
      disabled={disabled}
      style={style}
      className={className}
      type={type}
      onClick={onClick}
    >
      {/* {labels.map((label, index) => ( */}
      {/*  <Label */}
      {/*    key={label} */}
      {/*    // current={index === step} */}
      {/*    // previous={index < step} */}
      {/*    // following={index > step} */}
      {/*    className={classNameGenerator(index)} */}
      {/*  > */}
      {/*    {label} */}
      {/*  </Label> */}
      {/* ))} */}
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
};

Button.defaultProps = {
  disabled: false,
  style: undefined,
  className: undefined,
  children: undefined,
  onClick: undefined,
  type: ButtonType.PRIMARY,
};

export default Button;
