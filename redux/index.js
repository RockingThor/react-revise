import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "Rohit Nandi",
  age: 22,
};

const increment = "post/increment";
const decrement = "post/decrement";

function reducer(state = initialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, post: state.post + 1 };
    case decrement:
      return { ...state, post: state.post - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

const subscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: increment });
store.dispatch({ type: increment });
