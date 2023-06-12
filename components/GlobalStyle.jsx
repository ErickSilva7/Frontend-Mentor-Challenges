import { createGlobalStyle } from "styled-components";
import { mainFont, scrollbarThumbColor } from "./variables";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: ${mainFont};

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbarThumbColor};
  }
}

body {
  @media (min-height: 688px) {
    height: 100vh;
  }
  
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;
