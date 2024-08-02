import { createStore } from "redux";
import { productsList } from "./productList";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
  count: 0,
};

export const addToCart = "add/cart";
export const removeFromCart = "remove/cart";
export const addTOWishList = "add/wishlist";
export const removeFromWishlist = "remove/wishlist";

function reducer(state = initialState, action) {
  switch (action.type) {
    case addToCart: {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
          count: state.count + 1,
        };
      } else {
        const item = state.products.find(
          (item) => item.id === action.payload.id
        );
        const newItem = { ...item, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          count: state.count + 1,
        };
      }
    }
    case removeFromCart: {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const items = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      if (existingCartItem.quantity > 1) {
        const newCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        return {
          ...state,
          cartItems: [...items, newCartItem],
          count: state.count - 1,
        };
      } else if (existingCartItem.quantity === 1) {
        return { ...state, cartItems: [...items], count: state.count - 1 };
      } else {
        return { ...state };
      }
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
    default:
      return state;
  }
}

export const productStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

productStore.dispatch({ type: "@@INIT" });
