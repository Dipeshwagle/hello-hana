import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import SEO from "../components/seo"
import Flickity from "react-flickity-component"
import "../styles/flickity.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Marquee from "../components/marquee"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hana: file(relativePath: { eq: "Hana-web-developer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          image
        }
      }
    }
  `)

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Hana Drdla",
    description: data.site.siteMetadata.description,
    url: data.site.siteMetadata.siteUrl,
    image: "",
    sameAs: [
      "https://twitter.com/hdrdla",
      "https://www.linkedin.com/in/hdrdla/",
      "https://www.hanadrdla.com/",
      "https://www.facebook.com/groups/WomenOnShopify/",
    ],
    jobTitle: "Web & Shopify Developer",
  }

  const flickityOptions = {
    autoPlay: true,
    wrapAround: true,
  }
  return (
    <Layout>
      <SEO
        title="Home"
        schemaMarkup={schema}
        image={data.site.siteMetadata.image}
      />

      <section className="home">
        <div className="flex-space-between">
          <div className="hero-flex-1">
            <p className="large">Hi, I'm Hana. I specialize in</p>
            <h1>
              Strategic website design & development for brands on Shopify
            </h1>
            <Link to="/services" className="btn btn-purple">
              Learn More
            </Link>
          </div>
          <div className="hero-flex-2">
            <Img
              fluid={data.hana.childImageSharp.fluid}
              className="portrait"
              alt="Portrait of Web and Shopify Developer Hana Drdla"
            />
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section id="services">
        <p className="center h2">How can I help you?</p>
        <h2 className="hidden">Websites that Convert</h2>
        <div className="flex-space-between home">
          <div className="box box-purple box-home">
            <div className="box-content">
              <h3 className="h3">I need a website</h3>
              <h3 className="hidden">
              Shopify Website Design & Development
              </h3>
              <p>
                Custom websites that show your clients the quality and value of
                your work.
              </p>
              <div className="center">
                <Link
                  to="/services#service-full"
                  className="btn btn-purple"
                  onClick={e => {
                    trackCustomEvent({
                      category: "Custom Button",
                      action: "Click",
                      label: "Home Service - Website",
                    })
                  }}
                >
                  Open Shop
                </Link>
              </div>
            </div>
          </div>

          <div className="box box-blue box-home">
            <div className="box-content">
              <h3 className="h3">Build my design</h3>
              <h3 className="hidden">Custom Shopify Website Development</h3>
              <p>
                Your design, my build. Graphic designers, I’ll bring your design to life on Shopify.
              </p>
              <div className="center">
                <Link
                  to="/services#service-build"
                  className="btn btn-blue"
                  onClick={e => {
                    trackCustomEvent({
                      category: "Custom Button",
                      action: "Click",
                      label: "Home Service - Shopify",
                    })
                  }}
                >
                  Let's Team Up
                </Link>
              </div>
            </div>
          </div>

          <div className="box box-yellow box-home">
            <div className="box-content">
              <h3 className="h3">I want to learn</h3>
              <h3 className="hidden">
              Shopify DIY Resources & Course
              </h3>
              <p>Resources for web designers who want to offer Shopify website services.
              </p>
              <div className="center">
                  <OutboundLink href="https://www.lunatemplates.co"
                    target="_blank"
                    rel="Hana Drdla"
                    alt="Luna Templates "
                    aria-label="Shopify templates and courses"
                    className="btn btn-yellow"
                    onClick={e => {
                    trackCustomEvent({
                      category: "Custom Button",
                      action: "Click",
                      label: "Home Service - Luna",
                    })
                  }}
                  >Learn Shopify</OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="center with-sub">Featured Projects</h2>
        <p className="center subtitle">Unique Shopify stores that stand out</p>
          <Marquee />
        <div className="center">
          <Link to="/projects" className="btn btn-purple">
            See all projects
          </Link>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="featured-title indent">Happy Customers</h2>
        <Flickity
          className={"main-carousel testimonial-slider"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >

          <div className="carousel-cell">
            <p className="quote">
              A completely <span className="highlight hl-purple">brilliant and professional</span> service that I am so happy I went with. Hana <span className="highlight hl-purple">TRANSFORMED</span> our website completely.
            </p>
            <p className="center">
              Naama Blonder, <em>Smart Density</em>
            </p>
          </div>


          <div className="carousel-cell">
            <p className="quote">
              Working with Hana has been{" "}
              <span className="highlight hl-yellow">
                a brilliant experience
              </span>{" "}. 
              She understood what I wanted out of my website straight away. She
              was diligent in her work and{" "}
              <span className="highlight hl-yellow">
                delivered exactly what I wanted.
              </span>
            </p>
            <p className="center">
              Dr. Hulya Hooker, <em>Sense of Self Counselling</em>
            </p>
          </div>

          <div className="carousel-cell">
            <p className="quote">
              It was{" "}
              <span className="highlight hl-blue">an absolute pleasure</span>{" "}
              working with Hana. She designed a beautiful website and online
              store for me. She listened to my needs and preferences and kept
              the lines of communication open throughout the project.
            </p>
            <p className="center">
              Carol Murphy, <em>Simply Pure Skin Studio</em>
            </p>
          </div>

        </Flickity>



      </section>

    </Layout>
  )
}

export default IndexPage
