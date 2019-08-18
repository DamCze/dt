import Colors from "../../constants/Colors";
import { UserMeal } from "../../model/Interfaces";

export const mapForCirclePlot = (data: UserMeal) => {
  let array = [
    { name: "kcal", value: 0, fill: Colors.CHETWODE_BLUE },
    { name: "fat", value: 0, fill: Colors.PORTAGE },
    { name: "protein", value: 0, fill: Colors.MORNING_GLORY },
    { name: "carbo", value: 0, fill: Colors.DE_YORK }
  ];

  for (let i = 0; i < data.length; i++) {
    array[0].value += data[i].kcal;
    array[1].value += data[i].fat;
    array[2].value += data[i].protein;
    array[3].value += data[i].carbo;
  }

  return array;
};

export const mapForLinearPlot = (data: UserMeal) =>
  data.map(obj => ({
    kcal: obj.kcal,
    fat: obj.fat,
    protein: obj.protein,
    carbo: obj.carbo,
    date: new Date(obj.entityCreation).valueOf()
  }));
