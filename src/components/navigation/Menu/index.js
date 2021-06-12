import React from "react";
import styled from "styled-components";
import { above } from "../../../styles/utilities";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  display: block;

  ${above.tablet`
    display: none;
  `};
`;

const Menu = ({ clickHandler }) => {
  return (
    <StyledButton type="button" onClick={clickHandler}>
      menu
    </StyledButton>
  );
};

export default Menu;
