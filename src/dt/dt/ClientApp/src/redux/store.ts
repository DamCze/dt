import { createStore } from "redux";
import { dietReducer } from "./diet/reducer"; 

export default createStore(dietReducer);