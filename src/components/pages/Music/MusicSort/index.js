import React from "react";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { remHelper } from "../../../../utils";

const Container = styled(FlexContainer)`
  width: 100%;
  margin: ${remHelper[16]} 0;
`;

const LabelText = styled(P)`
  display: block;
  margin-bottom: ${remHelper[8]};
`;

const MusicSort = ({ handleChange }) => {
  return (
    <Container>
      <label>
        <LabelText as="span">sort</LabelText>

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
