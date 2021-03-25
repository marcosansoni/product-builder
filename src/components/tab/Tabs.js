import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Tab from './Tab';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Tabs = (props) => {
  const { tabs, defaultSelected, disabled } = props;
  const [selected, setSelected] = useState(defaultSelected);

  useEffect(() => {
    if (selected !== defaultSelected) setSelected(defaultSelected);
  }, [defaultSelected]);

  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab
          onClick={() => setSelected(index)}
          selected={index === selected}
          disabled={index !== selected && disabled}
        >
          {tab}
        </Tab>
      ))}
    </Container>
  );
};

Tabs.propTypes = {
  /** Array of all labels of the tab */
  tabs: PropTypes.array,
  /** Default value of selected tab index */
  defaultSelected: PropTypes.number,
  /** Disabled */
  disabled: PropTypes.bool,
};

Tabs.defaultProps = {
  tabs: [],
  defaultSelected: undefined,
  disabled: false,
};

export default Tabs;
