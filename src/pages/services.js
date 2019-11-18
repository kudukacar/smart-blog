import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Services = () => (
  <React.Fragment>
    <NavBar />
    <div className="services">
      <div className="seniors"></div>
      <div className="balance">
        <div className="balanceheader">We manage movement and balance disorders</div>
        <div>
          <ul>
            <li>Walking difficulty (poor balance or endurance, repeated falls, or fear of falling).</li>
            <li>Difficulty changing positions such as getting out of bed or getting up from a chair.</li>
            <li>Any movement or balance disorders related to Parkinson's, stroke, or other conditions.</li>
          </ul>
        </div>
      </div>
      <div className="servicesimage"></div>
      <div className="orthopedic">
        <div className="orthopedicheader">We manage orthopedic conditions</div>
        <div className="orthopedicconditions">
          <ul>
            <li>Arthritis</li>
            <li>Back pain</li>
            <li>Bulging or herniated disc</li>
            <li>Bursitis</li>
            <li>Degenerative disc or joint disease</li>
            <li>Heel pain</li>
            <li>Joint replacements (hip or knee)</li>
          </ul>
          <ul>
            <li>Lumbar or spinal stenosis</li>
            <li>Plantar fasciitis</li>
            <li>Runner's knee</li>
            <li>Sciatica</li>
            <li>Strains and sprains</li>
            <li>Tendinitis</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
)

export default Services;