import React from "react";
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { rhythm } from "../utils/typography";
import SEO from "../components/seo";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      homeimage: file(absolutePath: { regex: "/home.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <React.Fragment>
      <SEO 
        title="Home physical therapy"
        description="Smart Moves Physical Therapy provides physical therapy in the home, and serves Queens, Nassau county, and Manhattan." 
      />
      <NavBar />
      <div>
        <div className="overview">
          <div className="overviewheader">Physical therapy in your home</div>
          <div className="overviewcaption">
            <div>Serves Queens, Nassau county, and Manhattan</div>
            <div>Accepts Medicare</div>
          </div>
        </div>
        <div className="research">
          <div>Get better quickly and conveniently</div>
          <p>Smart Moves provides high-quality, effective, evidence-based physical therapy in your home.</p>
        </div>
        <div className="homeimage">
          <div>
            <Image 
              fluid={data.homeimage.childImageSharp.fluid}
              alt="home physical therapy Floral Park, New York"
            />
          </div>
          <div className="homeimagetext">
            <div>Enhance your health, fitness, and independence</div>
            <p>Research shows no difference between physical therapy in the home and at a facility.</p>
          </div>
        </div>
        <div className="story">
          <div>
            <div>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt="fall prevention"
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <div>Our story</div>
            </div>
            <p>A physical therapist since 1999, and frustrated with the hastened care at outpatient facilities, Manju Thomas turned to home visits to thoughtfully deliver high-quality one on one care.  She enjoys working with the older adult population to promote function, and return to activity.  She received her Master’s in Physical Therapy from Washington University in St. Louis (#1 ranked physical therapy school). She is licensed in New York, and is Otago trained for fall prevention.</p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About;