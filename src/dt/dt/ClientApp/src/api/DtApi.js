import { keycloak } from "../index.js";

export async function getData() {
  const URI = "https://localhost:5001/dt/api/v1";
  const response = await fetch(URI, buildFetchReqOpts());
  if (response.ok) {
    return await response.json();
  } else throw `could not load data, server response: ${response.status}`;
}

function buildFetchReqOpts() {
  let myHeaders = new Headers();
  myHeaders.set("Authorization", "Bearer " + keycloak.token);
  myHeaders.set("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.set("Accept", "application/json");
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    cache: "reload"
  };
  return requestOptions;
}
