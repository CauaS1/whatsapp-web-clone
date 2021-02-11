import styled from "styled-components";

import { FaCommentAlt, FaCircleNotch, FaEllipsisV } from 'react-icons/fa';

export const Container = styled.header`
  > header {
    width: 100%;
    padding: 15px 12px;
    background-color: #4361ee;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-right-radius: 50px;

    > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    > nav {
      display: flex;
      flex-direction: row;
    }

    > nav button + button {
      //A partir do segundo botao, dê 10 de margin
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
`;

export const MessageIcon = styled(FaCommentAlt)`
  width: 18.5px;
  height: 18.5px;

  color: #fff;
`;

export const StatusIcon = styled(FaCircleNotch)`
  width: 18.5px;
  height: 18.5px;

  color: #fff;
`;

export const SettingsIcon = styled(FaEllipsisV)`
  width: 18.5px;
  height: 18.5px;

  color: #fff;
`;
