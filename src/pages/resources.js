import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const ResourcesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      laptop: file(relativePath: { eq: "Hands-laptop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sections: file(relativePath: { eq: "Shopify-sections.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      course: file(relativePath: { eq: "Shopify-course.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
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

  return (
    <Layout>
      <SEO title="Resources" image={data.site.siteMetadata.image} />
      <section className="about">
        <div className="flex-space-between">
          <div className="about-hero-flex-1">
            <Img
              fluid={data.laptop.childImageSharp.fluid}
              className="portrait"
              alt="Hands on a laptop"
            />
          </div>
          <div className="about-hero-flex-2">
            <h1 className="heading-small">Resources</h1>
            <p className="h2"style={{ margin: "0", paddingBottom: "10px" }}>
              Are you a designer that wants to design & build Shopify websites?
            </p>
            <p className="large">I've got you covered</p>
          </div>
        </div>
      </section>
      <div className="horizontal-line"></div>
      <section>
        <div className="flex-space-between text-indent">
          <div className="half-width pad-right">
            <h2>Pre-made Shopify Sections</h2>
            <p>At Luna Templates, we’re a web designer & developer duo who were tired of the cookie-cutter themes on Shopify. We offer custom premium templates that you can easily add to your client's store to help create a website that stands out from their competitors. Coming from Squarespace? Think... plugins but for Shopify! Made for web designers, these templates will speed up your workflow and help you create stand-out online experiences.<br /><br />
            Just looking for some support? check out Luna's &nbsp;
            
            <OutboundLink href="https://blog.lunatemplates.co"
                target="_blank"
                rel="Hanadrdla.com"
                alt="Luna Templates Blog"
            > blog articles</OutboundLink> and &nbsp;
            
            <OutboundLink href="https://facebook.com/groups/webdesignersonshopify"
                target="_blank"
                rel="Hanadrdla.com"
                alt="Luna Templates Blog"
            >Facebook community</OutboundLink>
            .</p>

            <OutboundLink href="https://lunatemplates.co"
                target="_blank"
                rel="Hanadrdla.com"
                alt="Luna Templates Pre-Made Shopify Section Templates"
                className="btn btn-purple"
            >Get Shopify Sections</OutboundLink>
          </div>
          <div className="half-width">
            <Img
              fluid={data.sections.childImageSharp.fluid}
              className="sections"
              alt="Screenshot of Shopify Sections"
            />
          </div>
        </div>
    </section> 

    <section>   

        <div className="flex-space-between text-indent">
          <div className="half-width pad-right">
            <h2>Shopify Course for Web Designers</h2>
            <p>At Luna Templates, we’re putting some together a comprehensive course for web designers on Shopify. Learn how to get started, and how to level up your services to offer higher value to your clients, and to charge more for your projects. No one likes being overworked! </p> 
            <p><span className="accent purple-font">Coming Soon </span> <br />Sign up for our email list at Luna Templates to get an exclusive discount when the courses are ready.</p>

            <OutboundLink href="https://lunatemplates.co/pages/shopify-course-for-web-designers"
                target="_blank"
                rel="Hanadrdla.com"
                alt="Luna Templates Shopify Course for Web Designers"
                className="btn btn-blue"
            >Get an early bird discount</OutboundLink>
          </div>
          <div className="half-width">
            <Img
              fluid={data.course.childImageSharp.fluid}
              className="portrait"
              alt="Shopify Course Screen"
            />
          </div>
        </div>

      </section>

      <div className="horizontal-line"></div>

      <section>
        <h2 className="center half-width">
          Are you a designer that wants to collaborate on a Shopify website?
        </h2>
        <div className="center">
          <Link to="/services#service-build" className="btn btn-blue">
            See how I can help
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ResourcesPage
