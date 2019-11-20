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
      <a href="https://www.facebook.com/floralparknewyork"><FaFacebook /></a>
      <a href="https://twitter.com/movesphysical"><FaTwitter /></a>
      <a href="https://www.linkedin.com/company/smart-moves-physical-therapy"><FaLinkedin /></a>
    </div>
    <div className="copyright">©2019 BY SMART MOVES PHYSICAL THERAPY</div>
  </div>
)

export default Footer;