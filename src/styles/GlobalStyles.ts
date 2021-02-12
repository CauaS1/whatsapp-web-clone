import { createGlobalStyle } from 'styled-components';
import Rubik from '../fonts/Rubik-Light.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Rubik';
    src: local('Rubik'), local('Rubik'),
    url(${Rubik}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
