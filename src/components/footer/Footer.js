import "./Footer.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome 
                size={30} 
                style={{ color: "#fff", 
                marginRight: "2rem" }} />
            <div>
              <p>Str. Sergent Apostol C-tin, Nr. 16</p>
              <p>Bucharest</p>
            </div>
          </div>
          <div type="tel" className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", 
                marginRight: "2rem" }}
              />
              <a href="tel:+40799940333">+40799940333</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", 
                marginRight: "2rem" }}
              />
              eladie.ibumbar@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
            <h4>About</h4>
            <p>This is me Eladie Bumbar. I enjoy discussing new projects and design challenges</p>
            <div className="social">
            <FaFacebook
                size={30}
                style={{ color: "#fff", 
                marginRight: "1rem" }}
              />  
            <FaGithub
                size={30}
                style={{ color: "#fff", 
                marginRight: "1rem" }}
              />  
            <FaLinkedin
                size={30}
                style={{ color: "#fff", 
                marginRight: "1rem" }}
              />  
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
