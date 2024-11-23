import { RootState } from "../../../1app/store.d";
import { createSelector } from "reselect";

export const count = createSelector(
  (state: RootState) => state.cartReducer,
  (cart) => cart.count,
);

export const isVisivble = createSelector(
  (state: RootState) => state.cartReducer,
  (cart) => cart.visible,
);

export const orderList = createSelector(
  (state: RootState) => state.cartReducer,
  (cart) => cart.data,
);

export const price = createSelector(
    (state: RootState) => state.cartReducer,
    (cart) => cart.price)
  