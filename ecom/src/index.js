import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import config from "./config/config"

const root = ReactDOM.createRoot(document.getElementById("root"));

// Using Auth0 for authentication.
root.render(
    <Auth0Provider
        domain= {config.Domain}
        clientId= {config.ClientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>,
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
