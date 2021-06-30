import React from "react";
import styled from "styled-components";
import { spacing } from "../../../utils";

const LoadingContainer = styled.div`
  padding: ${spacing[2]};
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <p>loading...</p>
    </LoadingContainer>
  );
}
