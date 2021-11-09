import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hana: file(relativePath: { eq: "Hana-web-developer-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test1: file(relativePath: { eq: "Client-Testimonials-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test2: file(relativePath: { eq: "Client-Testimonials-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
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

  return (
    <Layout>
      <SEO title="Services" image={data.site.siteMetadata.image} />

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
            <h1 className="heading-small">Services</h1>
            <p className="h2"style={{ margin: "0" }}>
              E-commerce stores that stand out from your competitors
            </p>
          </div>
        </div>
      </section>
      <div className="horizontal-line"></div>
      <section>
        <div className="flex-space-between text-indent">
          <div className="col-3">
            <h2>Reasons we should work together</h2>
          </div>
          <div className="col-3">
            <h3 className="underline ul-purple">Quality Work</h3>
            <p>
              My knowledge of web design and <nobr>e-commerce</nobr> will show
              your customers that you're a trusted brand.
            </p>
            <br />
            <br />

            <h3 className="underline ul-blue">Clear Communication</h3>
            <p>
              We'll work through a process together to make sure you love your
              new website and are proud to show if off.
            </p>
          </div>
          <div className="reasons col-3">
            <h3 className="underline ul-yellow">Coding Knowledge</h3>
            <p>
              I create solutions that can't be done without code, making for a
              more unique experience for your visitors.
            </p>
            <br />
            <br />

            <h3 className="underline ul-purple">Effortless</h3>
            <p>
              After initial discussions, trust me to come back with something
              that makes your dreams come true.
            </p>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="hidden">
          Shopify Development Services
        </h2>
        <div className="flex-space-between">
          <div className="box-wide box-purple" id="service-full">
            <div className="box-service-content">
              <h3>Shopify Design & Development</h3>
              <div class="service-box-inner">
                <div>
                <p>Stand out from your competitors with a store that proudly represents your brand. This is a start to finish process that includes adding and organizing all your products, installing apps, store design and build, and final touches to prepare you to launch your new website.<br /><br />

                <strong>Timeline:</strong> 4-6 weeks</p>
                <div className="price">
                  <p>
                    Starting at <br />
                    <span className="dollar">$6000</span>{" "}
                    <span className="accent">
                      {" "}
                      USD
                    </span>
                  </p>
                </div>

                </div>
                <div class="service-box-right">
                <p><strong>Includes:</strong></p>
                <ul className="chevron-list-services">
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Store design customized to your brand</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Product addition & organization</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> About, FAQ, Contact & policy pages
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Shipping rates, customer emails 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> App installation & setup 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Newsletter email collection 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Shopify Maintenance guide 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="plus" /> Add-ons available 
                  </li>
                </ul>
                </div>
              </div>  

                <Link
                  to="/contact"
                  className="btn btn-purple"
                >
                  Inquire Now
                </Link>
            </div>
          </div>




          <div className="box-wide box-blue" id="service-build">
            <div className="box-service-content">
              <h3>Shopify Build (for Designers)</h3>
              <div class="service-box-inner">
                <div>
                <p>You’re a graphic designer and need someone to bring your design to life. Forget the hassle and let me build so you can deliver a higher quality product to your clients more quickly.<br /><br />

                <strong>Timeline:</strong> 2-3 weeks</p>
                <div className="price">
                  <p>
                    Starting at <br />
                    <span className="dollar">$3000</span>{" "}
                    <span className="accent">
                      {" "}
                      USD
                    </span>
                  </p>
                </div>

                </div>
                <div class="service-box-right">
                <p><strong>Includes:</strong></p>
                <ul className="chevron-list-services">
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Full theme setup</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Custom sections built</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Easily editable customizations
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Animations? Yes!
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> App installation & setup 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Detail oriented work 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Minor revisions so that it's perfect for your client! 
                  </li>

                </ul>
                </div>
              </div>  

                <Link
                  to="/contact"
                  className="btn btn-blue"
                >Inquire Now
                </Link>
            </div>
          </div>



          <div className="box-wide box-yellow" id="service-day">
            <div className="box-service-content">
              <h3>Book Me for a Day</h3>
              <div class="service-box-inner">
                <div>
                <p>A one-day intensive with my full attention. Have all your website needs completed quickly, and efficiently with the confidence that the work is done well. Be close to the process and know the full cost upfront. No need to book months in advance!<br /><br /></p>

                <div className="price">
                  <p>
                    <span className="dollar">$700</span>{" "}
                    <span className="accent">
                      {" "}
                      USD
                    </span>
                  </p>
                </div>

                </div>
                <div class="service-box-right">
                <p><strong>Perfect if:</strong></p>
                <ul className="chevron-list-services">
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You need updates done to your website</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You want training so you can make updates yourself</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You are a designer who needs guidance on Shopify
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" />  You are an agency looking for white-label services
                  </li> 
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You have questions about how to reach your customers
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You need apps installed in your store
                  </li>

                </ul>
                </div>
              </div>  

                <Link
                  to="/contact"
                  className="btn btn-yellow"
                >Inquire Now
                </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width bg-full-purple">
        <h2 className="center">Praise from Clients</h2>
          <div className="flex-space-around testimonial-images">
            <Img
              fluid={data.test1.childImageSharp.fluid}
              className="testimonials"
              alt="Screenshots of client testimonials"
            />
            <Img
              fluid={data.test2.childImageSharp.fluid}
              className="testimonials"
              alt="Screenshots of client testimonials"
            />
          </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
