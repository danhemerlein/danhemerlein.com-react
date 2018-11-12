import React, { Component } from "react";

import Image from '../base/Image';

import './Moodboard.scss'

export default class Moodboard extends Component {
  render() {
    console.log(this.props.images);
    return (
      <div className="Moodboard flex flex-column">
        {
          this.props.images.map((image) => {
            return (
              <div className="col-6">
                <Image src={image.fields.file.url} />
              </div>
            )
          })
        }
      </div>
    )
  }
}