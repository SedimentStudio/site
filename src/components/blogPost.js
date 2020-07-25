import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`

const BlogPost = props => {
  // Custom formatting options for rendering data from Contentful
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
      "embedded-entry-block": node => {
        if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
          const code = node.data.target.fields.code["en-US"]
          return <pre className="mb-4 p-4 bg-gray-200 rounded">{code}</pre>
        }
      },
      "embedded-entry-inline": node => {
        if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
          const code = node.data.target.fields.code["en-US"]
          return <pre className="mb-4">{code}</pre>
        }
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl mb-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl mb-4">{children}</h2>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal">{children}</ol>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote className="ml-4 mb-4 pl-4 border-l-4 border-gray-400">{children}</blockquote>,
      [BLOCKS.HR]: (node, children) => <hr className="border-gray-800 m-8" />,
      [INLINES.HYPERLINK]: (node, next) => {
        return <a className="underline" href={node.data.uri}>{node.content[0].value}</a>
      }
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <div className="container mx-auto px-8 mb-8 sm:px-16">
        <h1 className="text-3xl">{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>
        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="mx-auto my-10 w-4/5 "
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </div>
    </Layout>
  )
}

export default BlogPost