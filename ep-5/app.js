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
import { Provider } from "react-redux";
import Accordian from "./components/Accordian";

const StarRatingLazy = lazy(() => import("./components/StarRating"));

const accordianContent = [
  { id: 1, heading: "Heading 1", content: "Content 1" },
  { id: 2, heading: "Heading 2", content: "Content 2" },
  { id: 3, heading: "Heading 3", content: "Content 3" },
];

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
  {
    path: "/accordian",
    element: <Accordian contentArray={accordianContent} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
