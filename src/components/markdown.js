import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 0;
  margin: 0 auto;

  h1,
  h2,
  h3 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  p,
  ol,
  ul,
  strong {
    font-size: 1.2rem;
    line-height: 35px;
    color: #333;
    font-family: "PT Serif", sans-serif;
  }
  img {
    max-width: 100%;
  }
`;

export default ({ content, className }) => (
  <Wrapper
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);
