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
import InstagramFeed from "../components/instagramFeed"
import Typewriter from "../components/typwriter"

import fraukeGIF from "../gifs/Frauke-Seewald-Website.gif"
import soscGIF from "../gifs/Sense-of-Self-Counselling-Website.gif"

const IndexPage = () => {
  const flickityOptions = {
    autoPlay: true,
    wrapAround: true,
  }

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
            <Typewriter/>
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
              <h3 className="hidden">Shopify Website Design & Development</h3>

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
                Your design, my build. Graphic designers, I’ll bring your design
                to life on Shopify.
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
              <h3 className="hidden">Shopify DIY Resources & Course</h3>
              <p>
                Resources for web designers who want to offer Shopify website
                services.
              </p>
              <div className="center">
                <OutboundLink
                  href="https://www.lunatemplates.co"
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
                >
                  Learn Shopify
                </OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <div id="feature"></div>
        <h2 className="featured-title indent">Featured Projects</h2>

        <Flickity
          className={"main-carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div className="carousel-cell">
            <div className="flex-space-between">
              <div className="testimonial v-center">
                <blockquote className="quote-home">
                  Hana is great to work with - she understands quickly, thinks
                  ahead and provides valuable ideas and feedback and provides
                  results with high quality. I really enjoy working with Hana!
                </blockquote>
              </div>

              <div className="feature-screen v-center">
                <img
                  src={fraukeGIF}
                  alt="Frauke Seewald Website Preview"
                  className="portrait"
                />
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="flex-space-between">
              <div className="testimonial v-center">
                <blockquote className="quote-home">
                  Working with Hana has been a brilliant experience. She
                  understood what I wanted out of my website straight away. She
                  was diligent in her work and delivered exactly what I wanted.
                </blockquote>
              </div>

              <div className="feature-screen v-center">
                <img
                  src={soscGIF}
                  alt="Sense of Self Counselling Website Preview"
                  className="portrait"
                />
              </div>
            </div>
          </div>
        </Flickity>
        <div className="center">
          <Link to="/projects" className="btn btn-purple">
            See all projects
          </Link>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <div className="blue-bg">
          <h2>The Complete Shopify Course</h2>
          <div className="course-invite">
            <h3 className="large move-up">
              Learn to building an <nobr>e-Commerce</nobr> store that that
              attracts your ideal customer
            </h3>
            <br />
            <p>
              I’m sharing with you step-by-step how to build your e-commerce
              business on Shopify.
            </p>
            <br />
            <p>
              Follow along and you’ll be launching your online store in no time.
              No developer needed.
            </p>
          </div>
          <div className="counter-list">
            <ul>
              <li className="counter">
                <span>1</span>Watch
              </li>
              <li className="counter">
                <span>2</span>Build
              </li>
              <li className="counter">
                <span className="bg-yellow">3</span>Earn
              </li>
            </ul>
          </div>
          <a
            href="/shopify-course"
            className="btn btn-yellow bg-trans hover-blue"
            onClick={e => {
              trackCustomEvent({
                category: "Custom Button",
                action: "Click",
                label: "Home Shopify Course Feature",
              })
            }}
          >
            Get the details
          </a>
        </div>
      </section>
      <section>
        <Marquee />
      </section>
      <section>
        <InstagramFeed />
      </section>
    </Layout>
  )
}

export default IndexPage
