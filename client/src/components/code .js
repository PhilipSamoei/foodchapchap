import React from 'react';
import "../css/Footer.css";

function Footercomp() {
  return (
    <div id='foot'>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Company<span>logo</span></h3>
          <p className="footer-links">
            <a href="#" className="link-1">Home</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">foodChapChap © 2023</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Moi Ave</span> Nairobi, Kenya</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+254 001 001 001</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:foodChapChap@company.com">foodChapChap@company.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About foodChapChap</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="main">
            <div className="card">
              <svg fill="#FFFFFF" height="30px" width="30px" viewBox="0 0 24 24">
                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M11,17H9v-4h2V17z M11,11H9V7h2V11z M15.805,17h-1.631 c-0.276,0-0.525-0.154-0.653-0.399c-0.139-0.291-0.104-0.639,0.093-0.902l1.199-1.996c0.137-0.229,0.372-0.365,0.618-0.365h1.949 c0.466,0,0.845,0.38,0.845,0.846V16.154C17.656,16.619,17.278,17,16.813,17H15.805z M15.488,10.543 c-0.049,0.189-0.181,0.346-0.36,0.43l-2.03,0.826c-0.339,0.138-0.72-0.025-0.888-0.332L8.546,8.719 c-0.091-0.186-0.089-0.406,0.004-0.591l0.732-1.192c0.168-0.307,0.548-0.47,0.888-0.332l2.03,0.826 c0.178,0.073,0.31,0.241,0.359,0.43l0.732,2.198C15.813,10.32,15.775,10.434,15.488,10.543z"/>
              </svg>
            </div>
            {/* Add other social media icons here */}
          </div>
          <p className="text">Contact<br/><br/>Us</p>
          <div className="main_back"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footercomp;
