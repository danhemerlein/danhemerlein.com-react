import GoHomeBack from "components/base/GoHomeBack";
import Loading from "components/other/Loading";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { getMusicPageContent } from "../../../store/actions/musicPage";
import { above, fullBleed } from "../../../styles/utilities";
import { remHelper } from "../../../utils";
import MusicHero from "./MusicHero";
import MusicSort from "./MusicSort";
import ProjectPreview from "./ProjectPreview";

const PageContainter = styled(FlexContainer)`
  ${fullBleed({ space: 1, right: true, left: true })};
  padding-top: ${remHelper[16]};
  padding-bottom: ${remHelper[16]};
`;

const ProjectPreviewContainer = styled(FlexContainer)`
  flex-direction: column;
  padding: 0 ${remHelper[16]} 0 ${remHelper[16]};

  ${above.tablet`
    flex-direction: row;
  `}
`;

const Music = (props) => {
  const { musicPageLoading, musicPage, projects } = props;

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
      const sorted = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      setActiveProjects(sorted);
    } else if (event.target.value === "most-recent") {
      const sorted = props.projects.sort(function (a, b) {
        return b.fields.releaseDateFormat - a.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);
    } else if (event.target.value === "oldest") {
      const sorted = props.projects.sort(function (a, b) {
        return a.fields.releaseDateFormat - b.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);
    } else {
      const sorted = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      const filtered = sorted.filter(function (project) {
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
    <PageContainter wrap="wrap" items="center" justify="center">
      <MusicHero />

      <ProjectPreviewContainer wrap="wrap" items="center" justify="center">
        <MusicSort handleChange={handleChange} />

        {activeProjects.map((project) => {
          const { title } = project.fields;
          return <ProjectPreview project={project} key={title} />;
        })}

        <div className="w100 flex justify-center mb3">
          <GoHomeBack destination="/" cta="go back" white />
        </div>
      </ProjectPreviewContainer>
    </PageContainter>
  );
};

const mapStateToProps = (state) => {
  return {
    musicPageLoading: state.musicPage.loading,
    musicPage: state.musicPage.content,
  };
};

export default connect(mapStateToProps)(Music);
