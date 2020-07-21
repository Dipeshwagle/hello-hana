/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

function Wrapper(props) {
  return (
    <div
      style={{
        width: `80%`,
        margin: `auto`,
        position: `relative`,
      }}
    >
      {props.children}
    </div>
  )
}

function Layout(props) {
  // console.log(props)

  return (
    <>
      <Header siteTitle="Hana Drdla" />
      <Wrapper>
        <main>{props.children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
