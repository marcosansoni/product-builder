import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 48%;
  padding: 2.7em 0;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
  border: ${(p) => `2px solid ${p.selected ? p.theme.PRIMARY : p.theme.GRAY_LIGHT_VARIANT}`};
  height: fit-content;
  height: -moz-fit-content;    /* Firefox/Gecko */
  height: -webkit-fit-content;
`;

const Title = styled.div`
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-top: .2em;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  max-width: 80%;
  margin: 1.8em auto 2.2em;
`;

const Subtitle = styled.div`
  display: block;
  color: ${(p) => p.theme.GRAY};
  margin-bottom: 1em;
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

const Card = (props) => {
  const {
    title, imageUrl, subtitle, selected, onClick, children,
  } = props;
  return (
    <Container selected={selected} onClick={onClick}>
      <Title>{title}</Title>
      <Image src={imageUrl} />
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
};

Card.propTypes = {
  /** Title of the card */
  title: PropTypes.string,
  /** Url of the image */
  imageUrl: PropTypes.string,
  /** Text below the image */
  subtitle: PropTypes.string,
  /** Card selected */
  selected: PropTypes.bool,
  /** Callback at onClick of the card */
  onClick: PropTypes.func,
  /** Any further elements */
  children: PropTypes.any,
};

Card.defaultProps = {
  title: undefined,
  imageUrl: undefined,
  subtitle: undefined,
  onClick: undefined,
  selected: false,
  children: undefined,
};

export default Card;
