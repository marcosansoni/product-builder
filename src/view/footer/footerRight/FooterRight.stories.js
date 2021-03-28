import FooterRight from './FooterRight';

export default {
  title: 'components/footer/footerRight',
  component: FooterRight,
  // argTypes: {
  //   imageUrl: {
  //     name: 'status',
  //     control: { type: 'select', options: optionsImageUrl },
  //     defaultValue: optionsImageUrl.I3_WHITE,
  //   },
  // },
  // args: {
  //   step: 0,
  // },
};

const Template = (args) => <FooterRight {...args} />;

export const Default = Template.bind({});
Default.storyName = 'FooterRight';
