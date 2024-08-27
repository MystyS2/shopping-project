let initialState = {
  productList: [],
  detail: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data, detail:[] };
    case "GET_DETAIL_SUCCESS":
      return { ...state, detail: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;
