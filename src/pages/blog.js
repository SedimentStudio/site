import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostListItem from "../components/blogPostListItem"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog" />
      <ul className="container mx-auto px-8 sm:px-16">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <BlogPostListItem
              title={edge.node.title}
              date={edge.node.publishedDate}
              excerpt={edge.node.excerpt.childMarkdownRemark.excerpt}
              slug={edge.node.slug} />
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog