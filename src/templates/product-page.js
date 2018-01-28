import React from "react";
import graphql from "graphql";
import Image from "../components/image";
import { Container } from "../components/layout";

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => (
  <Container>
    <Image src={image} />
    <h2>{title}</h2>
    <h3>{heading}</h3>
    <p>{description}</p>
    {intro.blurbs.map((item, i) => (
      <div key={i}>
        <Image src={item.image} />
        <p>{item.text}</p>
      </div>
    ))}
    <h3>{main.heading}</h3>
    <p>{main.description}</p>
    <Image src={main.image1.image} alt={main.image1.alt} />
    <Image src={main.image2.image} alt={main.image2.alt} />
    <Image src={main.image3.image} alt={main.image3.alt} />
    {testimonials.map((testimonial, i) => (
      <article key={i}>
        <div>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
    <Image src={fullImage} />
  </Container>
);

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  );
};

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image {
          childImageSharp {
            resolutions(width: 800) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              relativePath
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                resolutions(width: 240) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                resolutions(width: 240) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                resolutions(width: 240) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            resize(width: 200, quality: 80) {
              src
            }
          }
        }
      }
    }
  }
`;
