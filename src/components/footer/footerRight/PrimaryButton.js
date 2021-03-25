import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Items = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s;
`;

const PrimaryButton = forwardRef((props, ref) => {
  console.log(props);
  console.log(ref);

  return (
    <div ref={ref}>
      <Items style={{ transform: 'translateY(0)' }}>0</Items>
      <Items style={{ transform: 'translateY(60%)' }}>1</Items>
      <Items style={{ transform: 'translateY(60%)' }}>2</Items>
      <Items style={{ transform: 'translateY(60%)' }}>3</Items>
    </div>
  );
});

// export default React.Memo(PrimaryButton);
export default PrimaryButton;
