import { updateKeycloakToken, keycloak } from "../index.js";

export const GetJson = async (url: string): Promise<Response> => {
  await updateKeycloakToken();
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${keycloak.token}`
    }
  });
};

export const PostJson = async (url: string, data: any) => {
  await updateKeycloakToken();
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${keycloak.token}`
    },
    body: JSON.stringify(data)
  });
};
