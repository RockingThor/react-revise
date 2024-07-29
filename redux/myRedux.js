export function myCreateStore(reducer) {
  let state;
  let listeners = [];
  const store = {
    dispatch: function (action) {
      state = reducer(state, action);
      listeners.forEach((lis) => {
        lis();
      });
    },
    getState: function () {
      return state;
    },
    subscribe: function (listener) {
      listeners.push(listener);
    },
  };
  store.dispatch({ type: "@@INIT" });
  return store;
}
