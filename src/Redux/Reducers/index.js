import { ADD_ARTICLE } from "../Constants/index.js";

const initialState = {
  articles: []
};

function RootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    state.articles.push(action.payload);
  }
  return state;
}

export default RootReducer;
