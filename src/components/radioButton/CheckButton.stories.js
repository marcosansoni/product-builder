import { useState } from 'react';
import CheckButton from './CheckButton';

export default {
  title: 'components/checkButton',
  component: CheckButton,
  argTypes: {
    selected: { control: { disable: true } },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(false);
  return (<CheckButton {...args} selected={selected} onChange={() => setSelected(!selected)} />);
};

export const Default = Template.bind({});
Default.storyName = 'CheckButton';
