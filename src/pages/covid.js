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
          <li>
            Home visits are safer than facility visits, and you have the same therapist each visit.
          </li>
          <li>
            We monitor exposure and symptoms of therapist and client, and visit accordingly.
          </li>
          <li>
            We wear a mask and gloves each visit, and wash hands before and
            after each visit.
          </li>
          <li>
            As appropriate, we maintain a safe distance between therapist and client.
          </li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Covid;