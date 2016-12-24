import  React          from "react";
import { render }      from 'react-dom';
import  Request        from 'superagent';
import  _              from 'lodash';

// import { PortfolioData } from '../../src/app/components/portfolio-data';

class Portfolio extends React.Component {

  constructor() {
      super();
      this.state = {
          currentProjects: []
      };
  }

  componentWillMount() {
    //Called the first time the component is loaded right before the component is added to the page
  }
  componentDidMount() {
    //Called after the component has been rendered into the page
    // var url = "../../src/app/portfolio-data.json";
    // this.serverRequest = Request.get(url)
    //  .then(res => {
    //     console.log(res.body.entry);
    //     const items = res.body.entry;
    //     this.setState({ projects: res.body.entry })
    //   });

    var data;
    $.getJSON('../../src/app/portfolio-data.json', (json) => {
      data = json;
      console.log("'componentDidMount'");
      console.log(data);

      this.setState({
        currentProjects: data.entry
      });

    });
  }
  componentWillReceiveProps(nextProps) {
    //Called when the props provided to the component are changed
  }
  componentWillUpdate(nextProps){
    //Called when the props provided to the component are changed
  }
  componentWillUnmount(){
    //Called when the component is removed
    this.serverRequest.abort();
  }

  //Renders Component
  render() {
    // var entries = _.map(this.state.projects, (data, i) => {
    //   console.log("nmeh " + data.name);
    //   return <li key={i}>{data.name}</li>;
    // });

    let entries = this.state.currentProjects;
    console.log("Portfolio.js Entries")
    console.log(entries);

    var results = entries.map((data, i) =>
      {
        return   <div className="col-xs-6 col-sm-6 col-lg-3 mb-10" key={i}>
                    <div className="card-content">
                      <div className="cover">
                        <span className="view-icon"><i className="fa fa-eye" aria-hidden="true"></i></span>
                        <div className="project-image-container">
                          <div className="cover-outer-align">
                            <div className="cover-inner-align">
                              <img src= {data.thumbnail} alt=""/>
                              </div>
                          </div>
                        </div>

                        <a href={data.link} className="card-click-target">
                          <span className="extra-info">
                            <span className="extra-label">{i+1}</span>
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
                                <a href={data.link} className="card-click-target"></a>
                                <a href="#" className="title">
                                  <span className="paragraph-end"></span>
                                  {data.name}
                                </a>
                              </div>
                              <div className="subtitle-container">
                                  <div className="col-xs-12">
                                    <a href="#" className="subtitle">{data.type}</a>
                                  </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
      });

    return (
      <div>
        {results}
      </div>
    );
  }
}

render(<Portfolio/>, window.document.getElementById("jsoned"));
