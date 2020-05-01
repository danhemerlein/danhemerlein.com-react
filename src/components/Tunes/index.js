import React, { Component } from "react";

import "./Tunes.scss";

export default class Tunes extends Component {
  render() {
    return (
      <div className="Tunes">
        {this.props.tunes.map((tune, key) => {
          return (
            <figure key={key}>
              <figcaption>{tune.fields.title}</figcaption>
              <audio controls src={tune.fields.file.url} />
            </figure>
          );
        })}
      </div>
    );
  }
}
