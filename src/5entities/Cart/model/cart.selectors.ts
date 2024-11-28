import { RootState } from "../../../1app/store.d";
import { createSelector } from "reselect";

export const countCartSelector = createSelector(
  (state: RootState) => state.cartReducer,
  (cart) => cart.count,
);


export const orderListCartSelector = createSelector(
  (state: RootState) => state.cartReducer,
  (cart) => cart.data,
);

export const priceCartSelector = createSelector(
    (state: RootState) => state.cartReducer,
    (cart) => cart.price)
  