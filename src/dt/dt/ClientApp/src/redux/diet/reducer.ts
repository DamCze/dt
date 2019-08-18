import { ADD_FOOD } from "./types";

const defaultState = {
  food: null
};

export const dietReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        food: action.food
      };
    default:
      return state;
  }
};
