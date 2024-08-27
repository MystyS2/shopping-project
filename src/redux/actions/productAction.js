function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/MystyS2/shopping-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getDetails(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/MystyS2/shopping-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_DETAIL_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getDetails };
