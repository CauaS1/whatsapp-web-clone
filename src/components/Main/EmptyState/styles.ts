import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p, h2 {
      text-align: center;
    }
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;
