const adviceReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADVICE":
      return {
        ...state,
        advice: action.payload,
        loading: false,
        error:false
      }

    case "SET_LOADING":
      return {
        ...state,
        loading: true
      }
    
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        errMsg: action.payload
      }      

    default:
      return state;
  }
};

export default adviceReducer;
