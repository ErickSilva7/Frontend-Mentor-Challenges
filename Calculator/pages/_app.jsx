import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
