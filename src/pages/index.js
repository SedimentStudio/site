import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Service from "../components/service"
import Image from "../components/image"
import SEO from "../components/seo"

const Hr = styled.hr.attrs({
  className: "border-gray-800"
})``

const SectionHeading = styled.h2.attrs({
  className: "text-3xl mb-10"
})``

const IndexPage = () => {
  // Don't forget to set the size of your image in
  // fluid(maxWidth: 300, quality: 100) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        relativeDirectory: { eq: "logos" }})
      {
        edges {
          node {
            childImageSharp {
              fixed(width: 200, quality: 100) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }`);

  return (
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
          <SectionHeading>Our Services</SectionHeading>
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
      <section className="container mx-auto py-12">
        <SectionHeading>We've Worked With</SectionHeading>
        <div className="grid grid-cols-4 gap-2 items-center" style={{justifyItems: "center"}}>
          {allFile.edges.map((edge, index) => <Img key={index} fixed={edge.node.childImageSharp.fixed} />)}
        </div>
      </section>
      <section className="container-fluid py-12" style={{backgroundColor: "#EFEBE9"}}>
        <div className="container mx-auto">
          <SectionHeading>Contact Us</SectionHeading>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage
