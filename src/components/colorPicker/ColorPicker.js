import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { useEffect, useRef } from 'react';
import MediaQuerySelector from '../../theme/MediaQuerySelector';

const Color = styled.div`
  border-radius: 50%;
  background-color: ${(p) => p.backgroundColor};
  border: ${(p) => `2px solid ${p.theme.WHITE}`};
  box-shadow: ${(p) => `0 0 0 2px ${p.selected ? p.theme.PRIMARY : p.theme.GRAY_LIGHT_VARIANT}`};
  width: 100%;
  height: 100%;
`;

const visible = keyframes`
  from {
    transform: translateX(-50%) translateY(5px);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const hidden = keyframes`
  from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    visibility: visible;
  }
  to {
    transform: translateX(-50%) translateY(5px);
    opacity: 0;
    visibility: hidden;
  }
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin: 0 8px;

  ${MediaQuerySelector.SMALL} {
    width: 30px;
    height: 30px;
  }

  .visible {
    animation: ${visible} 0.2s ease-in forwards;
  }

  .hidden {
    animation: ${hidden} 0.2s ease-in forwards;
  }

`;

const Arrow = styled.div`
  content: '';
  font-size: 14px;
  bottom: 100%;
  height: 0;
  border: 8px solid transparent;
  border-top-color: rgba(237, 237, 237, .8);
  border-top-width: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  opacity: 0;
  visibility: hidden;
`;

const Tooltip = styled.div`
  background-color: rgba(237, 237, 237, .8);
  white-space: nowrap;
  padding: .7em 1.1em;
  border-radius: 2em;
  bottom: calc(100% + 18px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  opacity: 0;
  visibility: hidden;
  font-size: 16px;
`;

const ColorPicker = (props) => {
  const {
    style, className, selected, color, tooltip, onClick, dataTest,
  } = props;
  const ref = useRef();
  const arrowRef = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    const handleInside = () => {
      arrowRef.current?.classList.add('visible');
      tooltipRef.current?.classList.add('visible');
      arrowRef.current?.classList.remove('hidden');
      tooltipRef.current?.classList.remove('hidden');
    };

    const handleOutside = () => {
      arrowRef.current?.classList.add('hidden');
      tooltipRef.current?.classList.add('hidden');
      arrowRef.current?.classList.remove('visible');
      tooltipRef.current?.classList.remove('visible');
    };

    ref.current?.addEventListener('mouseover', handleInside);
    ref.current?.addEventListener('touchstart', handleInside);
    ref.current?.addEventListener('mouseout', handleOutside);
    ref.current?.addEventListener('touchend', handleOutside);

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleInside);
        ref.current.removeEventListener('touchstart', handleInside);
        ref.current.removeEventListener('mouseout', handleOutside);
        ref.current.removeEventListener('touchend', handleOutside);
      }
    };
  }, [ref]);

  return (
    <Container
      ref={ref}
      onClick={onClick}
      style={style}
      className={className}
      data-test={`${dataTest}-container`}
      data-selected={selected}
    >
      {tooltip && (<Tooltip ref={tooltipRef} data-test={`${dataTest}-tooltip`}>{tooltip}</Tooltip>)}
      {tooltip && (<Arrow ref={arrowRef} />)}
      <Color selected={selected} backgroundColor={color} data-test={`${dataTest}-color`} />
    </Container>
  );
};

ColorPicker.propTypes = {
  /** Styling */
  style: PropTypes.object,
  /** ClassName */
  className: PropTypes.string,
  /** Selected status */
  selected: PropTypes.bool,
  /** Color of the attribute */
  color: PropTypes.string,
  /** Tooltip of the color */
  tooltip: PropTypes.string,
  /** Callback triggered at click */
  onClick: PropTypes.func,
  /** data-test attr */
  dataTest: PropTypes.string,
};

ColorPicker.defaultProps = {
  style: undefined,
  className: undefined,
  tooltip: undefined,
  color: undefined,
  onClick: undefined,
  selected: false,
  dataTest: undefined,
};

export default ColorPicker;
