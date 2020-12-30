import React from "react";
import "./styles.scss";

const ProjectDetails = (props) => {
  const { project } = props;
  const renderArtistATag = () => {
    if (project.fields.artistWebsite !== undefined) {
      return (
        <div className="ProjectDetails__artist-link">
          <h4 className="ProjectDetails__artist color-white w100 my_25">
            by{" "}
            <a
              href={project.fields.artistWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.fields.artist}
            </a>
          </h4>
        </div>
      );
    } else {
      return (
        <h4 className="ProjectDetails__artist color-white w100 my_25">
          by {project.fields.artist}
        </h4>
      );
    }
  };

  return (
    <div className="flex justify-between items-center m0">
      <div className="flex flex-col mt1 lg:mt0">
        <h3 className="ProjectDetails__title color-white m0">
          {project.fields.title}
        </h3>
        {renderArtistATag()}
      </div>

      <div className="flex flex-col mt1 col-6">
        <h3 className="ProjectDetails__release color-white text-lowercase text-right my_25 lg:mt0">
          {project.fields.releaseDate.replace(",", '')}
        </h3>

        <h3 className="ProjectDetails__role color-white text-lowercase text-right">
          {project.fields.role}
        </h3>
      </div>
    </div>
  )
}

export default ProjectDetails;
