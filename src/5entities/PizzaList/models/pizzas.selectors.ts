

import { RootState } from "../../../1app/store";
import { createSelector } from 'reselect';





export const available_pizza = createSelector(
  (state:RootState) => state.pizzasReducer.data,
  (allPizzas) => allPizzas.map((item) => item),
)

