import React from "react";

import { usePalette } from "react-palette";

import useHeight from "hooks/useHeightMS";

import ProjectDetails from './ProjectDetails';
import ProjectLink from './ProjectLink';
import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicProject.scss";

const MusicProject = (props) => {
  const { project } = props;

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const MusicProject = document.querySelector(".MusicProject");
  const links = document.querySelector(".MusicProject__links-container");

  useHeight(header, footer, MusicProject, links);

  const { data } = usePalette(
    "https:"+project.fields.artwork.fields.file.url
  );

  const bgStyle  = {
    backgroundImage: `linear-gradient(45deg, ${data.lightMuted}, ${data.muted})`
  };

  return (
    <div
      className="MusicProject flex items-center flex-col relative h100 p1 md:p2 justify-between md:justify-center my1 body-serif"
      style={bgStyle}
    >

      <div className="col-12 md:col-8 lg:col-8 flex justify-center flex-col lg:flex-row">

        <Image
          src={project.fields.artwork.fields.file.url}
          alt={project.fields.artwork.fields.file.title}
        />

        <div className="col-12 lg:col-6 mb1 lg:mb0 lg:ml_5 lg:flex lg:flex-col lg:justify-center">

          <ProjectDetails project={project} />

          <div className="MusicProject__links-container mt1">
            {project.fields.links.map((link, key) => {
              return <ProjectLink key={key} link={link} />
            })}
          </div>

        </div>

      </div>

      <div className="MusicProject__go-back-container absolute">
        <GoHomeBack destination="/music/" cta="go back" white={true} />
      </div>

    </div>
  );
};

export default MusicProject;
