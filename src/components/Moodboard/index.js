import React, { Component } from "react";

import Image from '../base/Image';

import './Moodboard.scss'

export default class Moodboard extends Component {
  render() {
    return (
      <div className="Moodboard flex flex-column mt2">
        {
          this.props.images.map((image, index) => {
            return (
              <div className="flex justify-center">
                <div className="max-width-3">
                  <div className="my1">
                    <Image src={image.fields.file.url} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}