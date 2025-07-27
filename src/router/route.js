import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Men from "../pages/Men";
import Home from "../pages/home/Home";

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
