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
  const {
    tabs, defaultSelected, disabled, onDisableClick, onSelect,
  } = props;
  const [selected, setSelected] = useState(defaultSelected);

  useEffect(() => {
    if (selected !== defaultSelected) setSelected(defaultSelected);
  }, [defaultSelected]);

  const handleClick = (index) => {
    if (index !== selected && disabled) {
      return onDisableClick?.();
    }
    onSelect(index);
    return setSelected(index);
  };

  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab
          onClick={() => handleClick(index)}
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
  /** Callback used when we click on a tab disabled */
  onDisableClick: PropTypes.func,
  /** Callback used when we click on a tab */
  onSelect: PropTypes.func,
};

Tabs.defaultProps = {
  tabs: [],
  defaultSelected: undefined,
  disabled: false,
  onDisableClick: undefined,
  onSelect: undefined,
};

export default Tabs;
