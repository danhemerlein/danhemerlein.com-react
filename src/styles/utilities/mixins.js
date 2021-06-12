import { css } from "styled-components";

export const anchorColor = ({ color = "#FFF" } = {}) => css`
  text-decoration: none;
  text-decoration-color: ${color};
  color: ${color};

  &:visited {
    text-decoration: none;
    color: ${color};
  }

  &:active {
    text-decoration: none;
    color: ${color};
  }

  &:hover {
    text-decoration: underline;
    color: ${color};
  }
`;
