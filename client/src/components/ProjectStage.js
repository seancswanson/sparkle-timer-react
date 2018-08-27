import React, { Component } from 'react';
import ProjectCounter from './ProjectCounter';
import Project from './Project';


class ProjectStage extends Component {
  render() {
    return (
      <div className="ProjectStage">
        <ProjectCounter />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

export default ProjectStage;
