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
require('../../src/app/app.js');
require('../../src/app/portfolio.js');

require('file?name=[name].[ext]!../index.html');

console.log("It works!");
