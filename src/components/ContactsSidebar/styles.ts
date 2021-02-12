import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  min-width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #f1f1f5;

`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 18px 10px;
  margin: 10px 0;
  background-color: #f1f1f5;

  border-radius: 10px;
  outline: none;
  transition: all .3s linear;
  border: 0;
  box-shadow: 0px 1px 10px 1px #cacace63;

  &:focus {
    background-color: #21c06322;
  }

`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 10px;

  > .contact-row + .contact-row {
    margin-top: 8px;
  }

  > .contact-row {
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 10px;
    padding: 0 8px;
    transition: .3s;
    cursor: pointer;
    box-shadow: 0px 1px 10px 1px #cacace63;


    &:hover {
      background-color: #21c06322;
    }

    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .column {
      height: 100%;
      margin-left: 10px;

      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .column h2, p {
      color: #000;
    }

    .column h2 {
      font-size: 15px;
      opacity: 87%;
      margin-bottom: 3.5px;
    }

    .column p {
      font-size: 14px;
      opacity: 50%;
    }
  }
`;
