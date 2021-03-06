See [Wiki](https://github.com/ThuyNT13/client/wiki) for setting up [**RTMP server**](https://github.com/ThuyNT13/client/wiki/Real-Time-Messaging-Protocol-(RTMP)-server) and [**JSON Server API**](https://github.com/ThuyNT13/client/wiki/JSON-Server-API) for this project.

[Network errors](https://github.com/ThuyNT13/client/issues/2) might occurr if you forget to run all servers.

## Resources used

[**Redux**](https://redux.js.org/) - *state* container for **React**

  - [**Redux Form** docs](https://redux-form.com) - for managing *form state* in **Redux**

  - [**Redux Thunk**](https://github.com/reduxjs/redux-thunk) - middleware for **Redux**
  
[**react-router-dom**](https://www.npmjs.com/package/react-router-dom) - DOM binding for [**React-Router**](https://reacttraining.com/react-router/) declarative routing, programmatic navigation

[**axios**](https://www.npmjs.com/package/axios) - HTTP client for the browser and node.js

[**_.Lodash**](https://lodash.com/) - JavaScript utility library

[**history**](https://www.npmjs.com/package/history) - JavaScript library for managing session history 

[**Google API Client Libraries** JavaScript docs](https://developers.google.com/api-client-library/javascript/reference/referencedocs)

[**semantic-ui**](https://semantic-ui.com/) - UI component framework with [cdn here](https://cdnjs.com/libraries/semantic-ui)

#### for video streaming: 

- [**Node-Media-Server**](https://github.com/illuspas/Node-Media-Server) - Node.js implementation of RTMP/HTTP-FLV/WS-FLV/HLS/DASH/MP4 Media Server 

- [**flv.js**](https://www.npmjs.com/package/flv.js) - HTML5 Flash Video (FLV) Player written in pure JavaScript without Flash

- [**Open Broadcast Software**](https://obsproject.com) - for video recording and live streaming

## Security vulnerabilities

[Google Application Security Vulnerabilities](https://www.google.com/about/appsecurity/research/), list of software vulnerabilities discovered or fixed by Googlers, along with presentations given at industry security conferences by [Google](https://www.google.com) as well as [publications about security, cryptography, and privacy work](https://ai.google/research/pubs?area=SecurityPrivacyandAbusePrevention) in [Google's main research portal](https://ai.google/research/).

[Google Authenticator](https://www.cvedetails.com/product/25099/Google-Authenticator.html) from [CVE Details](https://www.cvedetails.com) - the ultimate security vulnerability datasource

[Attackers hit weak spots in 2-Factor Authentication](https://krebsonsecurity.com/2012/06/attackers-target-weak-spots-in-2-factor-authentication/) from [KrebsonSecurity.com](https://krebsonsecurity.com).

[Google API Client Libraries - **GoogleUser.getId()**](https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid)

> Do not use the Google IDs returned by getId() to communicate the currently signed in user to your backend server. Instead, [send ID tokens](https://developers.google.com/identity/sign-in/web/backend-auth), which can be securely validated on the server.

[React Router 4: A Practical Introduction](https://auth0.com/blog/react-router-4-practical-tutorial/) (check out **Route Protection and Authentication**)

[React tutorial: Building and Securing your first app](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/) (check out **Adding Features to Authenticated Users** section)
