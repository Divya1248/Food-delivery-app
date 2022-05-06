let initialState = {
  Add_user: [],
    Upload_user: [],
  cart_user:[0],
};

let Createreducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Data":
      return {
        ...state,
        Add_user: action.payload,
       
      };
      case "UploadData":
          return {
            ...state,
            Upload_user: action.payload,
          };
      
      case "cart":
          return {
            ...state,
            cart_user:parseInt (state.cart_user)+ parseInt(action.payload),
          };
    default:
      return state;
  }
};

export default Createreducer;
