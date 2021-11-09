import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Socials from "../components/socials"
import SEO from "../components/seo"
import IframeResizer from "iframe-resizer-react"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    if (window.iFrameResize) {
      setTimeout(function () {
        window.iFrameResize({
          checkOrigin: false,
          heightCalculationMethod: "taggedElement",
        })
      }, 30)
    }
  }

  return (
    <Layout>
      <SEO title="Contact" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="indent half-width">
          Let's make something great together
        </h1>
        <div className="flex-space-between">
          <div className="indent contact-hero-flex-1 mobile-left">
            <h3 className="underline ul-blue">How can I help you?</h3>
            <p className="pad-bottom">
              Tell me about the project you have in mind and I'll get back to
              you within 2 business days.
            </p>

            <h3 className="underline ul-yellow">Stay in Touch</h3>
            <Socials />
          </div>
          <div className="hero-flex-2">

          {" "}
          <IframeResizer
            src="https://hello.dubsado.com:443/public/form/view/608aa9e8fef8b96fc417dc95"
            frameborder="0"
            style={{"min-width": "100%","min-height": "100%" }}
          />

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
