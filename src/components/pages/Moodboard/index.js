import React, { Component } from "react";
import GoHomeBack from "components/base/GoHomeBack";

import get from "utils/get";

import Image from "components/base/Image";

import "./Moodboard.scss"

export default class Moodboard extends Component {

  /**
   * Check if an element is in viewport
   *
   * @param {number} [offset]
   * @returns {boolean}
   */
  isInViewport = () => {
    if (!this.elem) return false;
    const top = this.elem.getBoundingClientRect().top;
    return (top + 80) <= window.innerHeight;
  }

  handleScroll = () => {
    let bool = this.isInViewport();

    if(bool) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  renderGalleryRow = (imageGroup, index) => {
    return (
      <div className="Moodboard__content full-width flex mb1" key={index}>
        <div className="flex items-end col-12 md-col-6 mr1">
          <Image src={get(imageGroup, "[0].fields.file.url")} alt={get(imageGroup, "[0].fields.title")} />
        </div>
        <div className="flex items-end col-12 md-col-6">
          <Image src={get(imageGroup, "[1].fields.file.url")} alt={get(imageGroup, "[1].fields.title")} />
        </div>
      </div>
    );
  };

  render() {
    const images = get(this, "props.images", []);

    const imageMatrix = images.reduce(
      (rows, image, index) =>
        (index % 2 === 0
          ? rows.push([image])
          : rows[rows.length - 1].push(image)) && rows,
      []
    );

    return (
      <div className="Moodboard flex flex-wrap">
        {imageMatrix.map((imageGroup, index) =>
          this.renderGalleryRow(imageGroup, index, imageMatrix)
        )}
        {/* <ScrollToTop scrollStepInPx="75" delayInMs="10" /> */}
        <div className="full-width flex justify-center my3">
          <GoHomeBack destination="/" cta="go back" white={false} />
        </div>
        <div ref={(el) => this.elem = el}></div>
      </div>
    );
  }
}
