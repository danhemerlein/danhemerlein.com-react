import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { P } from "styles/elements";

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const GoHomeBack = ({ white, destination, cta }) => {
  return (
    <StyledLink to={destination}>
      <P as="span">{cta}</P>
    </StyledLink>
  );
};

export default GoHomeBack;
