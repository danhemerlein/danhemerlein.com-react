import GoHomeBack from "components/base/GoHomeBack";
import Loading from "components/other/Loading";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { above, blackBorder } from "styles/utilities";
import { remHelper } from "utils";
import { getCodeProjectsContent } from "../../../store/actions/codeProjects";
import BottomCodeProject from "./BottomCodeProject";
import HighlightCodeProject from "./HighlightCodeProject";
import ListLinkCodeProject from "./ListLinkCodeProject";
import TopCodeProject from "./TopCodeProject";

const CodePage = styled(FlexContainer)`
  p {
    font-size: ${remHelper[16]};
  }
`;

const PageParagraph = styled(P)`
  width: 100%;
  padding: 0 ${remHelper[16]};
`;

const ListLinkContainer = styled(FlexContainer)`
  width: 100%;
  max-width: 60rem;
  margin-top: ${remHelper[16]};

  ${above.tablet`
    padding-top: ${remHelper[32]};
    border: ${blackBorder};
  `}
`;

const MarkdownSpan = styled.span`
  font-family: "Courier", serif;
  color: ${({ theme }) => theme.light.yanRed};
`;

const MarginContainer = styled.div`
  margin-top: ${remHelper[16]};
`;

const Code = (props) => {
  const { codeProjectsLoading, codeProjects } = props;

  const { topLinks, listLinks, bottomLinks, highlight } = codeProjects;

  const codeProjectsLength = Object.keys(codeProjects).length;

  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      await dispatch(getCodeProjectsContent());
    };

    loadContent();
  }, [dispatch]);

  if (codeProjectsLoading === false && !codeProjectsLength) {
    return null;
  }
  if (codeProjectsLoading === true && !codeProjectsLength) {
    return <Loading />;
  }
  return (
    <CodePage items="center" justify="center" direction="column">
      {topLinks.map((project, topLinkKey) => {
        const { title } = project.fields;
        return (
          <TopCodeProject project={project} index={topLinkKey} key={title} />
        );
      })}

      {highlight.map((project, projectKey) => {
        const { title } = project.fields;

        return (
          <HighlightCodeProject
            project={project}
            index={projectKey}
            key={title}
            gradientRotation="45deg"
            gradientStart="#fff"
            gradientEnd="#ff6ad5"
          />
        );
      })}

      <ListLinkContainer direction="column" wrap="wrap" items="center">
        <PageParagraph>
          In my spare time, I enjoy developing, hosting and maintaining websites
          for my musician friends. Below are few recent selections.
        </PageParagraph>

        <ListLinkContainer
          direction="column"
          wrap="wrap"
          items="center"
          index={1}
        >
          {listLinks.map((project, key) => {
            return (
              <ListLinkCodeProject
                project={project}
                index={key}
                key={project}
              />
            );
          })}
        </ListLinkContainer>
      </ListLinkContainer>

      <ListLinkContainer
        direction="column"
        wrap="wrap"
        items="center"
        index={1}
      >
        <PageParagraph>
          Below are a few&nbsp;
          <MarkdownSpan>just for fun</MarkdownSpan>
          &nbsp; projects I'm working on in various states of completion:
        </PageParagraph>

        <MarginContainer>
          {bottomLinks.map((project, key) => {
            return (
              <BottomCodeProject project={project} index={key} key={project} />
            );
          })}
        </MarginContainer>
      </ListLinkContainer>

      <MarginContainer>
        <GoHomeBack destination="/" cta="go home" white={false} />
      </MarginContainer>
    </CodePage>
  );
};

const mapStateToProps = (state) => {
  return {
    codeProjectsLoading: state.codeProjects.loading,
    codeProjects: state.codeProjects.content,
  };
};

export default connect(mapStateToProps)(Code);
