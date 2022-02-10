import styled from "styled-components";
import IconButton from "../common/icons/Vector.svg";

import React, { HTMLProps } from "react";

const StyledButton = styled.button`
  background: #ff5555;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  margin-left: 12px;
  :hover {
    background-color: #e68282;
  }
  :disabled {
    background: #d9d9d9;
    pointer-events: none;
  }
`;

const ButtonSearch: React.FC<HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <StyledButton
      type="submit"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <img src={IconButton} alt="" />
    </StyledButton>
  );
};

export default ButtonSearch;
