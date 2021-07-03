import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import styled from "styled-components";
import { remHelper } from "utils";

const DescriptionContent = styled.div`
  margin-top: ${remHelper[16]};

  p {
    font-family: "custon_serif";
    font-size: ${remHelper[16]};
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.light.black};

    &:visited {
      color: ${({ theme }) => theme.light.black};
    }
  }
`;

export default function ProjectContent({ description }) {
  return (
    <DescriptionContent>
      {description.content.map((node) => documentToReactComponents(node))}
    </DescriptionContent>
  );
}
