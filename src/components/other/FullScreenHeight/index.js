import React from "react";
import { use100vh } from "react-div-100vh";
import styled from "styled-components";
import {
  BREAKPOINT,
  checkIsBreakpoint,
  checkMediaQuery,
} from "../../../styles/utilities";
import { remHelper } from "../../../utils";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${remHelper[16]} 0;
`;

export default function FullScreenHeight({
  children,
  unsetBreakpoint = "tablet",
}) {
  const isMobile = checkIsBreakpoint(BREAKPOINT.tablet);
  const PADDING = 32;
  const HEADER_HEIGHT = 22;
  const FOOTER_HEIGHT = isMobile ? 12 : 16;

  const offset = PADDING + HEADER_HEIGHT + FOOTER_HEIGHT;
  const height = use100vh();

  const breakpoint = checkMediaQuery(BREAKPOINT[unsetBreakpoint]);

  const generateHeight = (mediaQuery, height, heightOffset) => {
    return mediaQuery ? height - heightOffset : "auto";
  };

  return (
    <div style={{ height: generateHeight(breakpoint, height, offset) }}>
      <Container>{children}</Container>
    </div>
  );
}
