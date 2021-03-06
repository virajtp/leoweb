import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";
import ScrollButton from "./ScrollButton";


const Footer = () => {
  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '40%',
  };
 
  const iconStyle = { color: '#ffffff' };
  return ( 
    <div>
      
      <footer className="footer-is-primary">
      <ScrollButton/>
      <Contact/>
      <div><h2>Follow Us</h2></div>
              <div class="social-container">
                
                    <div className="social-icons">
                    {/* <a href="/ProjectForm"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                      </a> */}
                      <a target='_blank' href="https://youtube.com/channel/UCcyXhJ9K_FehCDp57h-RzLQ"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                      </a>
                       <a target='_blank' href="https://www.facebook.com/USJC2/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      {/* <a href="/BlogForm"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a> */}
                      <a target='_blank' href="https://www.linkedin.com/company/71543018/" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                      </a>
                      <a target='_blank' href="https://instagram.com/jpurac2leos?utm_medium=copy_link"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                      
                    </div>
              </div>
              <div style={{paddingTop: '25'}} >?? LCUSJ 2022 All rights reserved !</div>
        
      </footer>
    </div>
   );
}
 
export default Footer;