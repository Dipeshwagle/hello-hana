import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSiteMetadata } from "../components/useSiteMetadata"
import Img from "gatsby-image"
import kebabCase from "lodash/kebabCase"

export default function Project({ data, pageContext, location }) {
  console.log({ data })
  const { body, frontmatter } = data.mdx
  const {
    title,
    description,
    categories,
    featuredImage,
    liveSite,
    testimonials,
    date
  } = frontmatter

  console.log({ frontmatter })
  const { image } = useSiteMetadata()

  return (
    <Layout location={location}>
      <SEO title={title} image={image} />
      <article>
        <h1 className="center">{title}</h1>

        <br />
        <div className="center ">
          <MDXRenderer>{description}</MDXRenderer>
        </div>
        <br />
        <div className="center">
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            className="blog-feature-image-pinterest"
          />
        </div>

       <p className="center">
          <strong>{date}</strong>
        </p>

        <p className="center">
          <strong>
            {categories.map((category, index) => {
              const addSlash = index !== categories.length - 1 ? "/" : ""

              return (
                <span key={index}>
                  <Link
                    to={`/project/category/${kebabCase(category)}/`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {category}
                    {addSlash}
                  </Link>{" "}
                </span>
              )
            })}
          </strong>
        </p>
        {liveSite && (
          <p className="center">
            <a href={liveSite}>Vist Site</a>
          </p>
        )}
        <br />
        {testimonials && (
          <div>
            <ul>
              {testimonials.map(testimonial => (
                <li>{testimonial}</li>
              ))}
            </ul>
          </div>
        )}˝
        <br/>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const projectQuery = graphql`
  query projectsByPath($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        categories
        liveSite
        testimonials
        date(formatString: "YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        image
      }
    }
  }
`
