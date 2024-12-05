import { createSelector } from "reselect";
import { RootState } from "../../../1app/store.d";
import { TpizzaState } from "./pizza.types";

export const selectPizzaSelector = createSelector(
    (state: RootState) => state.pizzaReducer,
    (state:TpizzaState) => state.selectPizza,
  )