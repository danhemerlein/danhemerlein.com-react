import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const GoHomeBack = ({ white, destination, cta }) => {
  return (
    <StyledLink to={destination}>
      <span>{cta}</span>
    </StyledLink>
  );
};

export default GoHomeBack;
