import React from 'react';
import { render } from 'react-dom';
import Request from 'superagent';
// import {Router, Route, browserHistory, IndexRoute} from "react-router";


import 'jquery';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../src/css/styles.min.css';
import '../../src/css/about.min.css';
import '../../src/css/portfolio.min.css';
import '../../src/css/process.min.css';
import '../../src/css/contact.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

require('../../src/app/components/navigation-route.js');
require('../../src/app/app.js');
require('../../src/app/portfolio.js');
require('file?name=[name].[ext]!../index.html');

// require('../../src/app/components/root.js');
// require('../../src/app/components/home.js');
// require('../../src/app/components/about.js');
// require('../../src/app/components/portfolio.js');
// require('../../src/app/components/process.js');
// require('../../src/app/components/contact.js');

//NAVIGATION -------------------------------------------------------------------
import { Root } from "../../src/app/components/root";
import { Home } from "../../src/app/components/home";
import { About } from "../../src/app/components/about";
import { Portfolio } from "../../src/app/components/portfolio";
import { MyProcess } from "../../src/app/components/myprocess";
import { Contact } from "../../src/app/components/contact";

import {Router, Route, browserHistory, IndexRoute} from "react-router";

class Main extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root} >
          <IndexRoute component={Home} />
          <Route path={"home"}  component={Home} />
          <Route path={"about"}  component={About} />
          <Route path={"portfolio"}  component={Portfolio} />
          <Route path={"myprocess"}  component={MyProcess} />
          <Route path={"contact"}  component={Contact} />
        </Route>
        <Route path={"about"} component={About} />
        <Route path={"portfolio"} component={Portfolio} />
        <Route path={"myprocess"} component={MyProcess} />
        <Route path={"contact"} component={Contact} />
      </Router>
    )
  }
}



function run() {
  render(<Main/>, document.getElementById('main'));
  console.log("ran render");
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if(loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}

console.log("abigby portfolio");
