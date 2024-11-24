import { addtoCart } from "../Cart/model/cart.model";
import { addPizza, pizzasReducer } from "./models/pizzas.model";
import { available_pizza } from "./models/pizzas.selectors";
import { pizzaListEntity } from "./ui/pizzaList.ui";
export type { Tpizza } from '../Pizza/models/pizza.types';



export const actions= {addPizza, addtoCart}
export const selectors = { available_pizza };
export const reducers = { pizzasReducer}
export default pizzaListEntity