import styled, { css } from "styled-components";

import ToolTip from "../ToolTip/";

export const Container = styled.div`
  background: #7da3ab;
  border-radius: 10px;
  border: 2px solid #7da3ab;
  padding: 16px;
  width: 100%;
  color: #eef0df;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #06839c;
      border-color: #06839c;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #06839c;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #eef0df;

    &::placeholder {
      color: #eef0df;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
