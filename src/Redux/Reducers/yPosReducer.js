const initialState = {
  contactYPos: 0,
  splashYPos: 0,
  projectContentYPos: 0,
  selectYPos: 0,
  moveToContact: false,
  moveToProject: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "getContactOffset":
      return {
        ...state,
        contactYPos: action.payload
      };
    case "getSplashOffset":
      return {
        ...state,
        splashYPos: action.payload
      };
    case "getProjectOffset":
      return {
        ...state,
        projectContentYPos: action.payload
      };
    case "getSelectOffset":
      return {
        ...state,
        selectYPos: action.payload
      };
    case "isSetToContact":
      return {
        ...state,
        moveToContact: action.payload
      };
    case "isSetToProject":
      return {
        ...state,
        moveToProject: action.payload
      };
    default:
      return state;
  }
}
