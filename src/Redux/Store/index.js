import { createStore } from "redux";
import RootReducer from "../Reducers/index.js";
const Store = createStore(RootReducer);
export default Store;
