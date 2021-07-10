import GoHomeBack from "components/base/GoHomeBack";
import Loading from "components/other/Loading";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMusicPageContent } from "store/actions/musicPage";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";
import MusicHero from "./MusicHero";
import MusicSort from "./MusicSort";
import ProjectPreview from "./ProjectPreview";

const PageContainer = styled.div`
  margin-bottom: ${remHelper[16]};
`;

const ProjectPreviewContainer = styled(FlexContainer)`
  flex-direction: column;

  ${above.tablet`
    flex-direction: row;
  `}
`;

const GoHomeContainer = styled(FlexContainer)`
  width: 100%;
`;

const Music = ({ musicPageLoading, musicPage, projects }) => {
  const [sort, setSort] = useState("default");
  const [activeProjects, setActiveProjects] = useState(projects);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      await dispatch(getMusicPageContent());
    };

    loadContent();
  }, [dispatch]);

  function handleChange(event) {
    setSort(event.target.value);

    if (event.target.value === "") {
      const sorted = projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      setActiveProjects(sorted);
    } else if (event.target.value === "most-recent") {
      const sorted = projects.sort((a, b) => {
        return b.fields.releaseDateFormat - a.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);
    } else if (event.target.value === "oldest") {
      const sorted = projects.sort((a, b) => {
        return a.fields.releaseDateFormat - b.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);
    } else {
      const sorted = projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      const filtered = sorted.filter((project) => {
        return project.fields[event.target.value];
      });

      setActiveProjects(filtered);
    }
  }

  const content = projects.length;

  if (musicPageLoading === false && !content) {
    return null;
  }
  if (musicPageLoading === true && !content) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <MusicHero />
      <FlexContainer wrap="wrap" items="center" justify="center">
        <ProjectPreviewContainer wrap="wrap" items="center" justify="center">
          <MusicSort handleChange={handleChange} />

          {activeProjects.map((project, index) => {
            const { title } = project.fields;
            return (
              <ProjectPreview index={index} project={project} key={title} />
            );
          })}

          <GoHomeContainer justify="center">
            <GoHomeBack destination="/" cta="go back" white />
          </GoHomeContainer>
        </ProjectPreviewContainer>
      </FlexContainer>
    </PageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    musicPageLoading: state.musicPage.loading,
    musicPage: state.musicPage.content,
  };
};

export default connect(mapStateToProps)(Music);
