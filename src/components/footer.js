import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sediment-icon.png" }) {
        childImageSharp {
          fixed(width: 40, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer className="container-fluid w-full mx-auto bg-gray-600 text-white">
      <div className="container px-8 py-8 sm:px-10">
        <div>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </div>
        <div className="mt-2">
          © Sediment {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer