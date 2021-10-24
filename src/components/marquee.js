import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarquee from "react-fast-marquee"


const Marquee = () => {
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
              featuredImage {
                childImageSharp {
                  fixed(width: 200,height: 200) {
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
        return <Image style={{marginLeft:'10px'}} fixed={featuredImage.childImageSharp.fixed} alt={title} key={id} />
      })}
      </ReactMarquee>
    </div>
  )
}

export default Marquee
