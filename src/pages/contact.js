import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import walking2 from '../../content/assets/walking2.jpg';

const Contact = () => (
  <React.Fragment>
    <NavBar />
    <div className="contact">
      <div>
        <div className="contactheader">Contact us</div>
        <div className="contactinfo">Phone: 678-372-7972</div>
        <div className="contactinfo">Fax: 347-826-0865</div>
        <div className="contactinfo">mthomas@smartmovesphysicaltherapy.com</div>
        <p>Please call, text, or e-mail with any questions, comments, or scheduling inquiries.  We serve Queens, Nassau County, and Manhattan, and accept Medicare.</p>
      </div>
      <img src={walking2} alt="home physical therapy" />
    </div>
    <Footer />
  </React.Fragment>
)

export default Contact;