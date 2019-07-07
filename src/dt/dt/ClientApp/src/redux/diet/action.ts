import { ADD_FOOD } from "./types";

export const addFood = food => ({
  type: ADD_FOOD,
  payload: food
});
