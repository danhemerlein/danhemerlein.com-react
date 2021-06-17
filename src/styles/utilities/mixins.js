import { css } from "styled-components";

export const fullBleed = ({
  top = false,
  right = false,
  bottom = false,
  left = false,
  space,
} = {}) => css`
  ${top && `margin-top: -${space}rem`};
  ${right && `margin-right: -${space}rem`};
  ${bottom && `margin-bottom: -${space}rem`};
  ${left && `margin-left: -${space}rem`};
`;

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
