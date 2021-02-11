import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin: 10px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #12121250;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 10px;

  > .contact-row {
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: center;
    }

    .column {
      height: 100%;
      margin-left: 15px;
      border-bottom: .5px solid #cacace;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .column h2, p {
      color: #fff;
    }

    .column h2 {
      font-size: 15px;
      opacity: 87%;
    }

    .column p {
      font-size: 14px;
      opacity: 50%;
    }
  }
`;
