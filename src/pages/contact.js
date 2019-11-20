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
        title="Floral Park, New York"
        description="Queens, Nassau Count, and Manhattan" 
      />
      <NavBar />
      <div className="contact">
        <div>
          <div className="contactheader">Contact us</div>
          <div className="contactinfo">Phone: 678-372-7972</div>
          <div className="contactinfo">Fax: 347-826-0865</div>
          <div className="contactinfo">mthomas@smartmovesphysicaltherapy.com</div>
        </div>
        <Image
          fluid={data.walking2.childImageSharp.fluid}
          alt="home physical therapy"
          style={{
            marginBottom: 0,
            minWidth: 500
          }}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact;