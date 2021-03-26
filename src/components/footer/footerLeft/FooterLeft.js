import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @keyframes move-in {
    0% {
      transform: translateX(-200px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-in-reverse {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200px);
    }
  }

  .animate {
    animation: move-in .5s forwards;
  }

  .reverse {
    animation: move-in-reverse .5s forwards;
  }
`;

const Image = styled.img`
  width: 197px;
  padding-right: 27px;
  margin-right: 27px;
  border-right: ${(p) => `1px solid ${p.theme.GRAY_SUPER_LIGHT}`};
  transition: opacity .2s;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  color: ${(p) => p.theme.GRAY};
`;

const Price = styled.div`
  font-size: 32px;
  color: ${(p) => p.theme.BLACK};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLeft = (props) => {
  const { imageUrl, price } = props;
  const ref = useRef();

  useEffect(() => {
    if (imageUrl) {
      ref.current.classList.add('animate');
      ref.current.classList.remove('reverse');
    } else {
      ref.current.classList.add('reverse');
      ref.current.classList.remove('animate');
    }
  }, [imageUrl]);

  return (
    <Container>
      <Content ref={ref}>
        <Image src={imageUrl} />
        <PriceContainer>
          <Title>Total</Title>
          <Price>{`$${price}`}</Price>
        </PriceContainer>
      </Content>
    </Container>
  );
};

FooterLeft.propTypes = {
  /** Src of the image */
  imageUrl: PropTypes.string,
  /** Price of the checkout */
  price: PropTypes.number,
};

FooterLeft.defaultProps = {
  imageUrl: undefined,
  price: undefined,
};

export default FooterLeft;
