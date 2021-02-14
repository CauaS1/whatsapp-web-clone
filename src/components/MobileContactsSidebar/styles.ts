import styled from 'styled-components';

export const Container = styled.div`
  width: 11%;
  min-width: 65px;
  height: 100%;
  padding: 15px 0;
  background: #f1f1f5;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media(min-width: 1000px) {
    display: none;
  }

`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;

  object-fit: cover;
  transition: .3s;

  &:hover {
    border-radius: 25%;
  }

  @media(max-width: 700px) {
    width: 45px;
    height: 45px;
  }
`;
