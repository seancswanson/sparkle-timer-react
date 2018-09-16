import React, { Component } from 'react';
import ProjectCounter from './ProjectCounter';
import Project from './Project';
import axios from 'axios';


class ProjectStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProject: {}
    };
  }

  getProjects = () => {
    let self = this;
    axios.get('/getprojects').then(response => {
      this.setState({
        projects: response.data.response
      })
    }).then(function() {
      console.log('project', self.state.projects);
    });
  }

  activateSingleProject = () => {
    console.log('todo: project activated');
  }

  // ----------
  componentDidMount = (props) => {
    // this.props.getProjects();
    this.getProjects();
  }

  render() {
    return (
      <div className="ProjectStage">
        <ProjectCounter />
        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default ProjectStage;
