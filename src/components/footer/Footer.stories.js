import Footer from './Footer';

export default {
  title: 'components/footer',
  component: Footer,
  // argTypes: {
  //   imageUrl: {
  //     name: 'status',
  //     control: { type: 'select', options: optionsImageUrl },
  //     defaultValue: optionsImageUrl.I3_WHITE,
  //   },
  // },
  args: {
    step: 0,
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Footer';
