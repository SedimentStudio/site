import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Wordmark from "../components/wordmark"

const Header = () => (
  <header className="container mx-auto px-8 py-10 flex flex-row items-center sm:px-10">
    <Link to="/" className="flex text-3xl mr-auto">
      <Wordmark />
    </Link>
    <Link to="/#contact">
      Contact Us
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
