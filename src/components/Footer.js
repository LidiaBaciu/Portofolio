import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FaHeartbeat } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          Copyright&copy;{new Date().getFullYear()}
          <span>Lidia Baciu</span> all rights reserved{" "}
          <FaHeartbeat className="social-icon"></FaHeartbeat>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
