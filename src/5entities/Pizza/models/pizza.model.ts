import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tpizza, TpizzaState } from "./pizza.types";

const PizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    selectPizza: undefined
  },
  reducers: {
    setSelectPizza: (
      state: TpizzaState,
      action: PayloadAction<Tpizza>,
    ) => {
      state.selectPizza = action.payload;
    },
    resetSelectPizza: (
        state: TpizzaState
    ) => {
        state.selectPizza = undefined;
    }
  },
});

export const {setSelectPizza, resetSelectPizza} = PizzaSlice.actions
export const pizzaReducer = PizzaSlice.reducer;
