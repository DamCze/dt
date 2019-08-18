export type FoodArrayDto = Array<FoodDto>;

interface FoodDto {
  mealId: string;
  userId: string;
  value: number;
}
