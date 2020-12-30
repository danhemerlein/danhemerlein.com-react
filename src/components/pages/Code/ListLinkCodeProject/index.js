import React from "react";
import "./styles.scss";

const ListLinkCodeProject = (props) => {
  const { project } = props;

  return (
    <div className="ListLinkCodeProject col-12 md:col-6 mb2 px2 md:px0">
      <div className="flex md:justify-center">
         <a
          href={project.fields.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ListLinkCodeProject__a text-center"
        >
          <h4 className="ListLinkCodeProject__headline m0">
            {project.fields.title}
          </h4>
        </a>
      </div>
    </div>
  )

}

export default ListLinkCodeProject
