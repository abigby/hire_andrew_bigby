import React from "react";

export class SearchBar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="col-xs-12 col-md-6">
            <h1 id="searchbar-phrase" className="text-center">Find Your Favorite of 2016</h1>
          </div>
          <div className="col-xs-12 col-md-6">
              <div className="input-group m-10">
                <input id="searchFilter" type="text" className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
               </div>
          </div>
        </div>
      </nav>
    );
  }
}
