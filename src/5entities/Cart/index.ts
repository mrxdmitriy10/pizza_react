

import { addtoCart, deleteFromCart } from "./model/cart.model";
import { count, orderList, price } from "./model/cart.selectors";
import { CartEntity } from "./ui/cart.ui";
export default CartEntity;



export const selectors = { price, orderList, count};

export type { TcartSlice, TitemCart } from "./model/cart.types"


export const actions = {deleteFromCart, addtoCart}