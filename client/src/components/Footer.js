import React from 'react'
// import SimpleReactFooter from 'simple-react-footer';
import "../css/Footer.css"
import logo from "../assets/logo.png"


function Footercomp() {

  return (
    <div id='foot'>
    <footer class="footer-distributed">

		<div class="footer-left">

			<h3><img src={logo} alt="shop"/></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="http://localhost:4000/ContactUs">Contact</a>
				</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 Ngong</span> Nairobi, Kenya</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+254712345678</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="#">support@company.com</a></p>

				</div>


			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About FoodChapChap</span>
					foodchapchap is a service provider app that enables you to preorder food from your favorite restaurant to either dine or pick up your order in the chosen restaurant, easing the time to wait for the food to be ready.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    </div>
  )
};

export default Footercomp;

