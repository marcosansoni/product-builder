import { ThemeProvider } from 'styled-components';
import Palette from '../theme/Palette';
import ModelsView from './ModelsView';

const App = () => {
  console.log('App');
  return (
    <ThemeProvider theme={Palette}>
      <ModelsView>Ciao</ModelsView>
    </ThemeProvider>
  );
};

export default App;
