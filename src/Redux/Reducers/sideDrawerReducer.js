const initialState = {
  isSideDrawerOpen: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "sideDrawerAction":
      return {
        isSideDrawerOpen: action.payload
      };
    default:
      return state;
  };
}
