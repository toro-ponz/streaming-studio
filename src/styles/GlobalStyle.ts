import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
  }

  p, span, label {
    user-select: none;
  }

  #container {
    width: 100%;
    height: 100%;
    background-color: ${(props): string => props.theme.primaryBackgroundColor};
    color: ${(props): string => props.theme.primaryTextColor};
  }
`;

export default GlobalStyle;
