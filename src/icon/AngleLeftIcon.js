import PropTypes from 'prop-types';
import Palette from '../theme/Palette';

const ArrowLeftIcon = (props) => {
  const { color, size } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29289 7.29289L10.2929 1.29289C10.6834 0.902368 11.3166 0.902368 11.7071 1.29289C12.0976 1.68342 12.0976 2.31658 11.7071 2.70711L6.41421 8L11.7071 13.2929C12.0976 13.6834 12.0976 14.3166 11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289Z"
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
