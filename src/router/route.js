import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import Men from "../pages/Men";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/men",
        Component: Men,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
