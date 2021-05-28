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
      <h3 className="body-serif">menu</h3>
    </StyledButton>
  );
};

export default Menu;
