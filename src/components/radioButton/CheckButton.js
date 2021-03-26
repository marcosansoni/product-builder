import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '../../icon/CheckIcon';

const Container = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  @keyframes cd-bounce {
    0% {
      transform: scale(1);
      background: ${(p) => p.theme.PRIMARY};
      border-color: ${(p) => p.theme.PRIMARY};
    }
    30% {
      background: ${(p) => p.theme.PRIMARY};
      border-color: ${(p) => p.theme.PRIMARY};
      transform: scale(1.6);
    }
    60% {
      background: ${(p) => p.theme.PRIMARY};
      border-color: ${(p) => p.theme.PRIMARY};
      transform: scale(1.4);
    }
    100% {
      background: ${(p) => p.theme.PRIMARY};
      border-color: ${(p) => p.theme.PRIMARY};
      transform: scale(1.5);
    }
  }

  @keyframes cd-bounce-reverse {
    0% {
      transform: scale(1.5);
      background: ${(p) => p.theme.WHITE};
      border-color: ${(p) => p.theme.GRAY_LIGHT_VARIANT};
    }
    100% {
      background: ${(p) => p.theme.WHITE};
      border-color: ${(p) => p.theme.GRAY_LIGHT_VARIANT};
      transform: scale(1);
    }
  }

  .animate {
    animation: cd-bounce .5s forwards;
  }

  .reverse {
    animation: cd-bounce-reverse .5s forwards;
  }
`;

const Background = styled.div`
  border-radius: ${(p) => (p.squared ? '4px' : '50%')};
  content: '';
  transition: background-color .3s, transform .3s, border-color .3s, -webkit-transform .3s;
  border: ${(p) => `2px solid ${p.theme.GRAY_LIGHT_VARIANT}`};
  background: ${(p) => p.theme.WHITE};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const ContainerIcon = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckButton = (props) => {
  const { selected, onChange, squared } = props;
  const ref = useRef();

  useEffect(() => {
    if (selected) {
      ref.current.classList.add('animate');
      ref.current.classList.remove('reverse');
    } else {
      ref.current.classList.add('reverse');
      ref.current.classList.remove('animate');
    }
  }, [selected]);

  // const handleClick = () => {
  //   if (!selected) {
  //     ref.current.classList.add('animate');
  //     ref.current.classList.remove('reverse');
  //   } else {
  //     ref.current.classList.add('reverse');
  //     ref.current.classList.remove('animate');
  //   }
  //   onChange(!selected);
  // };

  return (
    <Container onClick={onChange}>
      <Background ref={ref} squared={squared} />
      <ContainerIcon>
        <CheckIcon />
      </ContainerIcon>
    </Container>
  );
};

CheckButton.propTypes = {
  /** Squared */
  squared: PropTypes.bool,
  /** Card selected */
  selected: PropTypes.bool,
  /** Callback at onChange of the button */
  onChange: PropTypes.func,
};

CheckButton.defaultProps = {
  onChange: undefined,
  selected: false,
  squared: false,
};

export default CheckButton;
