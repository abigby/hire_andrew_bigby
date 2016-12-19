import React from 'react';
import { render } from 'react-dom';
import {SearchBar } from './components/search_bar';

// var React = require('react');
// var ReactDOM = require('react-dom');

class App extends React.Component {
  //Renders Component
  render() {
    return (
      <div className='col-xs-12'>
        <SearchBar/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("searchBar-row"));
