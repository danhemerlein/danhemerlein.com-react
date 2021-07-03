import Image from "components/base/Image";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ProjectPreview = ({ project }) => {
  const { handle, artwork, title, artist, role } = project;
  return (
    <div
      className="ProjectPreview flex col-12 md:col-6
      lg:col-3 mb1 md:mb2"
    >
      <div className="ProjectPreview__container flex relative mx0 my0 md:mx1 flex-col md:flex-row">
        <Link to={`/music/${handle}`}>
          <Image
            src={artwork.fields.file.url}
            alt={artwork.fields.file.title}
          />
          <div
            className="ProjectPreview__overlay bg-white color-black
          justify-center flex-col items-center absolute l0 t0
          r0 b0 w100 h100 p2 text-center none md:flex"
          >
            <h3 className="ProjectPreview__title my_25">{title}</h3>
            <h4 className="ProjectPreview__artist my_25">by {artist}</h4>
            <h5
              className="ProjectPreview__role bold
            text-lowercase my_25"
            >
              {role}
            </h5>
          </div>
        </Link>
        <div className="ProjectPreview__mobile-details flex justify-between items-center md:none mt1">
          <div>
            <h4 className="ProjectPreview__title color-white">
              <Link to={`/music/${handle}`}>{title}</Link>
            </h4>
            <h3 className="ProjectPreview__artist color-white">
              <Link to={`/music/${handle}`}>by {artist}</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
