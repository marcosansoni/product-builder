import FadeContent from './FadeContent';

export default {
  title: 'components/content/FadeContent',
  component: FadeContent,
};

const Template = () => (
  <FadeContent>
    A
  </FadeContent>
);

export const Default = Template.bind({});
Default.storyName = 'FadeContent';
