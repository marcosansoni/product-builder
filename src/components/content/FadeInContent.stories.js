import { useState } from 'react';
import FadeInContent from './FadeInContent';

export default {
  title: 'components/content',
  component: FadeInContent,
};

const Template = () => {
  const [index, setIndex] = useState(0);
  const renderPage = [
    () => (<div>A</div>),
    () => (<div>B</div>),
    () => (<div>C</div>),
  ];
  return (
    <FadeInContent renderPage={renderPage} index={index} onClick={() => setIndex(index + 1)} />
  );
};

export const Default = Template.bind({});
Default.storyName = 'FadeInContent';
