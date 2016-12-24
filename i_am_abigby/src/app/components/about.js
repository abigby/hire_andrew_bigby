import React from "react";

export class About extends React.Component {
  render () {
    return (
      <div>
        <div id="about-inner">
        <div className="container content-wrapper">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-xs-6">
                <h2> about me</h2>
                <p className="intro">
                  I&sbquo;m a passionate UX/UI Designer and Front End Developer  who likes to
                  build amazing things
                </p>
                <p className="general-text">
                  I am passionate about making visions a reality, converting complex problems into simple, beautiful, intuitive applications and interfaces.
                  When I am not pusing code or refining pixels, I love to workout, play soccer and watch tv.
                </p>
              </div>
              <div className="col-xs-6">
                <div className="my-portrait">
                  <figure className="pull-left">
                    <img src="img/abigby.jpg" alt=""/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container skills-bifold">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-xs-6 developer">
                <div className="">
                  <p className="intro">
                    Designer 45%
                  </p>
                    <div className="col-xs-12">
                      <p className="general-text">
                        Photoshop | Illustrator | Axure
                      </p>
                      <div className="list-group">
                         <a href="#" className="list-group-item">
                           <p className="list-group-item-text">User Experience Design</p>
                           <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="20"
                              aria-valuemin="0" aria-valuemax="100" style="width:20%">
                                20%
                              </div>
                            </div>
                         </a>
                         <a href="#" className="list-group-item">
                           <p className="list-group-item-text">User Interface Design</p>
                           <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="20"
                              aria-valuemin="0" aria-valuemax="100" style="width:20%">
                                20%
                              </div>
                            </div>
                         </a>
                         <a href="#" className="list-group-item">
                           <p className="list-group-item-text">Wireframes/Mockups</p>
                           <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="20"
                              aria-valuemin="0" aria-valuemax="100" style="width:20%">
                                20%
                              </div>
                            </div>
                         </a>
                         <a href="#" className="list-group-item">
                           <p className="list-group-item-text">Logos-Branding | Web Design</p>
                           <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="40"
                              aria-valuemin="0" aria-valuemax="100" style="width:40%">
                                40%
                              </div>
                            </div>
                         </a>
                       </div>
                    </div>
                </div>
              </div>
              <div className="col-xs-6 designer">
                <div className="">
                  <p className="intro">
                    Developer 55%
                  </p>
                  <div className="col-xs-12">
                    <p className="general-text">
                      HTML5 | CSS3 | JS
                    </p>
                    <div className="list-group">
                       <a href="#" className="list-group-item">
                         <p className="list-group-item-text">
                           Prototyping
                         </p>
                         <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="10"
                            aria-valuemin="0" aria-valuemax="100" style="width:10%">
                              10%
                            </div>
                          </div>
                       </a>
                       <a href="#" className="list-group-item">
                         <p className="list-group-item-text">Developing</p>
                         <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="60"
                            aria-valuemin="0" aria-valuemax="100" style="width:60%">
                              60%
                            </div>
                          </div>
                       </a>
                       <a href="#" className="list-group-item">
                         <p className="list-group-item-text">Refinement</p>
                         <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="10"
                            aria-valuemin="0" aria-valuemax="100" style="width:10%">
                              10%
                            </div>
                          </div>
                       </a>
                       <a href="#" className="list-group-item">
                         <p className="list-group-item-text">Usability Testing</p>
                         <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="20"
                            aria-valuemin="0" aria-valuemax="100" style="width:20%">
                              20%
                            </div>
                          </div>
                       </a>
                     </div>
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
