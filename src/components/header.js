import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Wordmark from "../components/wordmark"

const Header = () => (
  <header className="container mx-auto px-8 py-10 flex flex-row items-center space-x-6 sm:space-x-8 sm:px-16">
    <Link to="/" className="flex text-3xl mr-auto">
      <Wordmark />
    </Link>
    <Link to="/blog">
      Blog
    </Link>
    <Link to="/#contact">
      Contact
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
