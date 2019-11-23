import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import SEO from "../components/seo";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      walking2: file(absolutePath: { regex: "/walking2.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <React.Fragment>
      <SEO 
        title="Contact"
        description="Phone, fax, and email for Smart Moves Physical Therapy" 
      />
      <NavBar />
      <div className="contact">
        <div className="contactsection">
          <div className="contactheader">Contact us</div>
          <div className="contactinfo">Phone: 678-372-7972</div>
          <div className="contactinfo">Fax: 347-826-0865</div>
          <div className="contactinfo">mthomas@smartmovesphysicaltherapy.com</div>
        </div>
        <div>
          <Image
            fluid={data.walking2.childImageSharp.fluid}
            alt="home physical therapist Floral Park, New York"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact;