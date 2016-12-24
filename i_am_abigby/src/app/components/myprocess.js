import React from "react";

export class MyProcess extends React.Component {
  render () {
    return (
      <div>
        <div id="process-inner">
        <div className="container content-wrapper">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-xs-12 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading"> <div className="col-xs-10">discover</div>
                  <div className="col-xs-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div></div>
                  <div className="panel-body">
                    <h2>Brainstorm</h2>
                    <ol>
                      <li>- Interview Stakeholders</li>
                      <li>- Research</li>
                      <li>- Define Usability Goals</li>
                      <li>- Define Usability Objectives</li>
                      <li>- Conduct Field Studies</li>
                      <li>- Look At Competitive Products</li>
                      <li>- Create User Profile</li>
                      <li>- Define User Scenario</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="col-xs-10">design</div>
                    <div className="col-xs-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                  </div>
                  <div className="panel-body">
                    <h2>Prototyping</h2>
                    <p>
                      Project Planing
                    </p>
                    <ol>
                      <li>- Brainstorm Design Concepts</li>
                      <li>- Develop Screen Flows</li>
                      <li>- Develop Navigation Model</li>
                      <li>- Develop Usability Objectives</li>
                      <li>- Create Sketch/Wireframes</li>
                      <li>- Validate Usability</li>
                      <li>- Conduct Usability Testing</li>
                      <li>- Create High Fidelity Design</li>
                      <li>- Standardize Guidelines</li>
                      <li>- Create Design Specification</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="col-xs-10">develop</div>
                    <div className="col-xs-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                  </div>
                  <div className="panel-body">
                    <h2>Evalutation</h2>
                    <p>
                      See which ideas were successful and which to discard away.
                    </p>
                    <ol>
                      <li>- Refine Ideas</li>
                      <li>- Collaborate With Team</li>
                      <li>- Conduct Usability Testing</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="col-xs-10">deploy</div>
                    <div className="col-xs-2"></div>
                  </div>
                  <div className="panel-body">
                    <h2>Deployment </h2>
                    <p>Launch project testing &amp; refinement</p>
                    <ol>
                      <li>- Get Surveyed Feedbacks</li>
                      <li>- Test Actual Use</li>
                      <li>- Review Objectives</li>
                      <li>- Review Guidelines</li>
                      <li>- Refine Content</li>
                      <li>- UX: Ongoing Process</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
  <hr/>
          <div className="row skills-section">
            <div className="col-xs-12">
              <h2>d few skills/tools</h2>
              <div className="col-xs-12">
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/html5.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/css3.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/bootstrap.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/js.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/reactjs.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/sass.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/ai.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/ps2.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/git.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/jira.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/github.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/php.png" alt="" /></div>
                <div className="col-xs-3 mb-20"><img src="img/logos/transparent/webpack.png" alt="" /></div>
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
