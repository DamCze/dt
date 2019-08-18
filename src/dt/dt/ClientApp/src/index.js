import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./dictionary/i18n";
import Keycloak from "keycloak-js";
import { Provider } from "react-redux";
import store from "./redux/store";

export function logout() {
  const logoutOptions = { redirectUri: window.location.origin };
  keycloak.logout(logoutOptions);
}

export function updateKeycloakToken() {
  return keycloak.updateToken(120);
}

function triggerLogout(timeout) {
  setTimeout(keycloak.logout(), timeout);
}

function getUserRole() {
  if (keycloak) {
    const clients = Object.values(keycloak.resourceAccess);
    const roles = clients.map(o => o.roles.join());
    return roles.find(r => r === "User" || r === "Admin");
  }
  return null;
}

const View = () => {
  let role = getUserRole();
  switch (role || {}) {
    case "User":
      return <App />;
    case "Admin":
      return <div>Widok Admina</div>;
    default:
      triggerLogout(7000);
      return <p>Nie jesteś przypisany do żadnej roli</p>;
  }
};

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const keycloak = Keycloak("../../keycloak.json");

keycloak.init({ onLoad: "login-required" }).success(authenticated => {
  if (authenticated) {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter basename={baseUrl}>
          <I18nextProvider i18n={i18n}>
            <View />
          </I18nextProvider>
        </BrowserRouter>
      </Provider>,
      rootElement
    );
  } else {
    logout();
  }
});

export { keycloak };
