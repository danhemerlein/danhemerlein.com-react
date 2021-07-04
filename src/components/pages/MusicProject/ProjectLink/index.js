import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above, transparentBorder, whiteBorder } from "styles/utilities";
import { remHelper } from "utils";
import { i, j, k } from "./data";

const Inner = styled(FlexContainer)`
width: 100%;
margin-bottom: ${remHelper[32]}

color: ${({ theme }) => theme.light.white};

  ${above.desktop`
    border-bottom: ${transparentBorder}

    &:hover {
      border-bottom: ${whiteBorder};
    }
  `}
`;

const StyledA = styled.a`
  ${({ desktop }) => desktop && `display: none;`};
  ${({ mobile }) => mobile && `display: inline;`};

  ${above.desktop`
    ${({ mobile }) => mobile && `display: none;`};
    ${({ desktop }) => desktop && `display: inline;`};
  `}
`;

const LinkTitleContainer = styled(FlexContainer)`
  width: 100%;
  margin-bottom: ${remHelper[16]}
  color: ${({ theme }) => theme.light.white};

`;

const Links = ({ key, link }) => {
  if (link.link !== undefined) {
    return (
      <span key={key}>
        <StyledA
          mobile
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Inner justify="space-between">
            {i.map((item) => {
              const [id, sym] = item;
              return <span key={id}>{sym}</span>;
            })}
            <span>{link.title}</span>
            {j.map((item) => {
              const [id, sym] = item;
              return <span key={id}>{sym}</span>;
            })}
          </Inner>
        </StyledA>

        <StyledA
          desktop
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={key + 10}
        >
          <LinkTitleContainer justify="space-between">
            <span>{key}</span>
            {k.map((item) => {
              const [id, sym] = item;

              return <span key={id}>{sym}</span>;
            })}
            <span>{link.title}</span>
          </LinkTitleContainer>
        </StyledA>
      </span>
    );
  }
  return null;
};

export default Links;
