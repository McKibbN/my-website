import { createStore } from "redux";
import RootReducer from "../Reducers/index.js";

const store = createStore(RootReducer);

export default store;
