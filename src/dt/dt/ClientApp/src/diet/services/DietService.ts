import { FoodArray, Food, FoodRawArray } from "../../model/Interfaces";

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

export const saveDiet = (food: FoodRawArray) => {
  const data = mapFromLocalToRemote(food);
  // TODO: zapisywanie
};

const mapFromLocalToRemote = (food: FoodRawArray): FoodArray =>
  food.map((obj: Food) => ({
    carbo: obj.carbo,
    label: obj.label,
    fat: obj.fat,
    kcal: obj.kcal,
    mealId: obj.mealId,
    protein: obj.protein
  }));

const checkIfPositive = (counter: number) => counter > 0;
