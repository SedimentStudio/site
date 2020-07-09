import React from "react"

import Layout from "../components/layout"
import Service from "../components/service"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="grid grid-cols-2 gap-6">
      <div className="text-3xl">Full service design and development studio. Your friendly neighborhood group of software experts who want to help.</div>
      <div style={{ maxWidth: `500px` }}>
        <Image />
      </div>
    </section>
    <section>
      <h2 className="text-3xl">Our Services</h2>
      <Service
        title="Product Strategy"
        description="We validate your idea with future customers, de-risk your roadmap, and set the stage for the development of a product that delights users."
        list={[
          "Ideation & Concepting",
          "User Interviews",
          "Technical Assessment",
          "Roadmap Planning",
        ]}
      />
    </section>
  </Layout>
)

export default IndexPage
