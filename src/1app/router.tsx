import { createBrowserRouter } from "react-router-dom";
import PizzasPage from "../2pages/Pizzas";
import { LayoutUi } from "./Layout.ui";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUi />,
    children: [
      {
        path: "",
        element: <PizzasPage />,
        children: [
          {
            path: "order",
            element: <PizzasPage />,
          },
        ],
      },
    ],
  },
]);
