import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const color = (selected, disabled) => {
  if (disabled) {
    return css`color: ${(p) => p.theme.GRAY_TRANSPARENT}`;
  }
  if (selected) {
    return css`color: ${(p) => p.theme.PRIMARY}`;
  }
  return css`color: ${(p) => p.theme.GRAY}`;
};

const Container = styled.div`
  display: block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  ${(p) => color(p.selected, p.disabled)};
  padding: .7em .8em;
  transition: color .2s, border-color .2s;
  cursor: pointer;
  border-bottom: ${(p) => `2px solid ${p.selected ? p.theme.PRIMARY : p.theme.TRANSPARENT}`};
`;

const Tab = (props) => {
  const {
    children, selected, disabled, onClick,
  } = props;
  return (
    <Container
      selected={selected}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

Tab.propTypes = {
  /** Text of the tab */
  children: PropTypes.string,
  /** Selected tab */
  selected: PropTypes.bool,
  /** Disabled tab */
  disabled: PropTypes.bool,
  /** Callback triggered at on click on tab item */
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  children: undefined,
  selected: false,
  disabled: false,
  onClick: undefined,
};

export default Tab;
