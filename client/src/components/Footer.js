import React from 'react'
// import SimpleReactFooter from 'simple-react-footer';
import "../css/Footer.css"


function Footercomp() {

  return (
    <div id='foot'>
    <footer class="footer-distributed">

		<div class="footer-left">

			<h3>Company<span>logo</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">foodChapChap © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Moi Ave</span> Nairobi, Kenya</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+254 001 001 001</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:foodChapChap@company.com">foodChapChap@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About foodChapChap</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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

