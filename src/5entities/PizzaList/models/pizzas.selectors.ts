

import { RootState } from "../../../1app/store.d";
import { createSelector } from 'reselect';
import { Tpizza } from "../../Pizza/";





export const available_pizza = createSelector(
  (state:RootState) => state.pizzasReducer.data,
  (allPizzas) => allPizzas.map((item:Tpizza) => item),
)

