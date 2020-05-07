import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SEO from "../components/seo";

const Covid = () => {
  return (
    <React.Fragment>
      <SEO
        title="COVID-19 response"
        description="Smart Moves Physical Therapy COVID-19 response"
      />
      <NavBar />
      <div className="contact">
        <div className="contactsection">
          <div className="contactheader">COVID-19 Response</div>
          <div className="contactinfo">For the safety of clients and therapists, Smart Moves resumes home visits when New York lifts stay at home orders.</div>
          <div className="contactinfo">At that time, we monitor symptoms of both therapist and client, and plan visits accordingly.</div>
          <div className="contactinfo">We wear a mask and gloves each visit, and wash hands before and after each visit.</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Covid;