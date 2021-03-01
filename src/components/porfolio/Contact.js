import React from "react";

const Contact = () => {
  return (
    <div className="card-inner contacts fadeOutLeft" id="contacts-card">
      <div className="card-wrap">
        {/* <!-- Conacts Info --> */}
        <div className="content contacts">
          {/* <!-- title --> */}
          <div className="title">
            <span className="first-word">Get</span> in Touch
          </div>

          {/* <!-- content --> */}
          <div className="row">
            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-v">
              <div id="social-test">
                <ul className="social">
                  <li className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/imharshm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="github">
                    <a href="https://github.com/imHarshM" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="jsfiddle">
                    <a
                      href="https://jsfiddle.net/user/imharshm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-jsfiddle" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      href="https://twitter.com/imharshm_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a
                      href="https://www.instagram.com/imharshm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="facebook">
                    <a
                      href="https://facebook.com/imharshm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="map-marker">
                    <a
                      href="https://www.google.co.in/maps/contrib/109147557342255815295/contribute/@19.7474337,73.6666569,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en%26authuser=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="youtube">
                    <a
                      href="https://www.youtube.com/channel/UCdgTDgicQbRDMWNEnCNW9JA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="whatsapp">
                    <a href="https://wa.me/919730614181" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="phone">
                    <a href="tel:+919730614181">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="envelope-o">
                    <a href="mailto:hmahajan38@gmail.com">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <div className="content contacts">
          {/* <!-- title --> */}
          <div className="title">
            <span className="first-word">Contact</span> Form
          </div>

          {/* <!-- content --> */}
          <div className="row">
            <div className="col border-line-v">
              <div className="contact_form">
                <form id="contact-form" method="post" novalidate="novalidate">
                  <div className="row">
                    <div className="col col-xl-6 col-md-6 col-sm-12">
                      <div className="group-val">
                        <input type="text" name="name" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col col-xl-6 col-md-6 col-sm-12">
                      <div className="group-val">
                        <input type="text" name="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col col-xl-12 col-md-12 col-sm-12">
                      <div className="group-val">
                        <textarea name="message" placeholder="Your Message"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="align-left">
                    <a
                      href="#"
                      className="button"
                      onclick="$('#contact-form').submit(); return false;"
                    >
                      <span className="text">Send Message</span>
                      <span className="arrow"></span>
                    </a>
                  </div>
                </form>
                <div className="alert-success">
                  <p>Thanks, your message is sent successfully.</p>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
