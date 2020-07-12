import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Wordmark from "../components/wordmark"

const Header = ({ siteTitle }) => (
  <header className="container mx-auto p-10 flex flex-row items-center">
    <Link to="/" className="text-3xl mr-auto">
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
