import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typewriter from "../components/typewriter"
import InstagramFeed from "../components/instagramFeed"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hana: file(relativePath: { eq: "Hana-about.jpg" }) {
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
      <SEO title="About" image={data.site.siteMetadata.image} />
      <section className="about">
        <div className="flex-space-between">
          <div className="about-hero-flex-1">
            <Img
              fluid={data.hana.childImageSharp.fluid}
              className="portrait"
              alt="Portrait of Web and Shopify Developer Hana Drdla"
            />
          </div>
          <div className="about-hero-flex-2">
            <h1 className="heading-small">About</h1>
            <p className="h3"style={{ margin: "0" }}>
              Hana specializes in custom Shopify development to create websites that elevate brands to the next level.
            </p>
            <Typewriter/>
          </div>
        </div>
      </section>
      <div className="horizontal-line"></div>
      <section className="about-facts">
        <div className="flex-space-between text-indent">
          <div className="col-3">
            <h2>Some Fun Facts</h2>
            <p>My work excites me because I love being a part of helping others follow their entrepreneurial passions through good web design. When I’m not typing away at my laptop, I am out in nature or exploring the city with a tea in hand. You can find me somewhere between the Americas and Asia being what they call, a digital nomad.</p>
          </div>
          <div className="col-3 center">
            <h3 className="underline ul-purple fact">Favourite Drink</h3>
            <p className="cursive">chai tea</p>
            <br />  
            <h3 className="underline ul-purple fact">Recent Adventure</h3>
            <p className="cursive">rainy hike in BC</p>
            <br />
            <h3 className="underline ul-purple fact">Preferred Wheels</h3>
            <p className="cursive">bike all day</p>
            <br />
          </div>
          <div className="col-3 center">
            <h3 className="underline ul-purple fact">Cats or Dogs</h3>
            <p className="cursive">cats 100%</p>
            <br />  
            <h3 className="underline ul-purple fact">Sunday Activity</h3>
            <p className="cursive">day trip!</p>
            <br />
            <h3 className="underline ul-purple fact">Last Meal</h3>
            <p className="cursive">One Dim Sum</p>
            <br />
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      <section>
        <h2 className="center with-sub">Want to keep up with me?</h2>
        <p className="center subtitle">Catch me hanging out on Instagram <br />
        
        <OutboundLink href="https://www.lunatemplates.co"
          target="_blank"
          rel="Hanadrdla.com"
          alt="Instagram"
          aria-label="Hana's Instagram"
          className="underline ul-yellow"
          style={{ textDecoration: "none" }}
        >@hanerdoo</OutboundLink></p>

        <InstagramFeed />
      </section>

      <div className="horizontal-line"></div>

      <section>
        <h2 className="center half-width">
          Ready to take your business to the next level?
        </h2>
        <div className="center">
          <Link to="/services" className="btn btn-blue">
            See my services
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
