import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import SEO from "../components/seo";

const Insurance = () => {
  const data = useStaticQuery(graphql`
    query {
      home: file(absolutePath: { regex: "/homehealth.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      walking: file(absolutePath: { regex: "/walking.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <React.Fragment>
      <SEO 
        title="Medicare provider"
        description="accepts Medicare"
      />
      <NavBar />
      <div className="insurance">
        <div className="insurancetype">
          <div>Insurance accepted (in-network)</div>
          <ul>
            <li>Medicare Part B</li>
            <li>Empire BlueCross Blue Shield</li>
            <li>Humana Medicare Advantage</li>
          </ul>
          <p>No referral required.  You should be under the care of a physician, podiatrist, or nurse practitioner.</p>
        </div>
        <Image
          fluid={data.home.childImageSharp.fluid}
          alt="home physical therapy"
          style={{
            marginBottom: 0,
            minWidth: 500
          }}
        />
      </div>
      <div className="insurance">
        <div className="insurancetype">
          <div>Private pay</div>
          <ul>
            <li>$100 per visit</li>
          </ul>
          <p>No referral required.  We provide an invoice to submit to your insurance company as needed.</p>
        </div>
        <Image
          fluid={data.walking.childImageSharp.fluid}
          alt="home physical therapy"
          style={{
            marginBottom: 0,
            minWidth: 500
          }}
        />
      </div>
      <div className="questions">
        <div className="questionheader">You have questions - I have answers</div>
        <div className="question">May I see a physical therapist directly without a referral from a doctor?</div>
        <div className="answer">Yes.  According to New York state law, a physical therapist with three years of experience may treat a patient without a referral for 10 visits or 30 days, whichever comes first. However, your health plan or insurer may not cover physical therapy without a referral from a physician, dentist, podiatrist, or nurse practitioner.</div>
        <div className="question">Does my insurance cover physical therapy visits in the home?</div>
        <div className="answer">Medicare Part B and some other insurance plans cover physical therapy visits in the home. You don't need to be homebound to receive this benefit.</div>
        <div className="question">Does my health care provider need to accept or be in-network with my Medicare supplement or Medigap insurance plan?</div>
        <div className="answer">No.  Network rules do not apply to Medicare supplement or Medigap insurance plans.  These plans coordinate payment of services with Medicare, as long as the provider accepts Medicare.</div>
        <div className="question">Why should I opt for physical therapy in my home instead of at a facility?</div>
        <ul className="answer">
          <li>Convenient</li>
          <li>Effective</li>
          <li>One on one care every visit</li>
          <li>Same cost</li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Insurance;