import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'react-java-app',
  clientId: 'react-app',
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'login-required' }}>
    <App />
  </ReactKeycloakProvider>
);

reportWebVitals();