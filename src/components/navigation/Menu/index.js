import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  font-family: "custom_serif";
`;

const Menu = ({ clickHandler }) => {
  return (
    <StyledButton type="button" onClick={clickHandler}>
      menu
    </StyledButton>
  );
};

export default Menu;
