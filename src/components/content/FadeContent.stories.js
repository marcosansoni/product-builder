import FadeContent from './FadeContent';

export default {
  title: 'components/content/FadeContent',
  component: FadeContent,
  args: {
    visible: true,
    landing: true,
  },
};

const Template = (args) => (
  <FadeContent {...args}>
    Content
  </FadeContent>
);

export const Default = Template.bind({});
Default.storyName = 'FadeContent';
