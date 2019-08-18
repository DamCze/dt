export type FoodArray = Array<Food>;

export interface Food extends NutritionalValues {
  label: string;
  mealId: string;
}

export type FoodRawArray = Array<FoodRaw>;

export interface FoodRaw extends Food {
  counter: number;
}

export type PlotCircleData = Array<{
  name: string;
  value: number;
  fill: string;
}>;

export type PlotLinearData = Array<NutritionalValues & { date: number }>;

export type UserMeal = Array<NutritionalValues & { entityCreation: string }>;

interface NutritionalValues {
  kcal: number;
  fat: number;
  protein: number;
  carbo: number;
}
