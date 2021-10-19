import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../components/useSiteMetadata"
import Img from "gatsby-image"
import kebabCase from "lodash/kebabCase"

export default function Project({ data, pageContext, location }) {
  console.log({data})
  const project = data.mdx
  const { image } = useSiteMetadata()

  return (
    <Layout location={location}>
      <SEO title={project.frontmatter.title} image={image} />
      <article>
        <h1 className="center">{project.frontmatter.title}</h1>
       
        <br />
        <p className="center blog-date">{project.frontmatter.description}</p>
        <br />
        <p>
          <strong>
            {project.frontmatter.categories.map((category, index) => {
              const addSlash = index !== project.frontmatter.categories.length - 1 ? "/" : ""

              console.log({category,index,length:project.frontmatter.categories.length})
              return (
                <span key={index} >
                  <Link
                    to={`/project/category/${kebabCase(category)}/`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {category}{addSlash}
                  </Link>{" "}
                </span>
              )
            })}
          </strong>
        </p>
        <MDXRenderer>{project.body}</MDXRenderer>

        <div className="center">
          <Img
            fluid={project.frontmatter.featuredImage.childImageSharp.fluid}
            alt={project.frontmatter.title}
            className="blog-feature-image-pinterest"
          />
        </div>
        <div><p>
          {project.frontmatter.description}
          
          </p></div>
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
