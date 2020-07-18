/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="flex flex-col min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main class="flex-grow w-full">{children}</main>
      <footer className="container-fluid mx-auto bg-gray-600 text-white">
        <div className="flex container mx-auto px-8 py-8 sm:px-10">
          <a href="https://sedimentstudio.com" className="mr-auto">Sediment</a>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
