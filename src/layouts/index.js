import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Footer from "../components/footer";
import Header from "../components/header";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Source Sans Pro"]
  }
});

const theme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  colors: {
    background: "#fcfdff",
    heading: "#494E72",
    text: "#4E6087",
    textHover: "#3336c7",
    toggleBackground: "#3336c7",
    toggleButton: "#fcfdff",
    border: "#e6e9ef",
    link: "#3336c7",
    primary: "#00f"
  }
};

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ::selection {
    background-color: #00f;
    color: #fff;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
  }
`;

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Helmet title="" />
      <Header />
      <Main>{children()}</Main>
      <Footer />
    </Page>
  </ThemeProvider>
);

export default TemplateWrapper;
