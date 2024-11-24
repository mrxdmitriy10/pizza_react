import { addtoCart ,cartReducer, deleteFromCart, resetCartData, toogleCartVisible } from "../../5entities/Cart/model/cart.model";


import { pizzasReducer } from "../../5entities/PizzaList/models/pizzas.model";

import { available_pizza} from "../../5entities/PizzaList/models/pizzas.selectors";
import  PizzasPage  from "./ui/pizzas.ui";
import { count } from "../../5entities/Cart/model/cart.selectors";
import { cartWidgetReducer } from "../../3widgets/Cart/models/cart.model";



export const reducers = { cartReducer, pizzasReducer, cartWidgetReducer }
export const actions = { addtoCart,deleteFromCart, toogleCartVisible, resetCartData }
export const selectors = { available_pizza, count };
export default PizzasPage
