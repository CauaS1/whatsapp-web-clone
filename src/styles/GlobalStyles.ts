import { createGlobalStyle } from 'styled-components';
import Rubik from '../fonts/Rubik.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    src: url(${Rubik});
  }

  html {
    font-family: Rubik, sans-serif;
  }
`;
