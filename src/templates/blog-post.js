import React from "react";
import graphql from "graphql";
import Helmet from "react-helmet";
import MarkdownContent from "../components/markdown";
import { Container } from "../components/layout";
import { H1 } from "../components/typography";

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Container>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <H1>{post.frontmatter.title}</H1>
      <MarkdownContent content={post.html} />
    </Container>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
