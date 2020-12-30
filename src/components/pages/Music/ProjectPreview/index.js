import React from "react";
import { Link } from "react-router-dom";
import Image from "components/base/Image";

import "./styles.scss";

const ProjectPreview = (props) => {
  const { project } = props;
  return (
    <div className="ProjectPreview flex col-12 md:col-6
      lg:col-3 body-serif mb1 md:mb2"
    >
      <div className="ProjectPreview__container flex relative mx0 my0 md:mx1 flex-col md:flex-row">
        <Link to={`/music/${project.fields.handle}`}>
          <Image
            src={project.fields.artwork.fields.file.url}
            alt={project.fields.artwork.fields.file.title}
          />
          <div className="ProjectPreview__overlay bg-white color-black
          justify-center flex-col items-center absolute l0 t0
          r0 b0 w100 h100 p2 text-center none md:flex">
            <h3 className="ProjectPreview__title my_25">
              {project.fields.title}
            </h3>
            <h4 className="ProjectPreview__artist my_25">
              by {project.fields.artist}
            </h4>
            <h5 className="ProjectPreview__role bold
            text-lowercase my_25">
              {project.fields.role}
            </h5>
          </div>
        </Link>
        <div className="ProjectPreview__mobile-details flex justify-between items-center md:none mt1">
          <div>
            <h4 className="ProjectPreview__title color-white">
              <Link to={`/music/${project.fields.handle}`}>
                {project.fields.title}
              </Link>
            </h4>
            <h3 className="ProjectPreview__artist color-white">
              <Link to={`/music/${project.fields.handle}`}>
                by {project.fields.artist}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ProjectPreview
