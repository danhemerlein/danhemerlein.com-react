import React from "react";
import styled from "styled-components";
import { bodySerif } from "../../../styles/utilities";
import { spacing } from "../../../utils";

const LoadingContainer = styled.div`
  padding: ${spacing[2]};
  ${bodySerif}
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <p>loading...</p>
    </LoadingContainer>
  );
}
