import React from "react";

export class Portfolio extends React.Component {
  render () {
    return (
      <div>
        <div id="portfolio-inner">
          <div className="container content-wrapper">
            <div className="row">
              <div className="col-xs-12">
                <div id="jsoned" className="row">

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
