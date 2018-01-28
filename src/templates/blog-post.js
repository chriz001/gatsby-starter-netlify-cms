import React from "react";
import graphql from "graphql";
import Helmet from "react-helmet";
import Content from "../components/Content";
import MarkdownContent from "../components/markdown";
import { Container } from "../components/layout";
import { H1 } from "../components/typography";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      {helmet || ""}
      <H1>{title}</H1>
      <p>{description}</p>
      <PostContent content={content} />
    </Container>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={MarkdownContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
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
