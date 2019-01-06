import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/khoa-le-b31b22a8" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/khoahappy/">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
