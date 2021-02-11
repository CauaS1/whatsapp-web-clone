import styled from 'styled-components';

export const Container = styled.header`
    > header {
    width: 100%;
    padding: 10px 12px;;
    background-color: #121212;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    > nav {
      display: flex;
      flex-direction: row;
    }

    > nav button + button { //A partir do segundo botao, dê 10 de margin
      margin-left: 10px;
    }

    > nav button {
      min-width: 30px;
      padding: 5px;
      background: none;
      outline: none;
      border: 0;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    }

   
  }
`;
