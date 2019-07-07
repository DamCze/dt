import { updateKeycloakToken, keycloak } from "../index.js";
// TODO metoda sprawdzajaca, czy wysłanie się powiodło,
// w przeciwnym razie rzuca wyjątek.

export const GetJson = async (url: string) => {
  const headers = await authorization();
  return await fetch(url, {
    method: "GET",
    headers: headers
  });
};

export const PostJson = async (url: string, data: any) => {
  const headers = await authorization();
  await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  });
};

const authorization = async () => {
  await updateKeycloakToken();
  let headers = new Headers();
  headers.set("Authorization", `Bearer ${keycloak.token}`);
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  headers.set("Accept", "application/json");
  return headers;
};
