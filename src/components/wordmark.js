import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wordmark = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sediment-wordmark.png" }) {
        childImageSharp {
          fixed(width: 130, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Wordmark 
