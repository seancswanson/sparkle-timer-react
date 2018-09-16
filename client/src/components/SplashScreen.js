import React, { Component } from 'react';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: true,
      showLogin: false
    }
  }

  // Button Handlers
  // ----------
  handleSignInInit = (event) => {
    this.setState({
      showActions: false,
      showLogin: true
    })
  }


  // Functional components
  // ----------
  loginForm = (props) => {
    return(
      <div className="login-form">
          <div className="form-container">
            <form>
              <input className="form-input input-username" placeholder="username" type="username" />
              <input className="form-input input-password" placeholder="password" type="password" />
              <button className="form-login-button" onClick={this.props.getUser}>LOGIN</button>
            </form>
          </div>
          <p className="form-not-registered">Don&apos;t have an account?
            <a className="form-signup-link" href="#hello" alt="sign up"> Sign Up</a>
          </p>
      </div>
    )
  };

  // ----------
  minimizedActions = () => {
    return(
      <div className="minimized-actions">
        <button className="minimized-button minimized-signup-button">
        <span className="signup-icon"></span>
        SIGN UP
        </button>
        <button className="minimized-button minimized-github-button">
        <span className="github-icon"></span>
        GITHUB
        </button>
        <p className="have-an-account">Already have an account?&nbsp;
          <a className="sign-in-link" href="#hello" alt="sign up" onClick={this.handleSignInInit}>Sign In</a>
        </p>
      </div>
    )
  };


  // ----------
  render() {
    return (
      <div className="SplashScreen">
        <div className="splash-container">
          <h2 className="splash-heading splash-heading-welcome">welcome to</h2>
          <h1 className="splash-heading splash-heading-sparkle">SPARKLE</h1>
          <span className="splash-logo"></span>
          {this.state.showLogin && !this.state.showActions ? this.loginForm() : ''}
          {this.state.showActions && !this.state.showLogin ? this.minimizedActions() : ''}
        </div>
      </div>
    );
  }
}

export default SplashScreen;
