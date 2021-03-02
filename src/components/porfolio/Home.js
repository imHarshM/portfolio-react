import React from "react";
import { ProfilePic } from "../common/Images";

const Home = () => {
  return (
    <div className="card-started" id="home-card">
      {/* <!-- Profile --> */}
      <div className="profile">
        {/* <!-- profile image --> */}
        <div className="slide"></div>

        {/* <!-- profile photo --> */}
        <div className="image">
          <img src={ProfilePic} alt="profile" />
        </div>

        {/* <!-- profile titles --> */}
        <div className="title">Harshal H. Mahajan</div>
        <div className="subtitle">UI Developer</div>

        {/* <!-- profile socials --> */}
        <div className="social">
          <a target="_blank" href="https://www.linkedin.com/in/imharshm">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a target="_blank" href="https://github.com/imharshm">
            <i className="fa fa-github"></i>
          </a>
          <a target="_blank" href="https://jsfiddle.net/user/imharshm">
            <i className="fa fa-jsfiddle"></i>
          </a>
          <a target="_blank" href="https://www.freelancer.com/u/harshalhmahajan">
            <i className="fa fa-foursquare"></i>
          </a>
        </div>

        {/* <!-- profile buttons --> */}
        <div className="lnks">
          <a
            href="https://docs.google.com/document/d/1yUMelEDuLVdSiMQRHqZKihRmbs5nx8SH_sMB3MkakFo/edit?usp=drivesdk"
            className="lnk"
            target="_blank"
          >
            <span className="text">Download CV </span>
            <i className="fa fa-download"></i>
          </a>
          <a href="" className="lnk discover">
            <span className="text">Contact Me</span>
            <span className="arrow"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
