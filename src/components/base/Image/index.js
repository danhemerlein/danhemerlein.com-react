import React, { Component } from 'react';
import './Image.scss';

class Image extends Component {

  render() {
    const { src, alt, style, bg, children } = this.props;
    let bgStyle = {
      ...style,
      backgroundColor: 'gray',
      backgroundImage: `url(${src})`
    };

    if (!bg) {
      return (
        <img
          style={style}
          src={src}
          alt={alt}
        />
      );
    }
    return (
      <div style={bgStyle}>
        {children}
      </div>
    );
  }
}

export default Image;
