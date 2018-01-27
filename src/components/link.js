import React from "react";
import GatsbyLink from "gatsby-link";

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  );
}
