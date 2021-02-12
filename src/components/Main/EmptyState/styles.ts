import styled from 'styled-components';

export const Container = styled.div`
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
  width: 42%;
  height: 42%;
  margin-bottom: 15px;
`;
