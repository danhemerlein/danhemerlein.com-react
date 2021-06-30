import React, { Component } from "react";

class Image extends Component {
  render() {
    const { src, alt, style, bg, children } = this.props;
    const bgStyle = {
      ...style,
      backgroundColor: "gray",
      backgroundImage: `url(${src})`,
    };

    if (!bg) {
      return <img style={style} src={src} alt={alt} loading="lazy" />;
    }
    return <div style={bgStyle}>{children}</div>;
  }
}

export default Image;
