import React from "react";
import { DietTable } from "./DietTable";
import { getComputedNutritionalValues } from "../services/DietService";

type action = "INCREMENT" | "DECREMENT";

interface Props {
  food: any;
  setComputedFood: (food: any) => void;
}

interface State {
  action: action | null;
  selectedRow: string;
  food: Props["food"];
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
    food: []
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.food !== prevProps.food) {
      this.setState({
        food: getInitialState(this.props.food)
      }, () => {
        this.props.setComputedFood(this.state.food);
      });
    }
  }

  addHandler = (label: string) => {
    this.setState({
      action: "INCREMENT",
      selectedRow: label
    }, () => {
      this.props.setComputedFood(this.state.food);
    });
  };

  subtractHandler = (label: string) => {
    this.setState({
      action: "DECREMENT",
      selectedRow: label
    }, () => {
      this.props.setComputedFood(this.state.food);
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
