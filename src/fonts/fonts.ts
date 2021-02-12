import { createGlobalStyle } from 'styled-components'

import Rubik from './Rubik-Light.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: local('Rubik'), local('Rubik'),
    url(${Rubik}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }
`;
