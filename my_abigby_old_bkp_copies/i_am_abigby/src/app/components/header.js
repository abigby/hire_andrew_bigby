import React from "react";
import { Link } from "react-router";

export const Header = (props) => {
  return (
      <div>
      <nav id="main-nav" className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="col-xs-12 col-md-4">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" to={"/home"}><img src="img/ab_logo.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-xs-12 col-md-8">
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li activeClassName="active"><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/myprocess"}>Process</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/files/"} id="resume-download"><i className="fa fa-download" aria-hidden="true"></i> Resume</Link></li>
                    <li><Link to={"/home"} data-toggle="tooltip" title="LinkedIn" data-placement="bottom"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                    <li><Link to={"/home"} data-toggle="tooltip" title="GitHub" data-placement="bottom"><i className="fa fa-github" aria-hidden="true"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
        </nav>
      </div>
  );
};
