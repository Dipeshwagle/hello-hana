import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarquee from "react-fast-marquee"


const Marquee = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: { fields: { source: { eq: "projects" } } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 6
      ) {
        edges {
          node {
            id
            frontmatter {
              featuredImage {
                childImageSharp {
                  fixed(height: 320) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <ReactMarquee>{data.projects.edges.map(({ node }) => {
        const { id, featuredImage, title } = node.frontmatter
        if(!featuredImage) return null;
        return <Image style={{marginLeft:'50px'}} fixed={featuredImage.childImageSharp.fixed} alt={title} key={id} />
      })}
      </ReactMarquee>
    </div>
  )
}

export default Marquee