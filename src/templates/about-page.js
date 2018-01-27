import React from "react";
import graphql from "graphql";
import { HTMLContent } from "../components/Content";
import { Container } from "../components/layout";

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Container>
      <h2>{post.frontmatter.title}</h2>
      <HTMLContent className="content" content={post.html} />
    </Container>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
