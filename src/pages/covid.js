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
      <div className="covid">
        <div className="balanceheader">
          COVID-19 Response: Smart Moves is open!
        </div>
        <ul className="covidresponse">
          <li>Home visits assume less risk than facility visits.</li>
          <li>
            You have the same therapist each visit, reducing risk further.
          </li>
          <li>
            We monitor symptoms, including temperature, of therapist and
            client, and visit accordingly.
          </li>
          <li>
            We wear a mask and gloves each visit, and wash hands before and
            after each visit.
          </li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Covid;