import { createBrowserRouter } from "react-router-dom";
import PizzasPage from "../2pages/Pizzas";
import { LayoutUi } from "./Layout.ui";
import OrderPage from "../2pages/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUi />,
    children: [
      {
        path: "",
        element: <PizzasPage />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
    ],
  },
]);

