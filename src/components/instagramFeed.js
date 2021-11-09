import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    {
      photos: allInstaNode(limit: 6,sort: {fields: timestamp,order: DESC}) {
        edges {
          node {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="instagram-feed">
        {data.photos.edges.map(({ node }) => {
          const { id, localFile, title } = node
          if(!localFile) return null;
          return (
            <Image
              style={{ marginLeft: "15px" }}
              fixed={localFile.childImageSharp.fixed}
              alt={title}
              key={id}
            />
          )
        })}
    </div>
  )
}

export default InstagramFeed