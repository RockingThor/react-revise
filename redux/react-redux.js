const { createContext, useState, useContext } = require("react");

const storeContext = createContext();

export function Provider({ children, store }) {
  const [state, setState] = useState(store.getState());
  store.subscribe(() => setState(store.getState()));
  return (
    <storeContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </storeContext.Provider>
  );
}

export const useDispatch = () => {
  const store = useContext(storeContext);
  return store.dispatch;
};

export const useSelector = (selector) => {
  const store = useContext(storeContext);
  return selector(store.state);
};
