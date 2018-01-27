import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import "./cms.css";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

document.addEventListener("DOMContentLoaded", () => {
  window.netlifyIdentity.init({ logo: false });
});
