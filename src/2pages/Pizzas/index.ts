import { addtoCart, cartReducer, deleteFromCart, resetCartData, toogleCartVisible } from "../../3widgets/Cart/models/cart.model";
import { count } from "../../3widgets/Cart/models/cart.selectors";

import { pizzasReducer } from "./models/pizzas.model";
import { available_pizza} from "./models/pizzas.selectors";
import  PizzasPage  from "./ui/pizzas.ui";


export const reducers = { cartReducer, pizzasReducer }

export const actions = { addtoCart,deleteFromCart, toogleCartVisible, resetCartData }

export const selectors = { available_pizza, count };



export default PizzasPage
