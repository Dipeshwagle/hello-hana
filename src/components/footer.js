import React from "react"
import { Link } from "gatsby"
import Socials from "./socials"

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-left">
        <p>New to Shopify, DIYing your site?</p>
        <Link to="/blog/11-mistakes-shopify-beginners-make">
          <p className="footer-blog-title-left">
            11 Mistakes that Shopify Beginners Make
          </p>
        </Link>
        <br />
        <Link to="/client-portal">
          <p>
            Client Portal
          </p>
        </Link>
      </div>

      <div className="footer-right">
        <p>Web Designer, looking for inspiration?</p>
        <Link to="/blog/unique-best-shopify-stores">
          <p className="footer-blog-title-right">
            17 Unique E-Commerce Stores Using Shopify
          </p>
        </Link>
        <br />
        <Socials />
      </div>
    </div>

  </footer>
)

export default Footer
