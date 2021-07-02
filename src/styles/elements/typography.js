import styled from "styled-components";
import { remHelper } from "../../utils";
import theme from "../theme";

export const H1 = styled.h1`
  font-size: ${remHelper[32]};
  font-family: "custom_serif";

  color: ${theme.light.black};
  ${({ textCenter }) => textCenter && `text-align: center`};
  ${({ black }) => black && `color: ${theme.light.black};`};
  ${({ red }) => red && `color: ${theme.light.yanRed};`};
`;

export const P = styled.p`
  font-size: ${remHelper[16]};
  font-family: "custom_serif";

  color: ${theme.light.black};
  ${({ textCenter }) => textCenter && `text-align: center`};
  ${({ black }) => black && `color: ${theme.light.black};`};
  ${({ red }) => red && `color: ${theme.light.yanRed};`};
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
