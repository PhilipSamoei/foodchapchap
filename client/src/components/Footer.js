// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Link } from "react-router-dom"
// import "../css/Footer.css";
// import logo from "../assets/logo.png"
// import face from "../assets/face.gif"
// import twir from "../assets/twir.gif"
// import instg from "../assets/instg.gif"
// import link from "../assets/link.gif"

// function Footercomp() {
//   return (
//     <div id='foot'>
//       <footer className="footer-distributed">
//         <div className="footer-left">
//           <h3><img src={logo} alt="shop"/></h3>
// 		  <h2>Usefull links 👇👇</h2>
//           <p className="footer-links">
//             <a href="http://localhost:4000/Home" className="link-1">Home</a>
//             <a href="http://localhost:4000/Blog">Blog</a>
//             <a href="http://localhost:4000/ContactUs">Contact us</a>
//           </p>
//         </div>

//         <div className="footer-center">
//           <div>
//             <i className="fa fa-map-marker"></i>
//             <p><span>444 Ngong</span> Nairobi, Kenya</p>
//           </div>
//           <div>
//             <i className="fa fa-phone"></i>
//             <p>+254712345678</p>
//           </div>
//           <div>
//             <i className="fa fa-envelope"></i>
//             <p><a href="mailto:simonkhartoum@gmail.com">foodchapchap@company.com</a></p>
//           </div>
//         </div>

//         <div className="footer-right">
//           <p className="footer-company-about">
//             <span>About FoodChapChap</span>
//             foodchapchap is a service provider app that enables you to preorder food from your favorite restaurant to either dine or pick up your order in the chosen restaurant, easing the time to wait for the food to be ready.
//           </p>
//           <div className="footer-icons">
// 		    <a href="https://www.facebook.com/robin.simo.7?mibextid=ZbWKwL"><img src={face} alt="facebook"/></a>
//             <a href="https://twitter.com/akianani_?t=xtBmypPwGgqQVT-8z5aw8g&s=09"><img src={twir} alt="twitter"/></a>
// 			<a href="https://instagram.com/khartoumframes.1?igshid=ZGUzMzM3NWJiOQ=="><img src={instg} alt="instagram"/></a>
// 			<a href="https://www.linkedin.com/in/simon-karuri-00b481249"><img src={link} alt="linkedln"/></a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footercomp;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
import "../css/Footer.css";
import logo from "../assets/logo.png"
import face from "../assets/face.gif"
import twir from "../assets/twir.gif"
import instg from "../assets/instg.gif"
import link from "../assets/link.gif"


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
          <div>
            <p>
              <a href='http://localhost:4000/RegistrationForm'> Register</a> and work with us.
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About FoodChapChap</span>
            foodchapchap is a service provider app that enables you to preorder food from your favorite restaurant to either dine or pick up your order in the chosen restaurant, easing the time to wait for the food to be ready.
          </p>
          <div className="footer-icons">
		    <a href="https://www.facebook.com/robin.simo.7?mibextid=ZbWKwL"><img src={face} alt="facebook"/></a>
            <a href="https://twitter.com/akianani_?t=xtBmypPwGgqQVT-8z5aw8g&s=09"><img src={twir} alt="twitter"/></a>
			<a href="https://instagram.com/khartoumframes.1?igshid=ZGUzMzM3NWJiOQ=="><img src={instg} alt="instagram"/></a>
			<a href="https://www.linkedin.com/in/simon-karuri-00b481249"><img src={link} alt="linkedln"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footercomp;
