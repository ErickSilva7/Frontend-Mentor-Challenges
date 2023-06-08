import React from 'react';
import { ThemeProvider } from 'styled-components';
import Calculator from '../components/Calculator';
import GlobalStyle from '../components/GlobalStyle';
import { Theme1, Theme2, Theme3 } from '../components/UI/themes';

const index = () => (
  <ThemeProvider theme={Theme1}>
    <GlobalStyle />
    <Calculator />
  </ThemeProvider>
);

export default index;
