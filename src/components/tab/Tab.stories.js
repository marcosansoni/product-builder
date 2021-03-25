import Tab from './Tab';

export default {
  title: 'components/tab/Tab',
  component: Tab,
  args: {
    children: 'Tab',
  },
};

// eslint-disable-next-line react/destructuring-assignment
const Template = (args) => (<Tab {...args}>{args.children}</Tab>);

export const Default = Template.bind({});
Default.storyName = 'Tab';
