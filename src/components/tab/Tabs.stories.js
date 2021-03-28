import Tabs from './Tabs';

export default {
  title: 'components/tab/Tabs',
  component: Tabs,
  args: {
    tabs: ['Models', 'Colors', 'Accessories', 'Summary'],
    defaultSelected: 0,
  },
};

const Template = (args) => (<Tabs {...args} />);

export const Default = Template.bind({});
Default.storyName = 'Tabs';
