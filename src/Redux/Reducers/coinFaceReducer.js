const initialState = {
    coinFaceSrc: 'ReactLogo'
  }
  export default function(state = initialState, action) {
    switch (action.type) {
      case "getCoinFaceSrc":
        return {
          coinFaceSrc: action.payload
        };
      default:
        return state;
    };
  }
  