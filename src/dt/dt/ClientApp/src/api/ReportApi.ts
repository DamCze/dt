import { GetJson } from "./FetchService";
import { URL } from "../constants/config";
import jwt_decode from "jwt-decode";
import { keycloak } from "../index";

export const getPlotData = async () => {
  const userId = jwt_decode(keycloak.token).sub;
  const url = `${URL}/api/v1/` + userId;
  return await GetJson(url);
}