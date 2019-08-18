import { updateKeycloakToken, keycloak } from "../index.js";
import axios from "axios";

export async function saveWorkout(workout) {
  const URI = `https://localhost:5001/dt/api/v1`;
  let myHeaders = new Headers();

  myHeaders.set("Content-Type", "application/json");
  myHeaders.set("Authorization", "Bearer " + keycloak.token);
  myHeaders.set("Content-Type", "application/x-www-form-urlencoded");

  axios.post(URI, workout, { headers: myHeaders });
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
