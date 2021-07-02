import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";
// entre accolade pour faire ressortir l'objects dans la data  .. un evariable exportable
// ne pas oublier export default devant class projectsList extents component

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
  };

  render() {
    let { projects } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radiodisplay"></ul>
        <div className="projects">
          {
              projects.map((item) => {
            return (
                <Project 
                key={item.id}
                item={item} 

            />);
          })}
        </div>
      </div>
    );
  }
}

// export default ProjectList;
