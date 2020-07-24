import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



const Footer = () => (
  <div className="footer">
    <div>mthomas@smartmovesphysicaltherapy.com</div>
    <div>678-372-7972</div>
    <div>Serves Queens, Nassau County, and Manhattan</div>
    <div>
      <a href="https://www.facebook.com/floralparknewyork" aria-label="facebook"><FaFacebook /></a>
      <a href="https://twitter.com/movesphysical" aria-label="twitter"><FaTwitter /></a>
      <a href="https://www.linkedin.com/company/smart-moves-physical-therapy" aria-label="linkedin"><FaLinkedin /></a>
    </div>
    <div className="copyright">©2019 BY SMART MOVES PHYSICAL THERAPY</div>
  </div>
)

export default Footer;