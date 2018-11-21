import React, { Component } from "react";
import get from "../../utils/get";

import Image from "../base/Image";

import "./Moodboard.scss"

export default class Moodboard extends Component {
  renderGalleryRow = (imageGroup, index) => {
    return (
      <div className="Moodboard__content full-width flex mb1" key={index}>
        <div className="flex items-center col-12 md-col-6 mr1">
          <Image src={get(imageGroup, "[0].fields.file.url")} alt={get(imageGroup, "[0].fields.title")} />
        </div>
        <div className="flex items-center col-12 md-col-6">
          <Image src={get(imageGroup, "[1].fields.file.url")} alt={get(imageGroup, "[1].fields.title")} />
        </div>
      </div>
    );
  };

  render() {

    const shuffle = function (arr) {
      let currentIndex = arr.length;
      let temporaryValue;
      let randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
      return arr;
    };

    const images = get(this, "props.images", []);

    const imageMatrix = shuffle(images).reduce(
      (rows, image, index) =>
        (index % 2 === 0
          ? rows.push([image])
          : rows[rows.length - 1].push(image)) && rows,
      []
    );

    return (
      <div className="Moodboard my2 flex flex-wrap">
        {imageMatrix.map((imageGroup, index) =>
          this.renderGalleryRow(imageGroup, index, imageMatrix)
        )}
      </div>
    );
  }
}
