import React from "react";
import ReactDOM from "react-dom";

import { Home } from './Home';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from "react-router";

export class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div>
            { this.props.children }
        </div>
      </div>
    )
  }
}
