import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="container mx-auto px-10 py-5 flex flex-row items-center">
    <Link to="/" className="text-3xl mr-auto">
      {siteTitle}
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
