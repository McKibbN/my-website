const initialState = {
  page: ''
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "pageChange":
      return {
        page: action.payload
      };
    default:
      return state;
  };
}
