import { createStore } from "redux";
import { productsList } from "./productList";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const addToCart = "add/cart";
const removeFromCart = "remove/cart";
const addTOWishList = "add/wishlist";
const removeFromWishlist = "remove/wishlist";

function reducer(state = initialState, action) {
  switch (action.type) {
    case addToCart: {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    case removeFromCart: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    case addTOWishList: {
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    }
    case removeFromWishlist: {
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: addToCart });
