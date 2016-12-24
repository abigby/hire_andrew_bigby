import React from "react";

export class Contact extends React.Component {
  render () {
    return (
      <div>
        <div id="contact-inner">
        <div className="container content-wrapper">
          <div className="row">
            <div className="col-xs-12 hire-me-block">
              <div className="col-xs-6">
                <h2>
                  give me a link
                </h2>
                <p className="intro">
                  I'm available for full-time, freelance and contracts don't hesitate.
                </p>
                <p className="general-text">
                  I&sbquo;m passionate about work especially when challenges are involved,
                  because with challenges comes learning and with learning comes
                  growth and with growth comes strength and with strength comes
                  power...and with...endless possibilities.
                </p>
              </div>
              <div className="col-xs-6">
                <div className="my-portrait">
                  <figure className="pull-left">
                    <img src="img/abigby.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
  <hr/>
        <div className="container  hire-me-block">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-xs-6 contact-links">
                <div className="col-12">
                  <div className="col-xs-12">
                    <a href=""><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
                  </div>
                  <div className="col-xs-12">
                    <a href=""><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 contact-form">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="col-xs-12">
                        <div className="col-xs-12">
                            <a href=""><i className="fa fa-file-word-o" aria-hidden="true"></i> Resume</a>
                        </div>
                        <div className="col-xs-12">
                          <a href=""><i className="fa fa-envelope-o" aria-hidden="true"></i> abigby@live.com</a>
                        </div>
                      </div>
                      <p>954 695-7745 | Tampa FL, 33607 (New Tampa)</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

          <footer id="main-footer">
            <nav className="navbar navbar-default">
              <div className="container">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#"></a></li>
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">Portolio</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <div className="col-xs-12">
                  <address className="footer-address text-center">
                    <strong>Andrew Bigby</strong> | Tampa FL, 33647 | 954-695-7745 | abigby@live.com
                  </address>
                </div>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    )
  }
}
