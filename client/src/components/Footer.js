import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
import "../css/Footer.css";
import logo from "../assets/logo.png"

function Footercomp() {
  return (
    <div id='foot'>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3><img src={logo} alt="shop"/></h3>
          <p className="footer-links">
            <a href="http://localhost:4000/Home" className="link-1">Home</a>
            <a href="http://localhost:4000/Blog">Blog</a>
            <a href="#">About</a>
            <a href="http://localhost:4000/ContactUs">Contact</a>
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>444 Ngong</span> Nairobi, Kenya</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+254712345678</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="#">support@company.com</a></p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About FoodChapChap</span>
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
