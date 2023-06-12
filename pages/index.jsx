import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Calculator from "../components/Calculator";
import GlobalStyle from "../components/GlobalStyle";
import { ThemeContext } from "../context/ThemeContext";

const index = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Calculator />
    </ThemeProvider>
  );
};

export default index;
