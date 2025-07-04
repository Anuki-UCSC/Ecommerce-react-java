import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'react-java-app',
  clientId: 'react-app',
});

export default keycloak;