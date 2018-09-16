import React, { Component } from 'react';

class Nav extends Component {
  render(props) {
    return (
      <div className="Nav">
      <div className="nav__links">
      <a className="nav__links-item" href="#hello"><span className="sparkle-icon"></span>Sparkle</a>
      <a className="nav__links-item nav__links-item-username" href="#hello">{this.props.user.first_name} {this.props.user.last_name}</a>
      <a className="nav__links-item nav__links-item-newProject" href="#hello">New Project</a>
      </div>
      </div>
    );
  }
}

export default Nav;
