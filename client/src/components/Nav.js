import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      <div className="nav__links">
      <a className="nav__links-item" href="#">Sparkle</a>
      <a className="nav__links-item nav__links-item-username" href="#">Sean</a>
      <a className="nav__links-item nav__links-item-newProject" href="#">New Project</a>
      </div>
      </div>
    );
  }
}

export default Nav;
