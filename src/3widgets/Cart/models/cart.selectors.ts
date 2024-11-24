import { createSelector } from "reselect";
import { RootState } from "../../../1app/store.d";

export const isVisivble = createSelector(
    (state: RootState) => state.cartReducer,
    (cart) => cart.visible,
  )