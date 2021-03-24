import PropTypes from 'prop-types';
import Palette from '../theme/Palette';

const ArrowLeftIcon = (props) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7071 7.29289C12.0976 7.68342 12.0976 8.31658 11.7071 8.70711L5.70711 14.7071C5.31658 15.0976 4.68342 15.0976 4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929L9.58579 8L4.29289 2.70711C3.90237 2.31658 3.90237 1.68342 4.29289 1.29289C4.68342 0.902369 5.31658 0.902368 5.70711 1.29289L11.7071 7.29289Z"
        fill={color}
      />
    </svg>
  );
};

ArrowLeftIcon.propTypes = {
  /** Color of the icon */
  color: PropTypes.string,
  /** Size of the icon */
  size: PropTypes.number,
};

ArrowLeftIcon.defaultProps = {
  color: Palette.WHITE,
  size: 16,
};

export default ArrowLeftIcon;
