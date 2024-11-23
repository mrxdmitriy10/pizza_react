import { createBrowserRouter } from "react-router-dom";
import PizzasPage from "../2pages/Pizzas";





export const router = createBrowserRouter([{
    path: "/",
    element: <PizzasPage/>,
    
}]);