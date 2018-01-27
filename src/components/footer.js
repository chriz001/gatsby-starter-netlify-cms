import React from "react";
import styled from "styled-components";

import Link from "../components/link";
import { Container } from "../components/layout";

const Footer = styled.div`
  padding: 2rem;
  background: #141529;
  color: #fff;

  a {
    margin: 0 8px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    border-bottom: 0;
  }
`;

export default () => (
  <Footer>
    <Container>
      <Link itemProp="url" href="https://alexpate.uk" />
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://twitter.com/alexjpate"
        itemProp="sameAs"
      >
        Twitter
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="http://github.com/alexpate"
        itemProp="sameAs"
      >
        GitHub
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://github.com/alexpate/alexpate.uk"
      >
        View Source
      </a>
    </Container>
  </Footer>
);
