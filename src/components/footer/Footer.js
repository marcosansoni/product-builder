import styled from 'styled-components';
import FooterLeft from './footerLeft/FooterLeft';
import FooterRight from './footerRight/FooterRight';

const Container = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 2em;
  box-shadow: 0 0 39px rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => {
  console.log('Footer');

  return (
    <Container>
      <FooterLeft />
      <FooterRight />
    </Container>
  );
};

export default Footer;
