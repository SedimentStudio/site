// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const response = await graphql(`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   response.data.allContentfulBlogPost.edges.forEach(edge => {
//     createPage({
//       path: `/blog/${edge.node.slug}`,
//       component: path.resolve("./src/components/blogPost.js"),
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }
