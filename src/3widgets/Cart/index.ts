

import { count, isVisivble, orderList, price } from "./models/cart.selectors";
import { CartWidget } from "./ui/cart.ui";
export default CartWidget;

export const selectors = { price, orderList, isVisivble, count};

export type { TcartSlice, TitemCart } from "./models/cart.types";
