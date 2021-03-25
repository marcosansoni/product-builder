import Tabs from './Tabs';

export default {
  title: 'components/tab/Tabs',
  component: Tabs,
  args: {
    tabs: ['Models', 'Colors', 'Accessories', 'Summary'],
    defaultSelected: undefined,
  },
};

const Template = (args) => (<Tabs {...args} />);

export const Default = Template.bind({});
Default.storyName = 'Tabs';
