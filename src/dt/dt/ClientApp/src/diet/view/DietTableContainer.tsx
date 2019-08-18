import React from "react";
import { DietTable } from "./DietTable";
import { getComputedNutritionalValues } from "../services/DietService";
import { FoodArray, FoodRawArray } from "../../model/Interfaces";

type action = "INCREMENT" | "DECREMENT";

interface Props {
  food: FoodArray;
  setComputedFood: (food: FoodRawArray) => void;
}

interface State {
  action: action | null;
  selectedRow: string;
  foodRaw: FoodRawArray;
}

const getInitialState = (food: Props["food"]) => {
  if (food) {
    const array = food.map(obj => {
      const newObj = JSON.parse(JSON.stringify(obj));
      return { ...newObj, counter: 1 };
    });
    return array;
  }
  return [];
};

export class DietTableContainer extends React.Component<Props, State> {
  state = {
    action: null,
    selectedRow: "",
    foodRaw: []
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.food !== prevProps.food) {
      this.setState({
        foodRaw: getInitialState(this.props.food)
      }, () => {
        this.props.setComputedFood(this.state.foodRaw);
      });
    }
  }

  addHandler = (label: string) => {
    this.setState({
      action: "INCREMENT",
      selectedRow: label
    }, () => {
      this.props.setComputedFood(this.state.foodRaw);
    });
  };

  subtractHandler = (label: string) => {
    this.setState({
      action: "DECREMENT",
      selectedRow: label
    }, () => {
      this.props.setComputedFood(this.state.foodRaw);
    });
  };

  render() {
    return (
      <DietTable
        add={this.addHandler}
        subtract={this.subtractHandler}
        food={getComputedNutritionalValues(this.props.food || [], {
          ...this.state
        })}
      />
    );
  }
}
