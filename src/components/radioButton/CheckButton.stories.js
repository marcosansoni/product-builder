import { useState } from 'react';
import CheckButton from './CheckButton';

export default {
  title: 'components/checkButton',
  component: CheckButton,
};

const Template = (args) => {
  const [selected, setSelected] = useState(false);
  return (<CheckButton {...args} selected={selected} onChange={setSelected} />);
};

export const Default = Template.bind({});
Default.storyName = 'CheckButton';
