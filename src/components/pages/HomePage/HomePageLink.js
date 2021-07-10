import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { above } from "styles/utilities";
import { remHelper } from "utils";

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 200px;

  border-color: ${({ theme }) => theme.light.black};
  background: ${({ theme }) => theme.light.white};
  color: ${({ theme }) => theme.light.black};
  padding: ${remHelper[16]};
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;

  ${({ position }) =>
    position === "top-left" && `border-top: 1px solid; border-left: 1px solid;`}
  ${({ position }) =>
    position === "top-right" &&
    `border-top: 1px solid; border-right: 1px solid; border-left: 1px solid; text-align: right;`}
  ${({ position }) =>
    position === "bottom-left" &&
    `border-bottom: 1px solid; border-left: 1px solid; border-top: 1px solid; display: flex; align-items: flex-end;`}

  ${({ position }) =>
    position === "bottom-right" &&
    `border: 1px solid; text-align: right; display: flex; align-items: flex-end; justify-content: flex-end;`}

    &:hover, &:focus {
    background: ${({ theme }) => theme.light.black};
    color: ${({ theme }) => theme.light.white};
    h2 {
      color: ${({ theme }) => theme.light.white};
    }
  }

  ${above.desktop`
  width: 50%;
  height: 50%;
  `}
`;

export default function HomePageLink({ children, destination, position }) {
  return (
    <StyledLink to={destination} position={position}>
      {children}
    </StyledLink>
  );
}
