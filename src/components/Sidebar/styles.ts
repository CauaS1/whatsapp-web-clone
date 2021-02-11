import styled, { css } from "styled-components";

import { FaCommentAlt, FaCircleNotch, FaEllipsisV } from "react-icons/fa";

export const Container = styled.div`
  width: 90px;
  height: 100%;
  background: linear-gradient(50deg, #21c063, #1bee9a);

  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;

    cursor: pointer;
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > nav button + button {
    //A partir do segundo botao, dê 10 de margin
    margin-top: 10px;
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

    transition: 0.3s;

    &:hover {
      opacity: 80%;
    }
  }
`;

const generalIconCSS = css`
  width: 18.5px;
  height: 18.5px;

  color: #f5f5f5;
`;

export const MessageIcon = styled(FaCommentAlt)`
  ${generalIconCSS}
`;

export const StatusIcon = styled(FaCircleNotch)`
  ${generalIconCSS}
`;

export const SettingsIcon = styled(FaEllipsisV)`
  ${generalIconCSS}
`;
