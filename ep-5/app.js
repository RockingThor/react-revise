import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/Nav";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Form from "./components/Form";
import ValueContext from "./hooks/useContext";

const StarRatingLazy = lazy(() => import("./components/StarRating"));

const App = () => {
  const [name, setName] = useState("Default");
  return (
    <>
      <ValueContext.Provider value={{ name, setName }}>
        <NavBar />
        <Outlet />
      </ValueContext.Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:name",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/rate",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <StarRatingLazy />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
