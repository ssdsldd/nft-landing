import { createGlobalStyle } from "styled-components";
import bgImage from '../assets/bg.webp';
import { theme } from "./Theme";


export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      min-width: 375px;
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
      background-color: #090F1D;
  }

  a {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section{
    padding: 92px 0;
    @media ${theme.media.tablet}{
      padding: 40px 0;
    }
  }

`