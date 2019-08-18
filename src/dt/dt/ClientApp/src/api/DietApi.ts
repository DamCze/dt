import { GetJson } from "./FetchService";
import { URL } from "../constants/config";

export const getMeals = async () => {
  const url = `${URL}/api/v1`;
  return await GetJson(url);
}