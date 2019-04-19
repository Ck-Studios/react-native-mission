import {productList} from "./data/productItems";
import {coupons} from "./data/coupons";
import {
  ADD_TO_CART,
  GET_PRODUCTS, ON_PRESS_PAGE, ON_PRESS_PRODUCT, REMOVE_FROM_CART
} from "./Actions";
import {LightGrayColor, PinkColor} from "./common/Theme";

const sortedProductList = productList.sort((current, next) => {
  return next.score - current.score;
}).map((product) => {
  return Object.assign({}, product, {selected: false, cartColor: LightGrayColor})
});

const initialState = {
  productList: sortedProductList,
  wishList: [],
  itemLength: sortedProductList.length,
  coupons,
  page: 1,
  displayItemCount: 5,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ON_PRESS_PAGE:
      return {...state, page: action.nextPage};

    case GET_PRODUCTS:
      const lastProductIndex = state.page * state.displayItemCount;
      const firstProductIndex = lastProductIndex - state.displayItemCount;
      const currentProductList = initialState.productList.slice(firstProductIndex, lastProductIndex);
      return {...state, productList: currentProductList};

    case ON_PRESS_PRODUCT:
      const markAsSelected = state.wishList.map((product) => {
        return product.id === action.productId ?
          Object.assign({}, product, {selected: !product.selected})
          :
          product;
      });
      return {...state, wishList: markAsSelected};

    case ADD_TO_CART:
      const selectedProduct = state.productList.find(({id}) => id === action.productId);
      const markCartAsPink = state.productList.map((product) => {
        return product.id === action.productId ?
          Object.assign({}, product, {cartColor: PinkColor})
          :
          product
      });
      return {...state, productList: markCartAsPink, wishList: [...state.wishList, selectedProduct]};

    case REMOVE_FROM_CART:
      const removedSelectedProductList = state.wishList.filter(({id}) => id !== action.productId);
      const markCartAsGray = state.productList.map((product) => {
        return product.id === action.productId ?
          Object.assign({}, product, {cartColor: LightGrayColor})
          :
          product
      });
      return {...state, productList: markCartAsGray, wishList: removedSelectedProductList};

    default:
      return state;
  }
};