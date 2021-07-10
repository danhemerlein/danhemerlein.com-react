import styled from "styled-components";
import { remHelper } from "../../utils";
import theme from "../theme";

export const H1 = styled.h1`
  font-size: ${remHelper[32]};
  font-family: "custom_serif";

  color: ${theme.light.black};
  ${({ textCenter }) => textCenter && `text-align: center`};
  ${({ black }) => black && `color: ${theme.light.black};`};
  ${({ yanRed }) => yanRed && `color: ${theme.light.yanRed};`};
`;

export const H2 = styled.h2`
  font-size: ${remHelper[24]};
  font-family: "custom_serif";

  color: ${theme.light.black};
  ${({ textCenter }) => textCenter && `text-align: center`};
  ${({ black }) => black && `color: ${theme.light.black};`};
  ${({ yanRed }) => yanRed && `color: ${theme.light.yanRed};`};
`;

export const P = styled.p`
  font-size: ${remHelper[16]};
  font-family: "custom_serif";
  color: ${theme.light.black};

  ${({ lowercase }) => lowercase && `text-transform: lowercase`};
  ${({ textCenter }) => textCenter && `text-align: center`};
  ${({ textRight }) => textRight && `text-align: right`};
  ${({ white }) => white && `color: ${theme.light.white};`};
  ${({ yanRed }) => yanRed && `color: ${theme.light.yanRed};`};
`;

// export const A = styled.a`
//   cursor: pointer;
//   ${anchorColor({
//     color: (props) => props.black && props.theme.light.primary,
//   })};
//   ${anchorColor({
//     color: (props) => props.red && props.theme.light.primaryHighlight,
//   })};
// `;
