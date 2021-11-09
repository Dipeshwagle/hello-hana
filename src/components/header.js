import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faEnvelope, faChevronRight, faPlus)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      <div className="announcement-bar">
        Book Me for a Day! —{" "}
        <Link to="/services#service-day">
          <span className="hf">Learn More</span>
        </Link>
      </div>
      <header>
        <Helmet>
          <script src="/path/to/flickity.pkgd.min.js"></script>
          <script
            async
            data-uid="2ddd36003f"
            src="https://hanadrdla.ck.page/2ddd36003f/index.js"
          ></script>
          <meta
            name="p:domain_verify"
            content="0974d7fe5014df68fab4e62ed3a652d7"
          />
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
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
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
          {/*<span className="vertical-line grid-v-2"></span>*/}
          <span className="vertical-line grid-v-3"></span>
        </span>
      </header>
      <div className="horizontal-line line-nav"></div>
    </div>
  )
}

export default Header
