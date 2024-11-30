

import { RootState } from "../../../1app/store.d";
import { createSelector } from 'reselect';
import { Tpizza } from "../../Pizza/";





export const availablePizzasSelector = createSelector(
  (state:RootState) => state.pizzasReducer,
  (allPizzas) => allPizzas.data.map((item:Tpizza) => item),
)

