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
        title="Insurance accepted"
        description="Smart Moves Physical Therapy is in-network with Medicare and Humana Medicare Advantage, and accepts all other insurances with out-of-network benefits."
      />
      <NavBar />
      <div className="insurance">
        <div className="insurancetype">
          <div className="insuranceheader">Insurance accepted</div>
          <div className="insurancenetwork">In-network</div>
          <ul className="insurances">
            <li>Medicare Part B</li>
            <li>Humana Medicare Advantage</li>
          </ul>
          <div className="insurancenetwork">Out-of-network</div>
          <ul className="insurances">
            <li>Any Medicare Advantage plan, not listed above, with out-of-network benefits</li>
          </ul>
        </div>
        <div className="img">
          <Image
            fluid={data.walking.childImageSharp.fluid}
            alt="Medicare physical therapist Floral Park, New York"
          />
        </div>
      </div>
      <div className="insurance">
        <div className="insurancetype">
          <div className="insuranceheader">Private pay</div>
          <ul className="privatepay">
            <li>$100 per visit</li>
          </ul>
        </div>
        <div className="img">
          <Image
            fluid={data.home.childImageSharp.fluid}
            alt="Humana physical therapist Floral Park, New York"
          />
        </div>
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