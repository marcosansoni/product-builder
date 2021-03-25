import { ThemeProvider } from 'styled-components';
import Palette from '../theme/Palette';
import Models from './Models';

const App = () => {
  console.log('App');
  return (
    <ThemeProvider theme={Palette}>
      <Models>Ciao</Models>
    </ThemeProvider>
  );
};

export default App;
