import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import loadable from "@loadable/component"

library.add(fab, faEnvelope, faChevronRight)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const Tawk_API = "8f0f3f5179ce8a7a218213415f0bae5c6a6bb876" || {}

  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0]
  s1.async = true
  s1.src = "https://embed.tawk.to/5f1180367258dc118bee6d1f/default"
  s1.charset = "UTF-8"
  s1.setAttribute("crossorigin", "*")
  s0.parentNode.insertBefore(s1, s0)

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <header>
        <Helmet>
          {/* <script
            async
            data-uid="0705839d87"
            src="https://hanadrdla.ck.page/0705839d87/index.js"
          ></script> */}
          <script src="/path/to/flickity.pkgd.min.js"></script>
          <script
            async
            data-uid="2ddd36003f"
            src="https://hanadrdla.ck.page/2ddd36003f/index.js"
          ></script>
          <script
            type="application/javascript"
            src="https://sdki.truepush.com/sdk/v2.0.2/app.js"
            async
          ></script>
        </Helmet>

        <div className="navigation-bar">
          <div className="v-center">
            <Link to="/" title="Home Page">
              <Img
                fluid={data.logo.childImageSharp.fluid}
                className="logo"
                loading="eager"
              />
            </Link>
          </div>

          <div className="v-center">
            <nav>
              <ul className={`nav-links ${isOpen ? "menu-show" : ""}`}>
                <li className="hidden-large">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/shopify-course">Shopify Course</Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="btn-contact"
                    title="Contact"
                    alt="Contact"
                  >
                    <FontAwesomeIcon icon="envelope" />
                  </Link>
                </li>
              </ul>
              <div
                className={`burger ${isOpen ? "toggle" : ""}`}
                onClick={toggleMenu}
                onKeyDown={toggleMenu}
                role="button"
                tabIndex={0}
                aria-label="Menu"
              >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </nav>
          </div>
        </div>

        <span className="grid-v">
          <span className="vertical-line grid-v-1"></span>
          <span className="vertical-line grid-v-2"></span>
          <span className="vertical-line grid-v-3"></span>
        </span>
      </header>
      <div className="horizontal-line line-nav"></div>
    </div>
  )
}

export default Header
