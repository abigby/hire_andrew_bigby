import React from "react";

export class Home extends React.Component {
  render () {
    return (
      <div>
        <div id="index-inner">
            <div className="container billboard">
                <div className="row">
                  <div className="col-xs-12">
                      <div className="col-xs-12 col-md-5">
                        <div className="col-xs-12">
                          <span className="discipline ui-ux"><h1>UI|UX</h1></span>
                          <small>Think | Idea | Design | Express</small>
                        </div>
                        <div className="col-xs-12">
                          <br/><span className="discipline developer"><h1>DEVELOPER</h1></span>
                          <small>Thrive | Explore | Test | Build</small>
                        </div>
                      </div>

                      <div className="col-xs-12 col-md-7">
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <figure className="pull-left">
                              <img src="img/abigby.jpg" alt=""/>
                            </figure>
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <blockquote className="my-motto">
                              <p>The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.</p>
                              <footer>Henry Wadsworth Longfellow
                                <br/><cite title="Source Title">The Ladder of St. Augustine</cite></footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
            </div>

            <div className="container logo-set">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/html5.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/css3.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/jquery.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/js.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/bootstrap.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/sass.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/less.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/reactjs.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/jira.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/git.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/ai.png" alt="" /></div>
                    <div className="col-xs-4 col-md-1"><img src="img/logos/transparent/ps.png" alt="" /></div>
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
                    <address className="footer-address text-cen">
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
