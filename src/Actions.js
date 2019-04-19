export const GET_PRODUCTS = "GET_PRODUCTS";
export const ON_PRESS_PAGE = "ON_PRESS_PAGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ON_PRESS_PRODUCT = "ON_PRESS_PRODUCT";

export const onPressProduct = (productId) => {
  return {
    type: ON_PRESS_PRODUCT,
    productId,
  }
};

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    productId,
  }
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId,
  }
};

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
};