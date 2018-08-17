import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Footer />
      </div>
    );
  }
}

export default App;
