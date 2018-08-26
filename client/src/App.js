import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProjectStage from './components/ProjectStage';
import './style/build/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <ProjectStage />
      <Footer />
      </div>
    );
  }
}

export default App;
