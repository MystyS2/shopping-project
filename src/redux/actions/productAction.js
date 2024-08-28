import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/MystyS2/shopping-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getProducts({ data }));
  };
}

function getDetails(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/MystyS2/shopping-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getDetail({ data }));
  };
}

export const productAction = { getProducts, getDetails };
