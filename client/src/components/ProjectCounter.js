import React, { Component } from 'react';

class ProjectCounter extends Component {
  // Button Handlers
  // ----------


  // ----------
  render() {
    return (
      <div className="ProjectCounter">
        <div className="timer-button timer-add"></div>
        <div className="timer-button timer-minus"></div>
        <div className="counter-container">
          <div className="counter-top">0:32:57</div>
          <div className="counter-bottom">TOTA</div>
        </div>
        <div className="timer-button timer-pause"></div>
        <div className="timer-button timer-check"></div>
      </div>
    );
  }
}

export default ProjectCounter;
