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
    {intro.blurbs.map(item => (
      <div
        key={item.image.childImageSharp.resolutions.src}
        className="column is-6"
      >
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image.childImageSharp.resolutions.src} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
    <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
    <p>{main.description}</p>
    <Image src={main.image1.image} alt={main.image1.alt} />
    <Image src={main.image2.image} alt={main.image2.alt} />
    <Image src={main.image3.image} alt={main.image3.alt} />
    {testimonials.map((testimonial, i) => (
      <article key={i} className="message">
        <div className="message-body">
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
              childImageSharp {
                resolutions(width: 240) {
                  ...GatsbyImageSharpResolutions
                }
              }
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
