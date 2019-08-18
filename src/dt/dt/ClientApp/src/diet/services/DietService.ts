import jwt_decode from "jwt-decode";
import { keycloak } from "../../index";
import { saveMeals } from "../../api/DietApi";
import { FoodArrayDto } from "../../api/dto/DietDto";
import { FoodArray, FoodRaw, FoodRawArray } from "../../model/Interfaces";

export const getComputedNutritionalValues = (
  source: FoodArray,
  { action, selectedRow, foodRaw }
): FoodArray | FoodRawArray => {
  const index = source.findIndex(obj => obj.label === selectedRow);
  if (index !== -1) {
    action === "INCREMENT" && (foodRaw[index].counter += 1);
    action === "DECREMENT" && (checkIfPositive(foodRaw[index].counter) && (foodRaw[index].counter -= 1));
    foodRaw[index].carbo = source[index].carbo * foodRaw[index].counter;
    foodRaw[index].fat = source[index].fat * foodRaw[index].counter;
    foodRaw[index].kcal = source[index].kcal * foodRaw[index].counter;
    foodRaw[index].protein = source[index].protein * foodRaw[index].counter;
    return foodRaw;
  }
  return source;
};

export const addDiet = (food: FoodRawArray) => {
  const data = mapFromLocalToRemote(food);
  saveMeals(data);
};

const mapFromLocalToRemote = (food: FoodRawArray): FoodArrayDto =>
  food.map((obj: FoodRaw) => ({
    mealId: obj.mealId,
    userId: jwt_decode(keycloak.token).sub,
    value: obj.counter
  }));

const checkIfPositive = (counter: number) => counter > 0;
