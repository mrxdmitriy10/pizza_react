

export  { deleteFromCartAction, addtoCartAction } from "./model/cart.model";
export { countCartSelector, orderListCartSelector, priceCartSelector } from "./model/cart.selectors";
import { CartEntity } from "./ui/cart.ui";
export { cartReducer } from './model/cart.model';

export default CartEntity;

export type { TcartSlice, TitemCart } from "./model/cart.types"
