import Button from './Button';
import ButtonType from './constants/ButtonType';

export default {
  title: 'components/button',
  component: Button,
  args: {
    labels: ['Ciao', 'a', 'tutti'],
    children: 'Ciao',
    type: ButtonType.PRIMARY,
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Button';
