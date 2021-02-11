import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Rubik, sans-serif;
  }
`;