import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app";
import { productStore } from "./store/productRedux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={productStore}>
    <RouterProvider router={router} />
  </Provider>
);
