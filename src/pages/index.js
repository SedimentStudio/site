import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Service from "../components/service"
import TeamImage from "../components/teamImage"
import SEO from "../components/seo"

const Hr = styled.hr.attrs({
  className: "border-gray-800"
})``

const SectionHeading = styled.h2.attrs({
  className: "text-3xl mb-8"
})``

const IndexPage = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        relativeDirectory: { eq: "logos" }})
      {
        edges {
          node {
            childImageSharp {
              fixed(width: 120, quality: 100) {
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
      <SEO title="Design & Development Studio" />
      <section className="grid items-center container mx-auto pt-20 pb-32 px-8 gap-10 sm:grid-cols-3 sm:grid-rows-1 sm:grid-flow-col sm:px-10">
        <div className="row-auto w-48 mx-auto sm:m-0 sm:w-auto sm:col-start-3">
          <TeamImage />
        </div>
        <div className="row-auto text-xl text-center sm:text-left sm:text-2xl sm:col-start-1 sm:col-span-2 md:text-3xl">Full service design and development studio.<br />Your friendly neighborhood group of software experts.</div>
      </section>
      <section className="container-fluid bg-brown-50 pb-6">
        <div className="container mx-auto px-8 py-10 sm:px-10">
          <SectionHeading>Our Services</SectionHeading>
          <Hr />
          <Service
            title="UI/UX Design"
            description="We validate your idea with future customers, de-risk your roadmap, and set the stage for the development of a product that delights users. We bring your idea to light by creating renditions of your product that unify stakeholders and get concepts tested by users."
            list={[
              "Ideation & Concepting",
              "User Interviews",
              "Wireframes",
              "Interactive Prototypes",
              "Graphic Design",
            ]}
          />
          <Hr />
          <Service
            title="Software Engineering"
            description="We build your product to last, using the latest tools & techniques to ensure your software is fast and standards-compliant. Our US-based development team writes code that is secure, tested, and driven by best practices."
            list={[
              "Full Stack Development",
              "Backend Optimization",
              "Ecommerce",
              "Analytics",
              "Desktop Applications",
            ]}
          />
          <Hr />
          <Service
            title="Cloud Architecture"
            description="We deploy your product on resilient infrastructure that scales globally. Get your project shipped on a solid foundation, optimize your current cloud deployment, or migrate your on-premises software to the cloud."
            list={[
              "DevOps",
              "Site Reliability Engineering",
              "Continuous Integration & Delivery",
              "Container Infrastructure",
            ]}
          />
          <Hr />
          <Service
            title="Marketing & Copywriting"
            description="We bring your product to the world with a focused marketing strategy driven by data and cogent storytelling."
            list={[
              "Digital Marketing",
              "Branding",
              "SEO",
              "Blogs",
            ]}
          />
          <Hr />
          <Service
            title="Consulting"
            description="We help you make your next move with agility and situational awareness. Use our 30 years of combined experience to enhance your design and engineering processes."
            list={[
              "Design Thinking",
              "Performance & Security Audits",
              "Agile Implementation",
              "Technology Evaluation",
            ]}
          />
          <Hr />
        </div>
      </section>
      <section className="container mx-auto px-8 py-12 sm:px-10">
        <SectionHeading>We've Worked With</SectionHeading>
        <div className="grid grid-rows-4 items-center sm:grid-rows-1 sm:grid-cols-4 gap-4 sm:gap-0 pb-6 sm:py-8">
          {allFile.edges.map((edge, index) => <Img key={index} fixed={edge.node.childImageSharp.fixed} className="mx-auto" />)}
        </div>
      </section>
      <section id="contact" className="container-fluid bg-brown-50">
        <div className="container mx-auto px-8 py-12 sm:px-10">
          <SectionHeading>Contact Us</SectionHeading>
          <a href="mailto:hello@sedimentstudio.com" className="text-2xl">hello@sedimentstudio.com</a>
          <br />
          <a href="tel:+13235245031" className="text-2xl">+1 323 524 5031</a>
          <p className="mt-6">
            Join our community on <a href="https://discord.gg/ZrbTjsd" target="_blank" rel="noopener noreferrer" className="underline">Discord</a>, where weekly hackathons and workshops take place every Saturday at 1PM Pacific.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage
