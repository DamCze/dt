import { updateKeycloakToken, keycloak } from "../index.js";

export async function getDietData() {
  const URI = "https://localhost:5001/dt/api/v1";
  await updateKeycloakToken();
  const response = await fetch(URI);
  if (response.ok) {
    return await response.json();
  }

  throw `could not load data, server response: ${response.statusText}`;
}

export async function saveDiet(diet) {
  const URL = "https://localhost:5001/dt/api/v1";
  await updateKeycloakToken();
  fetch(URL, await buildFetchReqOpts(diet));
}

export async function getId() {
  const URI = "https://localhost:5001/dt/api/v1/id";
  await updateKeycloakToken();
  const response = await fetch(URI);
  if (response.ok) {
    return await response.json();
  }

  throw `could not load data, server respone: ${response.statusText}`;
}

export async function buildFetchReqOpts(data) {
  let myHeaders = new Headers();
  myHeaders.set("Content-Type", "application/json");
  myHeaders.set("Authorization", "Bearer " + keycloak.token);
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    cache: "reload",
    body: JSON.stringify({
      Value: "Damian"
    })
  };
  return requestOptions;
}
