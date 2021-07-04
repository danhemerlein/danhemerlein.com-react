import FullScreenHeight from "components/other/FullScreenHeight";
import React from "react";
import { FlexContainer, H1, P } from "styles/elements";

export default function Credits() {
  return (
    <FullScreenHeight>
      <FlexContainer direction="column">
        <H1>site credits:</H1>

        <P>
          Not Found page icon create by&nbsp;
          <a
            href="https://linktr.ee/yuto.nyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeremy Yuto
          </a>
        </P>

        <P>
          Lack Italic font by&nbsp;
          <a
            href="http://www.adrienmidzic.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adrien Midzic
          </a>
        </P>

        <P>
          Happy Times font created by&nbsp;
          <a
            href="https://lucaslebihan.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Le Bihan
          </a>
        </P>

        <P>Menu Close icon created by Sophia Bai from the Noun Project</P>
      </FlexContainer>
    </FullScreenHeight>
  );
}
