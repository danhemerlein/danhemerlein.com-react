import React from "react";
import styled from "styled-components";
import { above } from "../../../styles/utilities";

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  cursor: pointer;

  ${above.tablet`
    display: none;
  `};

  ${({ navOpen }) => navOpen && `display: block;`};
`;

const MobileNavOverlay = ({ navOpen, clickHandler }) => {
  return <Overlay navOpen={navOpen} onClick={clickHandler} />;
};

export default MobileNavOverlay;
