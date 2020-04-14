import React, { Component } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GoHomeBack from "components/base/GoHomeBack";

import './Code.scss'

export default class Code extends Component {
  render() {
    return (
      <div className="Code my2 flex items-center justify-center flex-column">
        {
          this.props.projects.map((project, key) => {
            console.log(project.fields);
            console.log(documentToReactComponents(project.fields.description.content[0]))
            return (
              <div key={key} className="Code__project p2 full-width">
                <div className="Code__title-container flex">
                  <a href={project.fields.link} target="_blank" rel="noopener noreferrer"><h4 className="Code__project__title m0 body-serif">{project.fields.title}</h4></a>
                  <h4 className="Code__project-timeline body-serif">({project.fields.timelineLaunchDate})</h4>
                </div>

                <div className="body-serif mt2">
                  {documentToReactComponents(project.fields.description.content[0])}
                </div>

              </div>
            )
          })
        }
        <div className="mt2">
          <GoHomeBack destination="/" cta="go home" white={false} />
        </div>
      </div>
    )
  }
}
