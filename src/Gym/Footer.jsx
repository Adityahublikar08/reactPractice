import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3 style={{ color: "black" }}>About Us</h3>
          <p style={{ color: "white" }}>
            <strong style={{ color: "white" }}>GYM FIT</strong> is dedicated to
            helping you achieve your fitness goals with state-of-the-art
            equipment and expert guidance.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h3 style={{ color: "black" }}>Useful Links</h3>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About US
            </Link>

            <Link
              to="/services"
              style={{ color: "white", textDecoration: "none" }}
            >
              Services
            </Link>
            <Link
              to="/plans"
              style={{ color: "white", textDecoration: "none" }}
            >
              Plans
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 style={{ color: "black" }}>Contact Us</h3>
          <p style={{ color: "white" }}>Email: contact@gymfit.com</p>
          <p style={{ color: "white" }}>Phone: +91 12345 67890</p>
          <p style={{ color: "white" }}>Location: Pune, Maharashtra</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social" style={{fontSize:"40px"}}>
          <h3>Follow Us</h3>
         <div style={{display:"flex",position:"relative",left:"90px",color:"whitesmoke"}}>
         <MdFacebook />
          <IoLogoInstagram />
          <CiLinkedin />
         </div>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <strong>GYMFIT</strong>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
