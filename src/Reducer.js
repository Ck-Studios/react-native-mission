import {productList} from "./data/productItems";
import {coupons} from "./data/coupons";
import {
  GET_PRODUCTS, ON_PRESS_PAGE
} from "./Actions";

const sortedProductList = productList.sort((current, next) => {
  return next.score - current.score;
});

const initialState = {
  productList: sortedProductList,
  itemLength: sortedProductList.length,
  coupons,
  page: 1,
  displayItemCount: 5,
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ON_PRESS_PAGE:
      return {...state, page: action.nextPage};
    case GET_PRODUCTS:
      const lastProductIndex = state.page * state.displayItemCount;
      const firstProductIndex = lastProductIndex - state.displayItemCount;
      const currentProductList = initialState.productList.slice(firstProductIndex, lastProductIndex);
      return {...state, productList: currentProductList};
    default:
      return state;
  }
};