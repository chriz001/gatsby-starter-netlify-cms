import React from "react";
import { Box } from "grid-styled";

// import {H1, Text} from 'components/typography';

const PageHeader = ({ title, subTitle }) => (
  <Box pt={[24, 48]} pb={[8, 16]}>
    <h1>{title}</h1>
    {subTitle ? <p fontSize={[0, 1, 2]}>{subTitle}</p> : null}
  </Box>
);
export default PageHeader;
