import '../src/index.css'
import { ThemeProvider } from 'styled-components';
import Palette from '../src/theme/Palette';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Palette}>
      <Story />
    </ThemeProvider>
  )
];
