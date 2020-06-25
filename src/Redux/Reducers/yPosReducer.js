const initialState = {
  contactYPos: 0,
  headerHeight: 0,
  moveToContact: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "getContactOffset":
      return {
        ...state,
        contactYPos: action.payload
      };
    case "getHeaderHeight":
      return {
        ...state,
        headerHeight: action.payload
      };
    case "isSetToContact":
      return {
        ...state,
        moveToContact: action.payload
      };
    default:
      return state;
  }
}
