import styled from 'styled-components';
import ColorPicker from './ColorPicker';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'components/colorPicker',
  component: ColorPicker,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => (
  <Container>
    <ColorPicker {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.storyName = 'ColorPicker';
