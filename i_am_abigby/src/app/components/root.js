import React from "react";
import { Header } from "./header";

export class Root extends React.Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
     </div>
      </div>
    )
  }
}
