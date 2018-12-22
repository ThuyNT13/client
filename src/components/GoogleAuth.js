import React from 'react';
import { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '629288277580-e6op6bl9i1lkgo3b8kojsjcpanhcs6hq.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }

  render() {
    return (
      <div>GoogleAuth</div>
    )
  }
}

export default GoogleAuth;