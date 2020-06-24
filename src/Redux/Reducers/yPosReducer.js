const initialState = {
  contactYPos: 0
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "getContactOffset":
      return {
        ...state,
        contactYPos: action.payload
      };
    default:
      return state;
  }
}
