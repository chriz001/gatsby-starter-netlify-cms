import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledImg = styled.img`
  max-width: 100%;
`;

export default class Image extends Component {
  render() {
    const { src, relativePath, ...rest } = this.props;

    if (!src) return;
    console.log(src);
    if (src.childImageSharp) {
      if (src.childImageSharp.resize) {
        return <StyledImg src={src.childImageSharp.resize.src} {...rest} />;
      } else {
        return <Img {...src.childImageSharp} {...rest} />;
      }
    } else if (src.relativePath) {
      return <StyledImg src={`/${src.relativePath}`} {...rest} />;
    } else {
      return <StyledImg src={src} {...rest} />;
    }
  }
}
