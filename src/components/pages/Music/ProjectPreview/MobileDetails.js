import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";

const Details = styled(FlexContainer)`
  margin-top: ${remHelper[16]};

  a {
    text-decoration: underline;
  }

  ${above.tablet`
  display: none;
`}
`;

export default function MobileDetails({ handle, title, artist }) {
  return (
    <Details items="center" justify="space-between">
      <div>
        <P>
          <Link to={`/music/${handle}`}>{title}</Link>
        </P>
        <P>
          <Link to={`/music/${handle}`}>by {artist}</Link>
        </P>
      </div>
    </Details>
  );
}
