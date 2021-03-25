import Card from './Card';

export default {
  title: 'components/card',
  component: Card,
  // argTypes: {
  //   imageUrl: {
  //     name: 'status',
  //     control: { type: 'select', options: optionsImageUrl },
  //     defaultValue: optionsImageUrl.I3_WHITE,
  //   },
  // },
  args: {
    imageUrl: 'img/i3/product01_col01.jpg',
    title: 'BMW i3',
    subtitle: 'from $42.400',
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Card';
