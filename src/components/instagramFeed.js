import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    {
      photos: allInstaNode(limit: 10) {
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
    <div className="flex overflow-x-scroll flex-wrap">
        {data.photos.edges.map(({ node }) => {
          const { id, localFile, title } = node
          return (
            <Image
              style={{ marginLeft: "10px" }}
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
