import React from "react";
import { use100vh } from "react-div-100vh";
import styled from "styled-components";
import { BREAKPOINT, checkMediaQuery } from "../../../styles/utilities";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FullScreenHeight({ children }) {
  const PADDING = 32;
  const HEADER_HEIGHT = 32;
  const FOOTER_HEIGHT = 16;
  const offset = PADDING + HEADER_HEIGHT + FOOTER_HEIGHT;
  const height = use100vh();

  const isTabletUp = checkMediaQuery(BREAKPOINT.tablet);

  const generateHeight = (isTablet, height, heightOffset) => {
    return isTablet ? height - heightOffset : "auto";
  };

  return (
    <div style={{ height: generateHeight(isTabletUp, height, offset) }}>
      <Container>{children}</Container>
    </div>
  );
}
