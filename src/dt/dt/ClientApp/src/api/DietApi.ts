import { GetJson, PostJson } from "./FetchService";
import { URL } from "../constants/config";
import { FoodArrayDto } from "./dto/DietDto";

export const getMeals = async () => {
  const url = `${URL}/api/v1`;
  return await GetJson(url);
}

export const saveMeals = async (food: FoodArrayDto) => {
  const url = `${URL}/api/v1`;
  return await PostJson(url, food);
}