import React from "react";
import useWindowDimensions from "../utils/WindowDimension";

const Resume = ({ show }) => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="resume-card"
    >
      <div className="card-wrap">
        {/* <!-- Resume --> */}
        <div className="content resume">
          {/* <!-- title --> */}
          <div className="title">
            <div className="first-letter">Resume</div>
          </div>

          {/* <!-- content --> */}
          <div className="row">
            {/* <!-- experience --> */}
            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="name">Experience</div>
              </div>
              <div className="resume-items">
                <div className="resume-item border-line-h active">
                  <div className="date">2019 - Present</div>
                  <div className="name">Senior UI Developer</div>
                  <div className="company">
                    <a href="https://www.torqus.com/" target="_blank" rel="noreferrer">
                      Torqus System Pvt Ltd
                    </a>
                  </div>
                  <p>Collaborate with creative and development teams on the execution of ideas.</p>
                  <p>
                    Monitored technical aspects of the front-end delivery of projects for all hotel
                    operations.
                  </p>
                  <p>Optimize website performance using latest technology.</p>
                </div>
                <div className="resume-item border-line-h">
                  <div className="date">2017 - 2019</div>
                  <div className="name">UI Developer</div>
                  <div className="company">
                    <a href="http://www.scorgtechnologies.com/" target="_blank" rel="noreferrer">
                      Scorg Technologies Pvt Ltd
                    </a>
                  </div>
                  <p>
                    Invovled in creating webpages and make it responsive as per clients presences
                    like devices, device different type of sizes using HTML5, CSS3, Bootstrap and
                    Angular JS.
                  </p>
                  <p>
                    Worked on Health Care Domain, handle all the functionalities on UI site related
                    to Hospital Operations.
                  </p>
                </div>
                <div className="resume-item">
                  <div className="date">2015 - 2017</div>
                  <div className="name">UI Developer</div>
                  <div className="company">
                    <a href="http://www.pasistence.com/" target="_blank" rel="noreferrer">
                      Pasistence Consultancy Services Pvt Ltd
                    </a>
                  </div>
                  <p>
                    Created webpages using Boostrap 3, HTML5, SCSS and make it cross browser
                    compatable for all the browers.
                  </p>
                  <p>
                    Worked on E-Commerence domain, handle payment gateway intergration on CC Avenue.
                  </p>
                </div>
                <div className="resume-item">
                  <div className="date">2014 - 2015</div>
                  <div className="name">Junior Software Developer</div>
                  <div className="company">
                    <a href="https://www.vishwjeet.com/" target="_blank" rel="noreferrer">
                      Vishwjeet Green Power Pvt Ltd
                    </a>
                  </div>
                  <p>
                    Joined as fresher, worked website development using HTML, CSS, jQuery and
                    JavaScript.
                  </p>
                  <p>
                    Worked on Inventory Management System, design webpages for different type
                    operations related to inventory.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- education --> */}
            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon">
                  <i className="fa fa-university"></i>
                </div>
                <div className="name">Education</div>
              </div>
              <div className="resume-items">
                <div className="resume-item border-line-h">
                  <div className="date">2009 - 2013</div>
                  <div className="name">North Maharashtra University</div>
                  <div className="company">Jalgaon, Maharashtra</div>
                  <p>Bachelor's Degree in Computer Science</p>
                </div>
                <div className="resume-item border-line-h">
                  <div className="date">2008 - 2009</div>
                  <div className="name">HSC</div>
                  <div className="company">Jamner, Maharashtra</div>
                  <p>Completed Higher Secondary Education.</p>
                </div>
                <div className="resume-item">
                  <div className="date">2006 - 2007</div>
                  <div className="name">SSC</div>
                  <div className="company">Tandalwadi, Jalgaon, Maharashtra</div>
                  <p>Completed Secondary School Education.</p>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>

        {/* <!-- Skills --> */}
        <div className="content skills">
          {/* <!-- title --> */}
          <div className="title">
            <span className="first-word">My</span> Skills
          </div>

          {/* <!-- content --> */}
          <div className="row">
            {/* <!-- skill item --> */}
            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
              <div className="skills-list circles">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <div className="name">Coding</div>
                </div>
                <ul>
                  <li>
                    <div className="name">HTML CSS SCSS</div>
                    <div className="progress p97">
                      <span>97%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="name">React JS</div>
                    <div className="progress p85">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="name">JavaScript jQuery</div>
                    <div className="progress p85">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="name">Boostrap 3/4</div>
                    <div className="progress p95">
                      <span>95%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="name">Angular</div>
                    <div className="progress p75">
                      <span>75%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- skill item --> */}
            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
              <div className="skills-list list">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-android-list"></i>
                  </div>
                  <div className="name">Knowledge</div>
                </div>
                <ul>
                  <li>
                    <div className="name">Website design and development</div>
                  </li>
                  <li>
                    <div className="name">Website hosting</div>
                  </li>
                  <li>
                    <div className="name">Unit testing and debugging</div>
                  </li>
                  <li>
                    <div className="name">Responsive web design</div>
                  </li>
                  <li>
                    <div className="name">Cross browser compatibility</div>
                  </li>
                  <li>
                    <div className="name">Modern and mobile-ready</div>
                  </li>
                  <li>
                    <div className="name">Graphics and animations</div>
                  </li>
                  <li>
                    <div className="name">Search engine optimization</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
