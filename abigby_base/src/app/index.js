console.log("It works");

import React from 'react';
import { render } from 'react-dom';
import Request from 'superagent';


import 'jquery';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import './css/styles.css';

import { createHashHistory } from 'history'
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Stuff } from './components/Stuff';

import { Root } from './components/Root';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from "react-router";

/* create history for router */
let history = new createHashHistory();

// require('./app.js');

class Main extends React.Component {
  render() {
    return (
      <Router history={history} >
         <Route path='/' component={ Root }>
            <IndexRoute component={ Home }/>
            <Route path="stuff" component={ Stuff } />
            <Route path="contact" component={ Contact } />
         </Route>
       </Router>
    )
  }
}

render(<Main/>, document.getElementById('abigby-app'));
