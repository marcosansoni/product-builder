import Button from './Button';

export default {
  title: 'components/button',
  component: Button,
  args: {
    labels: ['Ciao', 'a', 'tutti'],
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Button';
