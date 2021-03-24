import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

const FooterLeft = (props) => {
  const { imageUrl, price } = props;

  return (
    <Container>
      <Image src={imageUrl} />
      <PriceContainer>
        <Title>Total</Title>
        <Price>{`$${price}`}</Price>
      </PriceContainer>
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
