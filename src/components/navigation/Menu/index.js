import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
`;

const Menu = ({ clickHandler }) => {
  return (
    <StyledButton type="button" onClick={clickHandler}>
      menu
    </StyledButton>
  );
};

export default Menu;
