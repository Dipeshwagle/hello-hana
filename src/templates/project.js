import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSiteMetadata } from "../components/useSiteMetadata"
import Img from "gatsby-image"
import Categories from "../components/categories"


export default function Project({ data, pageContext, location }) {
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
  const { image } = useSiteMetadata()

  return (
    <Layout location={location}>
      <SEO title={title} image={image} />
      <article className="project-details">
        <h1 className="center">{title}</h1>
        <p className="center">
            <Categories categories={categories}/>
        </p>
        <br />
        <div className="center ">
          <MDXRenderer>{description}</MDXRenderer>
        </div>

        {liveSite && (
          <p className="center">
            <a href={liveSite}>Visit Site</a>
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
