import React from "react";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";

const Overlay = styled(FlexContainer)`
  display: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: ${remHelper[16]};
  background-color: ${({ theme }) => theme.light.white};
  color: ${({ theme }) => theme.light.black};
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;

  ${above.tablet`
    display: flex;
    visibility: visible;
  `}
`;

const StyledP = styled(P)`
  margin: ${remHelper[4]} 0;
  ${({ lowercase }) => lowercase && `text-tranform: lowercase`};
`;

export default function DesktopOverlay({ title, artist, role }) {
  return (
    <Overlay justify="center" items="center" direction="column">
      <StyledP>{title}</StyledP>
      <StyledP>by&nbsp;{artist}</StyledP>
      <StyledP lowercase>{role}</StyledP>
    </Overlay>
  );
}
