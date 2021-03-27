import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import Palette from './theme/Palette';
import Form from './view/Form';
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Palette}>
      <Form />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
