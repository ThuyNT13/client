import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629288277580-e6op6bl9i1lkgo3b8kojsjcpanhcs6hq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    isSignedIn ? this.props.signIn() : this.props.signOut();
  };

  // no parentheses when invoking as it will immediately be called on page load
  onClickSignIn = () => {
    this.auth.signIn();
  }
  onClickSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onClickSignOut}>
          <i className="google icon" />
          Sign out
        </button>
      )
    } else {
      return (
        <button className="ui red google button" onClick={this.onClickSignIn}>
          <i className="google icon" />
          Sign in
        </button>
      )
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { 
  signIn: signIn,
  signOut: signOut
 })(GoogleAuth);