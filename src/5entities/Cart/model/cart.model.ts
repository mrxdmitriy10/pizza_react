import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TcartSlice, TitemCart } from "./cart.types";

const cartSlice = createSlice({
    name: "cart",
    initialState: { data: [], count: 0, price: 0, visible: false },
    reducers: {
      addtoCart: (state: TcartSlice, action: PayloadAction<TitemCart>) => {
        state.data.push(action.payload);
        state.count++;
        state.price= state.price +action.payload.price
      },
      deleteFromCart: (state: TcartSlice, action: PayloadAction<number>) => {
        state.count--;
  
        state.price = state.price-state.data[action.payload].price
        state.data.splice(action.payload, 1);
      },
  
      toogleCartVisible: (state: TcartSlice) => {
          state.visible = !state.visible
      },
      resetCartData: (state: TcartSlice) => {
          state.data = []
          state.count = 0
          state.price = 0
      }
    },
  });
  
  export const { addtoCart,deleteFromCart, toogleCartVisible, resetCartData } = cartSlice.actions;

  export const cartReducer = cartSlice.reducer;
