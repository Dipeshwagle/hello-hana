const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const projectTemplate = path.resolve("src/templates/project.js")

  const result = await graphql(`
    {
      posts: allMdx(filter: { fields: { source: { eq: "posts" } } }) {
        edges {
          node {
            body
            id
            frontmatter {
              path
              title
              tags
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
      projects: allMdx(filter: { fields: { source: { eq: "projects" } } }) {
        edges {
          node {
            body
            id
            frontmatter {
              path
              title
              tags
              slug
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
      tagsGroup: allMdx(
        filter: { fields: { source: { eq: "projects" } } }
        limit: 2000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.posts.edges
  // Create post detail pages
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        next,
        previous,
      },
    })
  })

  const projects = result.data.projects.edges

  // Create project detail pages
  projects.forEach(({ node, next, previous }) => {
    createPage({
      path: `/project/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    {
      title: "Laura Dershaw Skincare",
      description: "Squarespace, Beauty",
      image: "lauraGIF",
      alt: "Laura Dershaw Skincare Squarespace Website Preview",
      url: "https://lauradershawskincare.com",
      showUrl: "lauradershawskincare.com",
    },
    {
      title: "Kelly Waldeck Renewed",
      description: "Squarespace, Beauty",
      image: "kellyGIF",
      alt: "Kelly Waldeck Squarespace Website Preview",
      url: "https://kellywaldeckrenewed.com",
      showUrl: "kellywaldeckrenewed.com",
    },
    {
      title: "Frauke Seewald",
      description: "Wordpress, Design",
      image: "fraukeGIF",
      alt: "Frauke Seewald Wordpress Website Preview",
      url: "https://fraukeseewald.com",
      showUrl: "fraukeseewald.com",
    },
    {
      title: "Lindsi Hollend",
      description: "Shopify, Photography",
      image: "lindsiGIF",
      alt: "Lindsi Hollend Shopify Website Preview",
      url:
        "https://www.hanadrdla.com/blog/featured-project-lindsi-hollend-photography",
      showUrl: "read more",
    },
    {
      title: "Reliable Aerospace World Services",
      description: "Wordpress, Aviation",
      image: "rawsGIF",
      alt: "Reliable Aerospace World Services Wordpress Website Preview",
      url: "https://reliableaerospace.com",
      showUrl: "reliableaerospace.com",
    },
    {
      title: "CodeOp",
      description: "Wordpress, Education",
      image: "codeopGIF",
      alt: "CodeOp Wordpress Website Preview",
      url: "https://codeop.tech/",
      showUrl: "codeop.tech",
    },
    {
      title: "Simply Pure Skin Studio",
      description: "Shopify, Beauty",
      image: "spssGIF",
      alt: "Simply Pure SKin Studio Shopify Website Preview",
      url: "https://simplypureskinstudio.com",
      showUrl: "simplypureskinstudio.com",
    },
    {
      title: "The Backcountry Hut Company",
      description: "Squarespace, Construction",
      image: "bhcGIF",
      alt: "The Backcountry Hut Company Squarespace Website Preview",
      url: "https://www.thebackcountryhutcompany.com/",
      showUrl: "thebackcountryhutcompany.com",
    },
    {
      title: "Sense of Self Counselling",
      description: "Squarespace, Counselling",
      image: "soscGIF",
      alt: "Sense of Self Counselling Squarespace Website Preview",
      url: "https://senseofselfcounselling.com/",
      showUrl: "senseofselfcounselling.com",
    },
    {
      title: "Colibri Bulk Food Store",
      description: "Shopify, Food",
      image: "colibriGIF",
      alt: "Colibri Shopify Website Preview",
      url: "https://colibribcn.com/",
      showUrl: "colibribcn.com",
    },
    {
      title: "Wild Cookie",
      description: "Wix, Entertainment",
      image: "wildcookieGIF",
      alt: "Wild Cookie Wix Website Preview",
      url: "https://www.wildcookie.eu/",
      showUrl: "wildcookie.eu",
    },
    /*
    {
      title: "Simona Cellar",
      description: "Custom, Design",
      image: "simonaGIF",
      alt: "Simona Cellar Wordpress Website Preview",
      url: "https://simonacellar.com/",
      showUrl: "simonacellar.com",
    },*/
    {
      title: "Tax on Track Pro",
      description: "Wordpress, Software",
      image: "totpGIF",
      alt: "Tax on Track Pro Wordpress Website Preview",
      url: "https://taxontrackpro.com/",
      showUrl: "taxontrackpro.com",
    },
  ]

  projects.forEach(project => {
    const node = {
      title: project.title,
      description: project.description,
      image: project.image,
      alt: project.alt,
      url: project.url,
      showUrl: project.showUrl,
      id: createNodeId(`Project-${project.title}`),
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    }
    actions.createNode(node)
  })
}
