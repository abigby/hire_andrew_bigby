import React from "react";

export class SearchBar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div class="container-fluid">
          <form className="navbar-form navbar-left">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search"/>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
          <h1 id="searchbar-phrase">Find Your Favorite of 2016</h1>
          </div>
      </nav>
    );
  }
}
