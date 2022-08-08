function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.value,
      };
    case "SET_BARCODE":
      return {
        ...state,
        barcode: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.value,
      };
    default:
      break;
  }
}

export default reducer;
