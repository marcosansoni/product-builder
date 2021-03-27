import styled from 'styled-components';
import Card from './Card';

const Children = styled.div`
  display: flex;
  width: 100%;
  background-color: #CDCDCD;
  color: black;
  font-size: 14px;
  justify-content: center;
  padding: 8px;
`;

export default {
  title: 'components/card',
  component: Card,
  args: {
    imageUrl: 'img/i3/product01_col01.jpg',
    title: 'BMW i3',
    subtitle: 'from $42.400',
    children: (<Children>children</Children>),
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Card';
