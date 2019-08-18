export type FoodArray = Array<Food>;

export interface Food {
  carbo: number;
  fat: number;
  kcal: number;
  label: string;
  mealId: string;
  protein: number;
}

export type FoodRawArray = Array<FoodRaw>;

export interface FoodRaw extends Food {
  counter: number;
}
