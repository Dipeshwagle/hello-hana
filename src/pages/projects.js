import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { styled, keyframes } from '@stitches/react';
import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Categories from "../components/categories"



const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const TooltipContent = styled(Tooltip.Content, {
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
});

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: { fields: { source: { eq: "projects" } } }
        sort: { order: DESC, fields: frontmatter___date }
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

  return (
    <Layout>
      <SEO title="Projects" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="indent">Recent Projects</h1>
        <p className="large project-intro indent">
          Creating impressive and memorable websites that will leave a lasting
          impression on your customers and make you more sales. I promise you
          clean and engaging design, thoughtful strategy and good work.
        </p>
        <div className="flex-space-between project-showcase text-indent">
          {firstSixProjects.map(({ node }) => {
            const { title, featuredImage, categories, slug } = node.frontmatter
            return (
              <div className="project-feature">
                <Link to={`/project/${slug}`}>
                  {featuredImage && (
                    <Image
                      fluid={featuredImage.childImageSharp.fluid}
                      alt={title}
                      className="project-feature-image"
                    />
                  )}

                  <p className="project-grid-title">
                    <strong>{title}</strong>{" "}
                    <span
                      style={{
                        float: "right",
                        paddingRight: "20px",
                        fontSize: "2.5rem",
                      }}
                    >
                      →
                    </span>
                  </p>
                  <p>
                    <Categories categories={categories} />
                  </p>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h2 className="full-width-title center">Past Projects</h2>
        <div className="project-list">
          {remainingProjects.map(({ node }) => {
            const {
              id,
              title,
              featuredImage,
              categories,
              slug,
              date,
            } = node.frontmatter
            return (
              <Tooltip.Root delayDuration={100}>
                <Tooltip.Trigger asChild>
                  <div className="project-list-item" key={id}>
                    <Link to={`/project/${slug}`}>
                      <p>{title}</p>
                      <p>{date}</p>
                      <p>
                        <Categories categories={categories} />
                      </p>
                    </Link>
                  </div>
                </Tooltip.Trigger>
                <TooltipContent style={{
                  height: 250,
                  width: 250
                }}>
                  <Image
                    fluid={featuredImage.childImageSharp.fluid}
                    alt={title}
                    className="project-feature-image"
                  />
                </TooltipContent>
              </Tooltip.Root>
            )
          })}
        </div>
      </section>

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
