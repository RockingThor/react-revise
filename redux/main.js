import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app";
import { productStore } from "./store/productRedux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={productStore}>
    <App />
  </Provider>
);
