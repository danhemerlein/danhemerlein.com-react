import React from "react";
import styled from "styled-components";
import { remHelper } from "../../../utils";

const LoadingContainer = styled.div`
  padding: ${remHelper[32]};
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <p>loading...</p>
    </LoadingContainer>
  );
}
