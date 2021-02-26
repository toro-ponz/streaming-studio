import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    width: 100vw;
    margin: 0;
  }

  p, span, label {
    user-select: none;
  }

  #container {
    width: 100%;
    height: 100%;
    background-color: ${(props): string => props.theme.backgroundColor};
    color: ${(props): string => props.theme.textColor};
  }
`;

export default GlobalStyle;
