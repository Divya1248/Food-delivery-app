let initialState = {
  userData: [],
  loginUser: [],
  PhoneAuth: [],
  GoogleAuth:[],
  reset:[],
};
let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        userData: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        loginUser: action.payload,
      };

    case "Phone_Auth":
      return {
        ...state,
        PhoneAuth: action.payload,
      }

    case "Google_Auth":
      return {
        ...state,
      GoogleAuth: action.payload,
      };
    case "PASSWORD":
      return {
        ...state, reset:action.payload,
      }
    
    default:
      return state;
  }
};
export default AuthReducer;
