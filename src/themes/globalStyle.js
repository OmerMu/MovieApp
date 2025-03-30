import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: ${({ theme }) => theme.fontSize};
    font-family: ${({ theme }) => theme.fontFamily || "inherit"};
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export default GlobalStyle;
