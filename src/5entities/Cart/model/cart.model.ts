import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TcartSlice, TitemCart } from "./cart.types";

const cartSlice = createSlice({
    name: "cart",
    initialState: { data: [], count: 0, price: 0, visible: false },
    reducers: {
      addtoCartAction: (state: TcartSlice, action: PayloadAction<TitemCart>) => {
        state.data.push(action.payload);
        state.count++;
        state.price= state.price +action.payload.price
      },
      deleteFromCartAction: (state: TcartSlice, action: PayloadAction<number>) => {
        state.count--;
  
        state.price = state.price-state.data[action.payload].price
        state.data.splice(action.payload, 1);
      },
  

      resetCartDataAction: (state: TcartSlice) => {
          state.data = []
          state.count = 0
          state.price = 0
      }
    },
  });
  
  export const { addtoCartAction,deleteFromCartAction, resetCartDataAction } = cartSlice.actions;

  export const cartReducer = cartSlice.reducer;
