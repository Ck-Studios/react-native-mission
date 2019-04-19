export const GET_PRODUCTS = "GET_PRODUCTS";
export const ON_PRESS_PAGE = "ON_PRESS_PAGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export const onPressPage = (pageNumber) => {
  return {
    type: ON_PRESS_PAGE,
    nextPage: pageNumber,
  }
};

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}