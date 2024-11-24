

import {
  count,
  orderList,
  price,
} from "../../5entities/Cart/model/cart.selectors";



import { cartWidgetReducer, toogleCartWidgetsVisible } from './models/cart.model';
import { isVisivble } from "./models/cart.selectors";

import { CartWidget } from "./ui/cart.ui";

export default CartWidget;


export type {TcartWidgetsSlice} from "./models/cart.types"
export const actions = { toogleCartWidgetsVisible };

export const selectors = { orderList, isVisivble, price, count };
export const reducers = {cartWidgetReducer}