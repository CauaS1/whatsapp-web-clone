import styled, { css } from 'styled-components';

import { FaSmileWink } from 'react-icons/fa';
import { MdAttachFile } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 12px;
  background-color: #f1f1f5;
  box-shadow: 15px 2px 10px 1px #cacace63;

  display: flex;
  align-items: center;

  > img {
    width: 35px;
    height: 35px;

    border-radius: 50%;
  }

  > .column {
    margin-left: 10px;
    /* display: flex; */
    /* flex-direction: column;
    align-items: flex-start; */
  }

  > .column h2 {
    font-size: 15px;
  }

  > .column p {
    font-size: 13.5px;
    font-weight: 500;
    opacity: 85%;
  }
`;

export const Content = styled.div`
  /* width: 100%;
   height: 100%; */
  padding: 20px; 
  display: flex;
  flex: 1;
  background: #fff;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;

  background-color: #f1f1f5;
  /* box-shadow: 15px 2px 10px 1px #cacace63; */
  display: flex;
  align-items: center;

  > button + button {
    margin-left: 5px;
  }

  > button {
    min-width: 30px;
    padding: 7px;
    background: none;
    border: 0;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-left: 10px;
  border-radius: 8px;

  box-shadow: 0 1px 5px 1px #cacace63;

  border: 0;
  outline: 0;
`;

const generalIconCSS = css`
  width: 20px;
  height: 20px;
  opacity: 80%;
  color: #000;
`;

export const Emoji = styled(FaSmileWink)`
 ${generalIconCSS} 
`;

export const Attach = styled(MdAttachFile)`
  ${generalIconCSS}
`;

