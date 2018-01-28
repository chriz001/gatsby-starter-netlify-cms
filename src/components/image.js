import React, { Component } from "react";
import Img from "gatsby-image";

export default class Image extends Component {
  render() {
    const { src, ...rest } = this.props;

    if (!src) return;

    if (src.childImageSharp) {
      if (src.childImageSharp.resize) {
        return <img src={src.childImageSharp.resize.src} {...rest} />;
      } else {
        return <Img {...src.childImageSharp} {...rest} />;
      }
    } else {
      return <img src={src} {...rest} />;
    }
  }
}
