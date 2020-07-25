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
      allFile(
        sort: { fields: [name] },
        filter: { relativeDirectory: { eq: "logos" }}
      ) {
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
      <section className="grid items-center container mx-auto pt-20 pb-32 px-8 gap-10 sm:grid-cols-3 sm:grid-rows-1 sm:grid-flow-col sm:px-16">
        <div className="row-auto w-48 mx-auto sm:m-0 sm:w-auto sm:col-start-3">
          <TeamImage />
        </div>
        <div className="row-auto text-xl text-center sm:text-left sm:text-2xl sm:col-start-1 sm:col-span-2 md:text-3xl">Full service design and development studio.<br />Your friendly neighborhood group of software experts.</div>
      </section>
      <section className="container-fluid bg-brown-50 pb-6">
        <div className="container mx-auto px-8 py-10 sm:px-16">
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
              "User Testing",
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
              "Content Management Systems",
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
              "Product and Program Management",
              "Design Thinking",
              "Performance & Security Audits",
              "Agile Implementation",
              "Technology Evaluation",
            ]}
          />
          <Hr />
        </div>
      </section>
      <section className="container mx-auto px-8 py-12 sm:px-16">
        <SectionHeading>We've Worked With</SectionHeading>
        <div className="grid grid-rows-4 grid-cols-2 items-center pb-6 sm:grid-rows-2 md:grid-cols-4 gap-8 md:col-gap-0 md:row-gap-14 md:py-8">
          {allFile.edges.map((edge, index) => <Img key={index} fixed={edge.node.childImageSharp.fixed} className="mx-auto" />)}
        </div>
      </section>
      <section id="contact" className="container-fluid bg-brown-50">
        <div class="text-gray-700 body-font relative">
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=los%20angeles%2C%20ca&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{"filter": "grayscale(1) contrast(1.2) opacity(0.4)"}}>
            </iframe>
          </div>
          <div class="container px-5 py-24 mx-auto flex">
            <form name="contact" method="POST" data-netlify="true" class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mr-auto md:ml-10 w-full mt-10 md:mt-0 relative z-10">
              <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font">Contact Us</h2>
              <p class="leading-relaxed mb-5 text-gray-600">We'd love to hear about what you're working on.</p>
              <input name="email" class="bg-white rounded border border-gray-400 focus:outline-none focus:border-gray-600 text-base px-4 py-2 mb-4 transition-all duration-200" placeholder="Your email address" type="email" />
              <textarea name="message" class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-gray-600 text-base px-4 py-2 mb-4 resize-none transition-all duration-200" placeholder="Message"></textarea>
              <button type="submit" class="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg transition duration-200">Send</button>
              <p class="text-xs text-gray-500 mt-3">We promise to not share your email address with anyone else.</p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage
