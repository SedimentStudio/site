import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="container mx-auto py-5 mb-5 flex flex-row items-center">
    <h1 className="text-4xl mr-auto">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
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
