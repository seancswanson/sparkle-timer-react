import React, { Component } from 'react';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Button Handlers
  // ----------
  renderProjects = (props) => {
    return (
    this.props.projects.map((project, projectIndex) => {
        console.log(projects);
        <div className="Project">
          <div className="project__top" style={{ backgroundColor: `#${project.project.colorhex}`}}>
          <span className="project__title">{project.project.name}</span>
          <span className="project__time">{project.project.minutes}</span>
          <span className="project__play timer-button"></span>
          </div>
          <div className="project__bottom">
          <span className="project__title"># Write a note</span>
          </div>
        </div>
      })
    )
  }

  // ----------
  render() {
    return (
    <div className="ProjectComponent">
      {this.renderProjects()}
    </div>
    )
  }
}

export default Project;
