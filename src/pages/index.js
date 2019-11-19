import React from "react";
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import manju from '../../content/assets/profile-pic.jpg';

const About = () => (
  <React.Fragment>
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
          <div>Enhance your health, fitness, and independence</div>
          <p>Research shows no difference between physical therapy in the home and at a facility.</p>
        </div>
      </div>
      <div className="story">
        <img src={manju} alt="home physical therapy" />
        <div>
          <div>Our story</div>
          <p>A physical therapist since 1999, and frustrated with the hastened care at outpatient facilities, Manju Thomas turned to home visits to thoughtfully deliver high-quality one on one care.  She enjoys working with the older adult population to promote function, and return to activity.  She received her Master’s in Physical Therapy from Washington University in St. Louis (#1 ranked physical therapy school). She is licensed in New York, and is Otago trained for fall prevention.</p>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
)

export default About;