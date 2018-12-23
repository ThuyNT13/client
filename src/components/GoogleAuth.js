import React from 'react';
import { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629288277580-e6op6bl9i1lkgo3b8kojsjcpanhcs6hq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Unknown login state.</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed in.</div>
    } else {
      return <div>Signed out.</div>
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;