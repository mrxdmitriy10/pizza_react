
import { createSelector } from "reselect";
import { RootState } from "../../../1app/store.d";

export const countCartSelector = createSelector(
  (state: RootState) => state.orderReducer,
  (cart) => cart.count,
);


export const orderListCartSelector = createSelector(
  (state: RootState) => state.orderReducer,
  (cart) => cart.data,
);

export const priceCartSelector = createSelector(
    (state: RootState) => state.orderReducer,
    (cart) => cart.price)
  