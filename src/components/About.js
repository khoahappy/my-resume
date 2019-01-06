import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I’m a 5-year experienced developer in software/mobile development. Experienced in the
framework like <span>AngularJS</span>, <span>React</span>, <span>Bootstraps</span>, <span>Kendo UI</span> and hybrid mobile apps like
React Native and Ionic / Cordova. I would love to research new web technologies and
building a cool product based on mobile or web application.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Le Dang Khoa</span>
              <br />
              <span>
                
              </span>
              <br />
              <span>(+84)767102000</span>
              <br />
              <span>http://maplestudio.vn</span>
            </p>
          </div>
          {/* <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
