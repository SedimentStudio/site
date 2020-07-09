import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Service from "../components/service"
import Image from "../components/image"
import SEO from "../components/seo"

const Hr = styled.hr.attrs({
  className: "border-gray-800"
})``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="grid grid-cols-2 gap-6 container mx-auto py-12">
      <div className="text-3xl">Full service design and development studio. Your friendly neighborhood group of software experts who want to help.</div>
      <div style={{ maxWidth: `500px` }}>
        <Image />
      </div>
    </section>
    <section className="container-fluid py-12" style={{backgroundColor: "#EFEBE9"}}>
      <div className="container mx-auto">
      <h2 className="text-3xl mb-10">Our Services</h2>
      <Hr />
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
      <Hr />
      <Service
        title="UI/UX Design"
        description="We bring your idea to light by creating renditions of your product that unify stakeholders and test concepts with users."
        list={[
          "Wireframes",
          "High Fidelity Mockups",
          "Interactive Prototypes",
          "Graphic Design",
        ]}
      />
      <Hr />
      <Service
        title="Software Engineering"
        description="We build your product to last, using the latest tools & techniques to ensure your software supports growth at global scale."
        list={[
          "Full Stack Engineering",
          "Platform & DevOps Engineering",
          "Cloud Architecture",
          "Desktop Applications",
        ]}
      />
      <Hr />
      <Service
        title="Marketing &amp; Copywriting"
        description="We bring your product to the world with a focused marketing strategy driven by data and cogent storytelling."
        list={[
          "SEO",
          "Blogs",
          "Social Media Marketing",
          "Analytics",
        ]}
      />
      <Hr />
      <Service
        title="Consulting"
        description="We help your team move faster with more situational awareness, agility, and certainty."
        list={[
          "Performance & Security Audit",
          "Agile Implementation",
          "Design Thinking",
          "Software Architecture",
        ]}
      />
      <Hr />
      </div>
    </section>
  </Layout>
)

export default IndexPage
