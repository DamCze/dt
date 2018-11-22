// import { updateKeycloakToken, keycloak } from "../index.js";

export async function getDietData() {
  const URI = "https://localhost:5001/dt/api/v1";
  const response = await fetch(URI);
  if (response.ok) {
    return await response.json();
  }

  throw `could not load data, server response: ${response.statusText}`;
}

export async function saveDiet(diet) {
  const URL = "https://localhost:5001/dt/api/v1";
  fetch(URL, await buildFetchReqOpts(diet));
}

export async function buildFetchReqOpts(data) {
  let myHeaders = new Headers();
  myHeaders.set("Content-Type", "application/json");
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

const x = {
  MealId: "06524435-24df-4131-99d8-750e35ae65f2",
  Label: "Rice",
  Kcal: 130,
  Fat: 0.3,
  Protein: 2.7,
  Carbo: 28
};
