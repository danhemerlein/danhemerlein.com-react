import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { remHelper } from "../../../../utils";

const Container = styled(FlexContainer)`
  width: 100%;
  margin-bottom: ${remHelper[16]};
  margin-left: ${remHelper[16]};
  font-size: 1.25rem;
`;

const StyledSpan = styled.span`
  color: black;
  display: block;
  margin-bottom: ${remHelper[16]};
`;

const MusicSort = ({ handleChange }) => {
  return (
    <Container>
      <label>
        <StyledSpan>sort</StyledSpan>

        <select onChange={(event) => handleChange(event)}>
          <option value="">default</option>
          <option value="most-recent">most recent</option>
          <option value="oldest">oldest</option>
          <option value="wrote">wrote</option>
          <option value="produced">produced</option>
          <option value="performed">perfomed</option>
        </select>
      </label>
    </Container>
  );
};

export default MusicSort;
