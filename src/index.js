import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import Models from './view/Models';
import Palette from './theme/Palette';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Palette}>
      <Models />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
