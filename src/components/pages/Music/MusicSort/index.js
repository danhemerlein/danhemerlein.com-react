import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { spacing } from "../../../../utils";

const Container = styled(FlexContainer)`
  width: 100%;
  margin-bottom: ${spacing[1]};
  margin-left: ${spacing[1]};
  font-size: 1.25rem;
`;

const StyledSpan = styled.span`
  color: white;
  display: block;
  margin-bottom: ${spacing[0.5]};
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
