import React from 'react';

export class PortfolioData extends React.Component {
  render() {
    console.log(this.props);

    return(
  // entries.map(entries, i) => {
          <div className="col-xs-6 col-sm-6 col-lg-4">
            <div className="card-content">
              <div className="cover">
                <span className="view-icon"><i className="fa fa-eye" aria-hidden="true"></i></span>
                <div className="project-image-container">
                  <div className="cover-outer-align">
                    <div className="cover-inner-align">
                      <img src= {this.props.link} alt=""/>
                      </div>
                  </div>
                </div>

                <a href="" className="card-click-target">
                  <span className="extra-info">
                    <span className="extra-label"></span>
                  </span>
                  <span className="preview-overlay-container">
                  </span>
                </a>
              </div>
              <div className="details">
                <div className="row">
                  <div className="col-xs-9">
                    <div className="row">
                      <div className="col-xs-12">
                        <a href="" className="card-click-target"></a>
                        <a href="#" className="title">
                          <span className="paragraph-end"></span>
                        </a>
                      </div>
                      <div className="subtitle-container">
                        <div className="row">
                          <div className="col-xs-9">
                            <a href="#" className="subtitle"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <span className="icon-menu-container">
                      <span className="paragraph-end"></span>
                      <span className="item-tag">
                        <span className="menu-container pull-right">
                          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

    );
  }
}
