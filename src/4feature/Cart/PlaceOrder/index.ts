import { toogleCartWidgetsVisible } from "../../../3widgets/Cart/models/cart.model";
import { count } from "../../../5entities/Cart/model/cart.selectors";
import { PlaceOrderFeature } from "./ui/placeOrder.ui";

export default PlaceOrderFeature
export const actions = {
  toogleCartWidgetsVisible
};

export const selectors = {
    count
}