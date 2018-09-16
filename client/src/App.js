import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProjectStage from './components/ProjectStage';
import SplashScreen from './components/SplashScreen';
import './style/build/App.css';
import axios from 'axios';

class App extends Component {
  // ----------
  constructor(props) {
  super(props);
  this.state = {
    date: new Date(),
    user: '',
    projects: {},
    isLoggedIn: false
  };
}


  // ----------
  getProjects = () => {
    axios.get('/getprojects').then(response => {
      this.setState({
        projects: response.data.response.project
      }).then(function() {
        console.log('projects', response.data);
      });
    });
  }

  getUser = (event) => {
    event.preventDefault();
    axios.get('/getuser').then(response => {
      this.setState({
        user: response.data.user,
        isLoggedIn: true
      });
      console.log('user', this.state.user);
    })
  }

  // ----------
  render() {
    return (
      <div className="App">
      <Nav user={this.state.user}/>
      { this.state.isLoggedIn ?
        <
        ProjectStage getProjects={this.getProjects} projects={this.state.projects}
        getUser={this.getUser} user={this.state.user}
        /> :
        <SplashScreen getUser={this.getUser}/>
      }
      <Footer />
      </div>
    );
  }
}

export default App;
