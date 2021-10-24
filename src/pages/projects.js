import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import kebabCase from "lodash/kebabCase"

const ProjectsPage = () => {

  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: { fields: { source: { eq: "projects" } } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              description
              date(formatString: "YYYY")
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
        }
      }
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  const projects = data.projects.edges

  const firstSixProjects = projects.slice(0, 6)

  const remainingProjects = projects.slice(6)

  console.log({ firstSixProjects, remainingProjects })

  return (
    <Layout>
      <SEO title="Projects" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="indent">Recent Projects</h1>
        <p className="indent">
          Exercitation ullamco labore id non excepteur qui minim quis aliquip
          tempor labore aliqua sit. Elit deserunt eu ea Lorem nulla eu aliqua
          veniam ea magna consequat minim ea. Consequat dolore aute qui
          adipisicing dolore irure ex magna qui deserunt. Mollit consectetur
          sunt non ea id. Commodo irure et labore ex veniam fugiat mollit in
          voluptate veniam cupidatat veniam quis non. Eiusmod tempor officia
          reprehenderit qui adipisicing ad in ea cillum esse exercitation enim
          mollit occaecat. Sit cupidatat nostrud cupidatat sit aliquip nostrud
          consectetur consequat sunt anim laboris tempor irure anim. Commodo
          aliquip qui do laborum magna. Exercitation nostrud et sit laboris
          veniam Lorem. Excepteur aliquip dolor excepteur duis mollit ipsum
          elit. Nostrud do ut veniam ut. Dolor fugiat qui proident id aute
          adipisicing id et aliquip ex nostrud.
        </p>
        <div className="flex-space-between project-showcase">
          {firstSixProjects.map(({ node }) => {
            const { title, featuredImage, categories, slug } = node.frontmatter
            return (
              <div className="half-width project-showcase-description center">
                <Link to={`/project/${slug}`}>
                  <Image
                    fluid={featuredImage.childImageSharp.fluid}
                    alt={title}
                  />
                </Link>
                <p>
                  <strong>{title}</strong>
                </p>
                <p>
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
                </p>
              </div>
            )
          })}
        </div>
      </section>
      <div className="horizontal-line"></div>
      <section>
        <h2 className="center pad-bottom">Past Projects</h2>
        <div className="flex-space-between">
          {remainingProjects.map(({ node }) => {
            const { id, title, featuredImage, categories, slug,date } = node.frontmatter
            return (
              <div className="past-project" key={id}>
                <Link to={`/project/${slug}`}>
                  <Image
                    fluid={featuredImage.childImageSharp.fluid}
                    alt={title}
                  />
                  <p>{title} / {date}</p>
                  <p>
                    {categories.map((category, index) => {
                      const addSlash =
                        index !== categories.length - 1 ? "/" : ""

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
                  </p>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="center half-width">Ready to start your project?</h2>
        <div className="center">
          <Link to="/contact" className="btn btn-yellow">
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
