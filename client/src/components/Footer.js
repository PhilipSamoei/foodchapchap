import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
import "../css/Footer.css";
import logo from "../assets/logo.png"


function Footercomp() {
  return (
    <div id="footer">
      <footer className="footer-distributed">
        <div className="footer-left">
        <h3><img src={logo} alt="shop"/></h3>
          <p className="footer-links">
            <BrowserRouter>
                  <a href="#" className="link-1">Home</a>
                  <a href="#">Blog</a>
                  <a href="#">Pricing</a>
                  <a href="#">About</a>
                  <a href="#">Faq</a>
                  <li><Link to="/ContactUs" smooth={true}> ContactUs</Link></li>
            </BrowserRouter>
          </p>
          <p className="footer-company-name">FoodChapChap © 2023</p>
        </div>
    

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Ngong Lane</span> Nairobi, Kenya</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@company.com</a></p>
          </div>
        </div>
			<div class="footer-center">



			</div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            foodchapchap is a service provider app that enables you to preorder food from your favorite restaurant to either dine or pick up your order in the chosen restaurant, easing the time to wait for the food to be ready.
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footercomp;
