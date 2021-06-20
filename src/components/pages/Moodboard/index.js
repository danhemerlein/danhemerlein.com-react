import GoHomeBack from "components/base/GoHomeBack";
import Image from "components/base/Image";
import React, { Component } from "react";
import "./Moodboard.scss";

export default class Moodboard extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  isInViewport = () => {
    if (!this.elem) return false;
    const { top } = this.elem.getBoundingClientRect();
    return top + 80 <= window.innerHeight;
  };

  handleScroll = () => {
    const bool = this.isInViewport();

    if (bool) {
      window.scrollTo(0, 0);
    }
  };

  renderGalleryRow = (imageGroup, index) => {
    const imageOneURL = imageGroup[0].fields.file.url;
    const imageOneTitle = imageGroup[0].fields.file.title;
    const imageTwoURL = imageGroup[1].fields.file.url;
    const imageTwoTitle = imageGroup[1].fields.file.title;

    return (
      <div className="Moodboard__content full-width flex mb1" key={index}>
        <div className="flex items-end col-12 md-col-6 mr1">
          <Image src={imageOneURL} alt={imageOneTitle} />
        </div>
        <div className="flex items-end col-12 md-col-6">
          <Image src={imageTwoURL} alt={imageTwoTitle} />
        </div>
      </div>
    );
  };

  render() {
    const { images } = this.props;

    const imageMatrix = images[0].fields.images.reduce(
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
        <div className="full-width flex justify-center my3">
          <GoHomeBack destination="/" cta="go back" white={false} />
        </div>
        <div ref={(el) => (this.elem = el)} />
      </div>
    );
  }
}
