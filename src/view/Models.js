import styled from 'styled-components';
import { useState } from 'react';
import Tabs from '../components/tab/Tabs';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 38px;
  margin: 1.1em auto .76em;
  font-weight: 700;
  color: ${(p) => p.theme.BLACK};
  width: 100%;
  text-align: center;
`;

const Models = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  console.log(setSelectedPageIndex);

  return (
    <Container>
      <Title>Product Builder</Title>
      <Tabs tabs={['MODELS', 'COLORS', 'ACCESSORIES', 'SUMMARY']} defaultSelected={selectedPageIndex} />
    </Container>
  );
};

export default Models;
