import FooterLeft from './FooterLeft';

const optionsImageUrl = {
  I3_WHITE: 'img/i3/product01_col01.jpg',
  I3_BLACK: 'img/i3/product01_col02.jpg',
  I3_RED: 'img/i3/product01_col03.jpg',
  I8_BLACK: 'img/i8/product02_col01.jpg',
  I8_WHITE: 'img/i8/product02_col01.jpg',
};

export default {
  title: 'components/footer/footerLeft',
  component: FooterLeft,
  argTypes: {
    imageUrl: {
      name: 'status',
      control: { type: 'select', options: optionsImageUrl },
      defaultValue: optionsImageUrl.I3_WHITE,
    },
  },
  args: {
    price: 10000,
  },
};

const Template = (args) => <FooterLeft {...args} />;

export const Default = Template.bind({});
Default.storyName = 'FooterLeft';
