import PropTypes from 'prop-types';
import Palette from '../theme/Palette';

const CheckIcon = (props) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <g transform="translate(10, 10)">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
          strokeMiterlimit="10"
          points="2,12 9,19 22,6 &#10;&#9;"
          strokeLinejoin="miter"
        />
      </g>
    </svg>
  );
};

CheckIcon.propTypes = {
  /** Color of the icon */
  color: PropTypes.string,
  /** Size of the icon */
  size: PropTypes.number,
};

CheckIcon.defaultProps = {
  color: Palette.WHITE,
  size: 44,
};

export default CheckIcon;
